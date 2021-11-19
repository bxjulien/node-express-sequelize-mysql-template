module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("Role", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  Role.associate = (models) => {
    Role.belongsToMany(models.User, {
      through: "User_Role",
      foreignKey: "roleId",
      otherKey: "userId"
    });
  }

  return Role;
};