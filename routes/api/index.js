const router = require('express').Router();

router.use('/auth', require('./auth.routes'));

router.use('/user', require('./user.routes'));

router.use('/examples', require('./example.routes'));

router.use('/docs', require('./docs.routes'));

module.exports = router;