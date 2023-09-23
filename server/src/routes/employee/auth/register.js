const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', passport.authenticate('local-employee-register', {
    successRedirect: '/employee/auth/login',
    failureRedirect: '/employee/auth/register',
    failureFlash: true
    })
)

module.exports = router;