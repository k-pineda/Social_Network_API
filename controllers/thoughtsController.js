const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user= await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true })

    if (!user) {
      return res.status(404).json({
        message: 'Thought created, but found no user with that ID',
      });
    }
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Course.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }
      const user = await User.findOneAndUpdate(
        { thought: req.params.thoughtId },
        { $pull: { thought: req.params.thoughtId } },
        { new: true }
      );
      
      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }
      res.json({ message: 'Thought deleted from this user!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // Add a reaction to thought
    async addReaction(req, res) {
      console.log('You are adding your reaction!');
      console.log(req.body);
  
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res
            .status(404)
            .json({ message: 'No thought found with that ID :(' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Remove reaction from a thought
    async removeReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res
            .status(404)
            .json({ message: 'No thought found with that ID :(' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
};
