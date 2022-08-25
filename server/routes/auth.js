const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/auth');
const verifyJWT = require("../middleware/verifyJWT");


// @route /register
// @desc register new user
// @access public
router.post('/register', register);

// @route /login
// @desc authenticate user
// @access public
router.post('/login', login);

router.get('/getUsername', verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
})

module.exports = router;