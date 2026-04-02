const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
    username: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
        
    },
    email:  {
        type: String, 
        required: true,
        unique: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    },
    thoughts: {
        type: mongoose.ObjectId,
        ref: 'Thought'
    },
    friends: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    lastAccesed: { type: Date, default: Date.now},
    timestamps: true

});

const User = mongoose.model('User', userSchema);

module.exports = User;





