const {Thought, User} = require('../models')


module.exports = { 
// Creates new post 
    createThought(req, res) {
//Mongoose method to to creat new post 
                        //Passess in the entire request.nody
        Thought.create(req.body)
      
//give  the code below ascess to the informaiton that was passes in 
          .then((thought) => {
              //Thought Id is authomaticall created and used below 
            ///  We still have access to  the information 
            //  findOneAndUpdate ties the thought to a specific user 
            return User.findByIdAndUpdate(
                /// Find the correct user: { _id: req.body.userId },
              { _id: req.body.userId },
              //mongoose syntax: $addToSet:
              //add the postthe the array un User model with id created during promise 
              { $addToSet: { thoughts: thought._id } },
              //returns the updated user record 
              { new: true }
            );
          })
          .then((user) =>
            !user
              ? res
                  .status(404)
                  .json({ message: 'Post created, but found no user with that ID' })
              : res.json('Created the post 🎉')
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });

      },

      getThoughts(req, res) {
        Thought.find()  
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
      Thought.findById(req.params.id)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
    }


}