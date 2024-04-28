const express = require("express");
const router = express.Router();
const { getalluser, signup_user, login } = require("../controller/user-cont");



router.get('/',getalluser);


router.post('/signup',signup_user)

router.post('/login',login) 

module.exports = router;