const router = require('express').Router();
const userApi = require('./userRoutes');
const reactionApi = require('./reactionRoutes');
const thoughtsApi = require('./thoughtRoutes');


router.use('/users', userApi);
router.use('/reactions', reactionApi);
router.use('/thoughts', thoughtsApi);

module.exports = router; 
