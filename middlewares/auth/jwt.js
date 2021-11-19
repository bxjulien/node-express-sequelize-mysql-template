const
  jwt = require("jsonwebtoken"),
  config = require("../../config/auth.config"),
  db = require("../../models"),
  User = db.User;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided !"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: `Unauthorized ! ${err instanceof jwt.TokenExpiredError ? 'Access Token was expired !' : ''}`
      });
    }
    req.id = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.id).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin
};

module.exports = authJwt;