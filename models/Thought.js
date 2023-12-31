const { Schema, model, Types } = require('mongoose');
const Reaction = require('./Reaction')
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  username: {
    type: String,
    required: true,
  },
  reactions:[Reaction],
},
{
  toJSON: {
    virtual: true
  }
}
);

thoughtSchema.virtual('reactionCount').get(function (){
  return this.reactions.length; 
}) 

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
