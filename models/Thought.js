const mongoose = require('mongoose');
const reactionSchema = require('./Reaction')


const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max: 180
        },
        createdAt: { type: Date, default: Date.now },
        //The user that created this thought
        username: { type: String, required: true },
        reactions: [reactionSchema],

        lastAccesed: { type: Date, default: Date.now },

    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }

);



const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;


