const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Reaction = new Schema({
    reactionId: {
    type: Schema.Types.ObjectId, 
    default: () => new Types.ObjectId(),
    },
    reactionBody: {
    type: String,
    required: 'You need to leave a reaction!',
    minlength: 1,
    maxlength: 280,
  },
  username: {
  type: String,
  required: true,
},
    createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
},
{
  toJSON: {
    getters: true,
  },
  id: false,
}
);

module.exports = Reaction;
