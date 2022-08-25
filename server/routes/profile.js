const express = require("express");
const router = express.Router();

const { createProfile, getProfile, editProfile, deleteProfile } = require("../controllers/profile");
const verifyJWT = require("../middleware/verifyJWT");

// @route   POST api/profile
// @desc    Create profile
// @access  Private
router.post("/createProfile", verifyJWT, createProfile);

// @route   GET api/profile
// @desc    Get current users profile
// @access  Public
router.get("/getProfile", getProfile);

// @route   PUT api/profile
// @desc    Edit current users profile
// @access  Private
router.put("/editProfile", verifyJWT, editProfile);

// @route   DELETE api/profile
// @desc    Delete current users profile
// @access  Private
router.delete("/deleteProfile", verifyJWT, deleteProfile);


module.exports = router;

