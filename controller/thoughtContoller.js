const { Thought, User, } = require('../models')


module.exports = {
//Creates a thought 
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {

        return User.findByIdAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'Thought created, but found no user with that ID' })
          : res.json('Created the Thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

  },
//Retrieves all thoughts 
  getThoughts(req, res) {
    Thought.find()
      .populate('reactions')
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  //Retrieves a single thought 
  getSingleThought(req, res) {
    Thought.findById(req.params.thoughtId)
      .populate('reactions')
      .then((thoughts) => res.json(thoughts))

      .catch((err) => res.status(500).json(err));
  },


//Deletes a thought 
  deleteThought(req, res) {
    Thought.findByIdAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
      )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'Thought created but no user with this id!' })
          : res.json({ message: 'Thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },


  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId,
        { 
            thoughtText: req.body.thoughtText,
            username: req.body.username
        },
        { new: true }
    )
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));

},




  // Adds a tag to an application. This method is unique in that we add the entire body of the tag rather than the ID with the mongodb $addToSet operator.
  createReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },


  //Delete Reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }

    )
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with this id!' })
      : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));
  }
}