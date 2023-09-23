const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', passport.authenticate('local-employee-login', {
    successRedirect: '/employee/dashboard',
    failureRedirect: '/employee/auth/login',
    failureFlash: true
}))

module.exports = router;