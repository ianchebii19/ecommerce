 const express = require('express');

 const router =express.Router()

 const userSignupController  = require("../controler/userSignup")
 
 router.post('/signup', userSignupController)


 module.exports = router