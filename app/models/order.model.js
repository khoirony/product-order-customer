module.exports = (sequelize, Sequelize) => {

    const Order = sequelize.define("orders", {
      tanggal_order: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      }
    });
      
    return Order;
};