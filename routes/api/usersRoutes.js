const router = require('express').Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getStudents).post(createStudent);

// /api/users/:userId
router.route('/:userId').get(getSingleStudent).delete(deleteStudent);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addAssignment);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeAssignment);

module.exports = router;
