const router = require('express').Router();
const thoughtsRoutes = require('./thougthtsRoutes');
const usersRoutes = require('./usersRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
