const
  authJwt = require("../../middlewares/auth/jwt"),
  controller = require("../../controllers/user.ctrl"),
  router = require("express").Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get(
  "/test/all",
  controller.allAccess
);

router.get("/test/user",
  [authJwt.verifyToken],
  controller.userBoard
);

router.get("/test/admin/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);

module.exports = router;
