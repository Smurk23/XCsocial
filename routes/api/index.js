const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes')
const router = require('express').Router();

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router