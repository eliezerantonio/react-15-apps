//rotas para criar usuarios
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//criar usuarios

router.post("/", userController.createUser);

module.exports = router;
