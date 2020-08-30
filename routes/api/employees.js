// will take controller and use what it needs for specific routes
const router = require("express").Router();
// const employeeController = require("../../controller/employeeController");
const employeeController = require("../../controller/employeeController");

router.route("/")
.get(employeeController.findAll)
.post(employeeController.create);

router.route("/:id")
.get(employeeController.findById)
.post(employeeController.update)
.delete(employeeController.remove);



module.exports = router;