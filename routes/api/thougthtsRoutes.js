const router = require('express').Router();
const {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/').get(getCourses).post(createCourse);

// /api/courses/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
