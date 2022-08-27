const mongoose = require('mongoose');
const User = require("./User");

const profileSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
  },
  username: String,
  img: {
    data: Buffer,
    type: String,
  },
  bio: {
    type: String,
  },
  belt: {
    type: String,
    required: true,
  },
  rolls: {
    type: Array,
  },
  friends: {
    type: Array,
  },
  location: {
    type: String
  }
});

const Profile = mongoose.model('Profile', profileSchema, 'data');

module.exports = Profile;