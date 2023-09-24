const express = require('express');
const router = express.Router();
const consumerSchema = require('../../models/consumer');


router.get('/',  (req, res) => {
    // Get the user from the request object
    const user = req.user;
    // If the user is not logged in, redirect to login page
    if (!user) {
        return res.status(401).json({ success: false, message: 'No Permission' });
    }
    const id = user._id;
    const userSearch = consumerSchema.findById(id);
    if (!userSearch) {
        return res.status(401).json({ success: false, message: 'No Permission' });
    }
    return res.status(200).json({ success: true, message: 'Authentication successful', user: {
        username: user.local.username,
        email: user.local.email,
        id: user._id,
        roles: user.roles
    } });
    

    
});

module.exports = router;