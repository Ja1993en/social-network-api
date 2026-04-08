const router = require('express').Router();
const userApi = require('./userRoutes');
// const reactionApi = require('./reactionRoutes');
const thoughtsApi = require('./thoughtRoutes');
// const friendsApi = require('./friendsRoutes')


router.use('/users', userApi);
// router.use('/reactions', reactionApi);
router.use('/thoughts', thoughtsApi);
// router.use('/friends', friendsApi);

module.exports = router; 
