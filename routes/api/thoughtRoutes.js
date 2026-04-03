const router = require('express').Router();
const {createThought, getThoughts} = require('../../controller/thoughtContoller')

router.route('/').post(createThought).get(getThoughts)

module.exports = router;