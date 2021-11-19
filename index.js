require('dotenv').config()

const
  express = require('express'),
  router = require('./routes/router'),
  app = express(),
  cors = require('cors'),
  db = require("./models"),
  port = process.env.PORT || 5000,
  env = process.env.ENV_URL || 'http://localhost',
  swaggerUi = require('swagger-ui-express'),
  isProduction = process.env.NODE_ENV === 'production';

app.use(cors());

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/docs', swaggerUi.serve);

app.use(router);

if (isProduction) {
  // Generate database model 
  db.sequelize.sync();
}
else {
  // Re-generate database model including seeds
  db.sequelize.sync({ force: true }).then(() => {
    require('./models/seeds/index')(db);
  });
}

app.listen(port, function () {
  console.log(`\n Listening on ${env}:${port} ( ◠﹏◠ ) \n`);
});

module.exports = app;
