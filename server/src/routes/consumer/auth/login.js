const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', (req, res, next) => {
    passport.authenticate('local-consumer-login', (err, user, info) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
        if (!user) {
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
        req.login(user, (loginErr) => {
            if (loginErr) {
                return res.status(500).json({ success: false, message: 'Login error' });
            }
            return res.status(200).json({ success: true, message: 'Authentication successful', user: {
                username: user.local.username,
                email: user.local.email,
                id: user._id
            } });
        });
    })(req, res, next);
})

module.exports = router;