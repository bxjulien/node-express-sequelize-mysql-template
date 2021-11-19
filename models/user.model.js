module.exports = (sequelize, Sequelize) => {

  const User = sequelize.define("User", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Role, {
      through: "User_Role",
      foreignKey: "userId",
      otherKey: "roleId"
    });
    User.hasOne(models.RefreshToken, {
      foreignKey: 'userId', 
      targetKey: 'id'
    })
  }

  return User;
};