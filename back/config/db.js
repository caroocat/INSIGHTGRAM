const Sequelize = require("sequelize");

const db = new Sequelize(`postgres://localhost:5432/insightgram`, {
  dialect: "postgres",
  logging: false
});

module.exports = db;
