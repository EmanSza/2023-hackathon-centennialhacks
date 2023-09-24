const express = require('express');
const router = express.Router();
const VerifyUser = require('../../middleware/verify');
const consumerSchema = require('../../models/consumer');


router.get('/', VerifyUser("guest"), (req, res) => {
    res.send('Router');

});

module.exports = router;