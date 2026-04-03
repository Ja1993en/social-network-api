const router = require('express').Router();

const {getUsers,createUser} = require('../../controller/userController')


router.route('/').get(getUsers)

module.exports = router;