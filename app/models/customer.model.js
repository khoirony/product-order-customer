module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
      nama: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      }
    });
    
    return Customer;
};