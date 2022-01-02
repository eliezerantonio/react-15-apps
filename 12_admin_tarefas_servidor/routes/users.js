//rotas para criar usuarios
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { check } = require("express-validator");
//criar usuarios

router.post(
  "/",
  [
    check("name", "Nome e obrigatorio").not().isEmpty(),
    check("email", "Infome email valido").isEmail(),
    check("password", "Senha deve ser no minimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  userController.createUser
);

module.exports = router;
