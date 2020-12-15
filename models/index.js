const SQL_HOST = process.env.SQL_HOST || "localhost";
const SQL_USER = process.env.SQL_USER || "root";
const SQL_PASSWORD = process.env.SQL_PASSWORD || "rootroot";
const SQL_DB = process.env.SQL_DB || "budget_db";

const Sequelize = require('sequelize');
const sequelize = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD, {
  host: SQL_HOST,
  dialect: "mysql",
});
const items = require("./items.js")(sequelize, Sequelize)
const users = require("./users.js")(sequelize, Sequelize)
 users.hasMany(items)
 items.belongsTo(users)
const models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
  items: items,
    users: users,

}

module.exports = models;