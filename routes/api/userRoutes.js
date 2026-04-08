const router = require('express').Router();

const {getUsers,createUser, 
    getSingleUser, 
    deleteUser, 
    updateUser,
    addFriend,
    deleteFriend} = require('../../controller/userController');




router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser)


router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)


// router.router('/:userId/friends/:friendId').post()
module.exports = router;