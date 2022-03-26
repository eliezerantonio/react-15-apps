const express = require("express");

const router = express.Router();

const { check } = require("express-validator");

const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

//api/auth
router.post(
  "/",
  [
    check("email", "Infome um e-mail valido").isEmail(),
    check("password", "A senah deve ter no minimo 6 carcteres").isLength({
      min: 6,
    }),
  ],
  authController.authUser
);

router.get("", auth, authController.getAuthUser);

module.exports = router;
