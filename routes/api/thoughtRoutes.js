const router = require('express').Router();
const {createThought, getThoughts, getSingleThought} = require('../../controller/thoughtContoller')

router.route('/').post(createThought).get(getThoughts)

router.route('/:id').get(getSingleThought)

module.exports = router;