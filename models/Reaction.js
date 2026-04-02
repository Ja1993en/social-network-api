const  mongoose  = require("mongoose");

const reactionSchema = new mongoose.schema({
    thoughtText: { 
        type: String, 
        required: true,
        max: 280,

    },
    reactionBody:  {type: String, required: true},
    username: {type: String, required: true},
    createdAt: { type: Date, default: Date.now},

});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;