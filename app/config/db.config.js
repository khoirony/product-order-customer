module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "000000",
    PORT: 5432,
    DB: "expressjs",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };