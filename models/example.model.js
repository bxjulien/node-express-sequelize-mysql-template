module.exports = (sequelize, Sequelize) => {
  
  const Example = sequelize.define("Example", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    isActive: {
      type: Sequelize.BOOLEAN
    }
  });

  return Example;
};