const router = require('express').Router();
const userApi = require('./user');
const reactionApi = require('./reaction');
const thoughtsApi = require('./thought');


router.use('/users', userApi);
router.use('/reactions', reactionApi);
router.use('/thoughts', thoughtsApi);

module.exports = router; 
