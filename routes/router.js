const 
  router = require('express').Router(),
  path = require('path')

router.use('/api', require('./api'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
});

router.use((req, res) => {
  res.status(404).end('404 Not Found');
});

module.exports = router;