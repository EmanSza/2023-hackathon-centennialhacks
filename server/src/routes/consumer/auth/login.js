const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', passport.authenticate('local-consumer-login', {
    successRedirect: '/consumer/dashboard',
    failureRedirect: '/consumer/auth/login',
    failureFlash: true
}))

module.exports = router;