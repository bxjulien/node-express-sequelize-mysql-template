const
    router = require("express").Router(),
    config = require("../../config/swagger.config"),
    swaggerUI = require('swagger-ui-express'),
    swaggerJSDoc = require('swagger-jsdoc'),
    swaggerDocs = swaggerJSDoc(config);

router.get("/", swaggerUI.setup(swaggerDocs));

module.exports = router;
