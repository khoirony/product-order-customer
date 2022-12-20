const db = require('../models');
const Customer = db.costumer;

// Create
exports.createCustomer = (req, res) => {
  Customer.create({
    nama: req.body.nama,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  }).then(customer => {
    res.status(200).send({
      message: 'data berhasil disimpan',
      data: customer,
    });
  });
};

// Read all
exports.findAllCustomer = (req, res) => {
  Customer.findAll().then(customers => {
    res.send(customers);
  });
};

// Read one
exports.findById = (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id
    }
  }).then(customer => {
    res.status(200).send({
      message: 'data berhasil ditemukan',
      data: customer,
    });
  });
};

// Update
exports.updateCustomer = (req, res) => {
  Customer.update({
    nama: req.body.nama,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  }, {
    where: {
      id: req.params.id
    }
  }).then(customer => {
    res.status(200).send({
      message: 'data berhasil diubah',
      data: customer,
    });
  });
};

// Delete
exports.deleteCustomer = (req, res) => {
  Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(customer => {
    res.status(200).send({
      message: 'data berhasil dihapus',
      data: null,
    });
  });
};
