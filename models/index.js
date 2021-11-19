const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize.config")
const fs = require("fs")
const path = require('path');
const basename = path.basename(module.filename);

const db = {};

/*
  Récupère automatiquement les fichiers modèles;
  Génère ces derniers en base de données, 
  puis gère les associations si besoin
*/
fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-9) === '.model.js');
  })
  .forEach(function (file) {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Création d'une table mère représentant les rôles qu'on veut en bdd 
db.ROLES = ["user", "admin"];

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;