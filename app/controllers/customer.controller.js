const db = require('../models');
const Customer = db.customer;

// Create
exports.createCustomer = async (req, res) => {

  const { nama, email, phone, address } = req.body;
  
  // console.info(customer);
  const customer = await Customer.create({
    nama, email, phone, address
  })

  return res.status(201).json({
    status: 'success',
    message: 'Customer created successfully',
    data: customer
  });
}

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
