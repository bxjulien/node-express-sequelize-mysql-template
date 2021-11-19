const 
  router = require('express').Router(),
  path = require('path')

// Serve api routes
router.use('/api', require('./api'));

// Serve frontend app
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
});

// Send 404 on any other undeclared routes
router.use((req, res) => {
  res.status(404).end('404 Not Found');
});

module.exports = router;