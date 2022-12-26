const { authJwt } = require("../middleware");
const controller = require("../controllers/product.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/create/product", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createProduct
  );

  app.get(
    "/api/list/product",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAllProduct
  );

  app.get(
    "/api/find/product/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findById
  );

  app.put(
    "/api/update/product/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateProduct
  );
  
  app.delete(
    "/api/delete/product/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteProduct
  );
};