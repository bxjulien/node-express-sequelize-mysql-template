const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/user', require('./user.routes'));

router.use('/examples', require('./example.routes'));

module.exports = router;