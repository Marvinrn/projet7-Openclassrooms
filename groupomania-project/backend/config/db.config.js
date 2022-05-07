module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "010203Test010203",
    DB: "groupomania",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};