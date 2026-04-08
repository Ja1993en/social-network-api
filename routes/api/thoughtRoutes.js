const router = require('express').Router();
const {createThought, 
    getThoughts, 
    getSingleThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controller/thoughtContoller')

router.route('/').post(createThought).get(getThoughts)

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought)

router.route('/:thoughtId/reactions').post(createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)






module.exports = router;