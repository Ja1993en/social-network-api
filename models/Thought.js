const mongoose = require('mongoose');
const {Reaction, reactionSchema} = require('./Reaction')


const thoughtSchema = new mongoose.Schema({
    thoughtText: { 
        type: String, 
        required: true,
        max: 180
    },
    createdAt: { type: Date, default: Date.now },
    //The user that created this thought
    username: {type: String, required: true},
    reaction:[
    {
        type: mongoose.ObjectId,
        ref: 'reaction'
    },
],
    
    lastAccesed: { type: Date, default: Date.now},

});

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;


