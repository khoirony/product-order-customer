const db = require('../models');
const Product = db.product;

// Create
exports.createProduct = (req, res) => {
  Product.create({
    nama_product: req.body.nama_product,
    uom: req.body.uom,
    stock: req.body.stock,
    harga: req.body.harga
  }).then(product => {
    res.status(200).send({
      message: 'data berhasil disimpan',
      data: product,
    });
  });
};

// Read all
exports.findAllProduct = (req, res) => {
  Product.findAll().then(product => {
    res.send(product);
  });
};

// Read one
exports.findById = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    }
  }).then(product => {
    res.status(200).send({
      message: 'data berhasil ditemukan',
      data: product,
    });
  });
};

// Update
exports.updateProduct = (req, res) => {
  Product.update({
    nama_product: req.body.nama_product,
    uom: req.body.uom,
    stock: req.body.stock,
    harga: req.body.harga
  }, {
    where: {
      id: req.params.id
    }
  }).then(product => {
    res.status(200).send({
      message: 'data berhasil diubah',
      data: product,
    });
  });
};

// Delete
exports.deleteProduct = (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  }).then(_ => {
    res.status(200).send({
      message: 'data berhasil dihapus',
      data: null,
    });
  });
};
