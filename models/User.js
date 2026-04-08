const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
        type: mongoose.Types.ObjectId,
        ref: 'thought'
    },
    friends: { 
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },

    

});

// userSchema
//   .virtual('getResponses')
//   // Getter
//   .get(function () {
//     return this.tags.length;
//   });

const User = mongoose.model('User', userSchema);

module.exports = User;





