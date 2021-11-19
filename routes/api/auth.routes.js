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

/** 
 * @swagger 
 * /register: 
 *   post: 
 *     description: Create an user 
 *   
 */  
router.post("/register",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkIfRoleExists
  ],
  controller.register
);

/** 
 * @swagger 
 * /login: 
 *   post: 
 *     description: Connect to the application 
 *   
 */  
router.post("/login", controller.login);

/** 
 * @swagger 
 * /refreshToken: 
 *   post: 
 *     description: Refresh user's jwt 
 *   
 */ 
router.post("/refreshToken", controller.refreshToken);

module.exports = router;
