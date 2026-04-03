const { User } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
        .populate('thoughts')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    //Returns a single user
    getSingleUser(req, res) {
        User.findById(req.params.id)
        .populate('thoughts')
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
      },

      //Creates a new User
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.id)
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    //Updates User Information
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id,
            { 
                username: 'jelly',
                email: "jelly@gmail.com"
            },
            { new: true }
        )
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));

    }
}