module.exports = {
    secret: process.env.SECRET || 'secret',
    salt: process.env.SALT || 'salt',
    jwtExpiration: 3600,           // 1 hour
    jwtRefreshExpiration: 86400,   // 24 hours

    /* test config */
    // jwtExpiration: 60,          // 1 minute
    // jwtRefreshExpiration: 120,  // 2 minutes
};