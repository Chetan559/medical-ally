const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const bookAppointment = require("../validator/authValidator");
const doctorRegistrationValidator = require("../validator/doctorValidator");
const validate = require("../middlewares/validateMiddlware");


// Define default route "/"
router.route("/").get(authControllers.home);

// Define route for "/register"

router.route("/register").post(validate(bookAppointment),authControllers.register);
router.route("/registerDoctor").post(validate(doctorRegistrationValidator),authControllers.registerDoctor);


module.exports = router;
