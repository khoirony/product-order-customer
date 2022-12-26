const { authJwt } = require("../middleware");
const controller = require("../controllers/order.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/create/order", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createOrder
  );

  app.get(
    "/api/list/order",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAllOrder
  );

};