const mongoose = require('mongoose');

const thoughtSchema = new mongoose.schema({
    thoughtText: { 
        type: String, 
        required: true,
        
        max: 180
    },
    created: { type: Date, default: Date.now },
    //The user that created this thought
    username: {type: String, required: true},
    reaction: [reactionSchema],
    
    lastAccesed: { type: Date, default: Date.now},

});

const Thought = mongoose.model('Tought', thoughtSchema);

module.exports = Thought;


