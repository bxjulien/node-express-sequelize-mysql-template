const router = require('express').Router()

router.use('/api', require('./api'));

router.get('/', (req, res) => {
  res.send('Welcome a super cool NodeJS API Template')
});

router.use((req, res) => {
  res.status(404).end('404 Not Found');
});

module.exports = router;