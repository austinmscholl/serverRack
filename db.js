const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    `postgresql://postgres:${encodeURIComponent(
      process.env.PW
    )}@localhost/shiftmanagerapp`,
  {
    dialect: "postgres"
  }
);

sequelize
  .authenticate()
  .then(
    () => console.log("Connected to shift manager app database"),
    err => console.log(err)
  );

module.exports = sequelize;
