const router = require('express').Router();
const api = require('./api');

// console.log(api)
router.use('/api', api)

module.exports = router;