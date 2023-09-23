const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', passport.authenticate('local-consumer-login', {
    successRedirect: '/user',
    failureRedirect: '/login',
    failureFlash: true
}))

module.exports = router;