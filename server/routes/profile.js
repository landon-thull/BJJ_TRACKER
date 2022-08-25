const express = require("express");
const router = express.Router();

const { createProfile } = require("../controllers/profile");
const verifyJWT = require("../middleware/verifyJWT");

router.post("/createProfile", verifyJWT, createProfile);

module.exports = router;

