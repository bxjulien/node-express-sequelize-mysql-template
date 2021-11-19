const
  verifySignUp = require("../../middlewares/auth/verifySignup"),
  controller = require("../../controllers/auth.ctrl"),
  router = require("express").Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/register",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkIfRoleExists
  ],
  controller.register
);

router.post("/login", controller.login);

module.exports = router;
