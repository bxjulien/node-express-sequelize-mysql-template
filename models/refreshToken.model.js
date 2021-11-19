const
    config = require("../config/auth.config"),
    { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, Sequelize) => {
    const RefreshToken = sequelize.define("RefreshToken", {
        token: {
            type: Sequelize.STRING,
        },
        expiryDate: {
            type: Sequelize.DATE,
        },
    });

    RefreshToken.createToken = async (user) => {
        let expiredAt = new Date();
        expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

        let refreshToken = await this.create({
            token: uuidv4(),
            userId: user.id,
            expiryDate: expiredAt.getTime(),
        });

        return refreshToken.token;
    };

    RefreshToken.verifyExpiration = (token) => {
        return token.expiryDate.getTime() < new Date().getTime();
    };

    RefreshToken.associate = (models) => {
        RefreshToken.belongsTo(models.User, {
            foreignKey: 'userId', targetKey: 'id'
        });
    }

    return RefreshToken;
};