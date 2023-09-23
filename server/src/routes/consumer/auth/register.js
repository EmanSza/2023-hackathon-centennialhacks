const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', passport.authenticate('local-consumer-register', {
    successRedirect: '/login',
    failureRedirect: '/register',
    failureFlash: true
    })
)

module.exports = router;