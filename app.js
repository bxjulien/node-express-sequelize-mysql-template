const
  express = require('express'),
  router = require('./routes/router'),
  app = express(),
  cors = require('cors'),
  db = require("./models"),
  isProduction = process.env.NODE_ENV === 'production';

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

if (isProduction) {
  db.sequelize.sync();
}
else {
  db.sequelize.sync({ force: true }).then(() => {
    db.role.create({
      id: 1,
      name: "user"
    }); 
    db.role.create({
      id: 2,
      name: "admin"
    });
  });
}

module.exports = app;
