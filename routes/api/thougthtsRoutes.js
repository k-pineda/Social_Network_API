const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId
router.route('/thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/courses/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
