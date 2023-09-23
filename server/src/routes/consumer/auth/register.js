const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', (req, res, next) => {
    passport.authenticate('local-consumer-register', (err, user, info) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
        if (!user) {
            console.log(next)
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
        req.login(user, (loginErr) => {
            if (loginErr) {
                return res.status(500).json({ success: false, message: 'Login error' });
            }
            return res.status(200).json({ success: true, message: 'Authentication successful' });
        });
    })(req, res, next);
});

module.exports = router;