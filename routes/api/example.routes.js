const 
  controller = require("../../controllers/example.ctrl"),
  router = require("express").Router();

router.post("/", controller.create);

router.get("/", controller.findAll);

router.get("/actives", controller.findAllActives);

router.get("/:id", controller.findOne);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);

router.delete("/", controller.deleteAll);

module.exports = router;
