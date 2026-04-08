const router = require('express').Router();

const {getUsers,createUser, 
    getSingleUser, 
    deleteUser, 
    updateUser} = require('../../controller/userController');




router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser)


router.router('/api/users/:userId/friends/:friendId').post(addFriend)


// router.router('/:userId/friends/:friendId').post()
module.exports = router;