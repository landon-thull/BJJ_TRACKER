const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {

  //get token from header
  const token = req.headers["x-access-token"].split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.json({
        isLoggedIn: false,
        message: "Failed to authenticate",
      });

      //clear user
      req.user = {};

      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    })
  } else {
    res.json({ message: "Incorrect token given", isLoggedIn: false })
  }
}

module.exports = verifyJWT;