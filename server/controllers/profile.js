const Profile = require('../models/Profile');
const Roll = require('../models/Roll');
const User = require('../models/User');
const verifyJWT = require('../middleware/verifyJWT');

const createProfile = (req, res) => {

  const currentUser = req.user;

  const profile = new Profile({
    username: currentUser.username,
    belt: req.body.belt,
    rolls: req.body.rolls,
    friends: req.body.friends,
    location: req.body.location,
    img: req.body.img,
    bio: req.body.bio,
    owner: req.user._id,
  });

  profile.save((err, profile) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ message: "Profile Created" })
    }
  });
}

const editProfile = (req, res) => {
  const currentUser = req.user;
}

module.exports = { createProfile };