const db = require('../models');
const Order = db.order;

// Create
exports.createOrder = (req, res) => {
  Order.create({
    customerId: req.body.customerId,
    productId: req.body.productId,
    tanggal_order: req.body.tanggal_order,
    status: req.body.status
  }).then(order => {
    res.status(200).send({
      message: 'data berhasil disimpan',
      data: order,
    });
  });
};

// Read all
exports.findAllOrder = (req, res) => {
  Order.findAll().then(order => {
    res.send(order);
  });
};

