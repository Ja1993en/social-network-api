const  mongoose  = require("mongoose");

const reactionSchema = new mongoose.Schema({
    thoughtText: { 
        type: String, 
        required: true,
        max: 280,

    },
    reactionBody:  {type: String, required: true},
    username: {type: String, required: true},
    createdAt: { type: Date, default: Date.now},

});

// applicationSchema
//   .virtual('getResponses')
//   // Getter
//   .get(function () {
//     return this.tags.length;
//   });


const Reaction = mongoose.model('reaction', reactionSchema);

module.exports = Reaction;