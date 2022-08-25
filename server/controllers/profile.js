const Profile = require('../models/Profile');
const Roll = require('../models/Roll');
const User = require('../models/User');
const verifyJWT = require('../middleware/verifyJWT');

const createProfile = async (req, res) => {

  const currentUser = req.user;

  const existingProfile = await Profile.findOne({ owner: req.user._id })

  if (existingProfile) {
    res.json({ message: "Profile already exists" })
  } else {
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
}

const getProfile = (req, res) => {
  Profile.find({ owner: req.user._id })
    .then(profile => {
      if (!profile) {
        res.json({ message: "No profile found" });
      } else {
        res.status(200).json(profile);
      }
    }).catch(err => {
      res.status(500).json({ message: err.message });
    }
    );
}

const editProfile = (req, res) => {
  Profile.findOneAndUpdate({ owner: req.user._id }, { $set: req.body }, { new: true })
    .then(profile => {
      if (!profile) {
        res.json({ message: "No profile found" });
      } else {
        res.status(200).json(profile);
      }
    }).catch(err => {
      res.status(500).json({ message: err.message });
    }
    );
}

const deleteProfile = (req, res) => {
  Profile.findOneAndDelete({ owner: req.user._id })
    .then(profile => {
      if (!profile) {
        res.json({ message: "No profile found" });
      } else {
        res.status(200).json(profile);
      }
    }).catch(err => {
      res.status(500).json({ message: err.message });
    }
    );
}


module.exports = { createProfile, getProfile, editProfile, deleteProfile };