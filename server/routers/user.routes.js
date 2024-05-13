const { Signup, Login } = require("../Controllers/useer.controller");
const Verification = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", Verification.userVerification);

module.exports = router;
