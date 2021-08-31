module.exports = {
    HOST: process.env.MYSQL_HOST || 'localhost',
    USER: process.env.MYSQL_USER || 'root',
    PASSWORD: process.env.MYSQL_PWD || 'root',
    DB: process.env.MYSQL_DB || 'exampletest',
    dialect: "mysql",
};