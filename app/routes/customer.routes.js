const { authJwt } = require("../middleware");
const controller = require("../controllers/customer.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/create/customer", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createCustomer
  );

  app.get(
    "/api/list/customer",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAllCustomer
  );

  app.get(
    "/api/find/customer/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findById
  );

  app.put(
    "/api/update/customer/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateCustomer
  );

  app.delete(
    "/api/delete/customer/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteCustomer
  );
};