const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

// inisiasi dependency sequelize
db.Sequelize = Sequelize;
// connection db
db.sequelize = sequelize;

db.user = require(
  "../models/user.model.js"
)(sequelize, Sequelize);
db.role = require(
  "../models/role.model.js"
)(sequelize, Sequelize);
db.customer = require(
  "./customer.model.js"
)(sequelize, Sequelize);
db.product = require(
  "./product.model.js"
)(sequelize, Sequelize);
db.order = require(
  "./order.model.js"
)(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId" //
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.customer.belongsToMany(db.product, {
  through: "orders",
  foreignKey: "customerId",
  otherKey: "productId"
});
db.product.belongsToMany(db.customer, {
  through: "orders",
  foreignKey: "productId",
  otherKey: "customerId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;