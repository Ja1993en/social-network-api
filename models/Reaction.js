const { Schema, Types, mongoose } = require("mongoose");

const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            max: 280,
        },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },

    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
);

// // applicationSchema
// //   .virtual('getResponses')
// //   // Getter
// //   .get(function () {
// //     return this.tags.length;
// //   });


// const Reaction = mongoose.model('reaction', reactionSchema);

module.exports = reactionSchema;