const User = require('../models/User');
const bcrypt = require('bcrypt');
const { request } = require('http');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const register = async (req, res) => {

  let hashedPassword = "";

  const takenUsername = await User.findOne({ username: req.body.username });
  const takenEmail = await User.findOne({ email: req.body.email });

  //check if email or username is already in use
  if (takenUsername || takenEmail) {
    res.json({ message: "username or email are taken" })
  } else {
    try {
      //hash password with salt
      hashedPassword = await bcrypt.hash(req.body.password, 10);
    } catch (err) {
      res.json({ message: err.message });
    }

    const dbUser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });

    dbUser.save((err, user) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ message: "User Created" })
      }
    });
  }
}

const login = async = (req, res) => {
  const userLoggingIn = req.body;

  //check for username in user db
  User.findOne({ username: userLoggingIn.username })
    .then(dbUser => {
      if (!dbUser) {
        res.json({ message: "Invalid username or password" });
      } else {
        userDB = dbUser;
      };

      //hash login password and compare to stored hash
      bcrypt.compare(userLoggingIn.password, userDB.password)
        .then(isCorrect => {
          if (isCorrect) {
            const payload = {
              id: userDB._id,
              username: userDB.username,
            }

            //sign jwt with 1 day expiration
            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              { expiresIn: 86400 },
              (err, token) => {
                if (err) return res.json({ message: err.message });

                return res.json({
                  message: "Success",
                  token: "Bearer " + token,
                })
              }
            )
          } else {
            return res.json({
              message: "Invalid username or password"
            })
          }
        })
    })
}
module.exports = { register, login };