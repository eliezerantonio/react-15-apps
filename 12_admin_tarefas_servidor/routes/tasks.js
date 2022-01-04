const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController.js");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//api/tasks

router.post(
  "/",
  auth,
  [check("name", "Nome deve ser preenchido").not().isEmpty()],
  taskController.createTask
);

module.exports = router;
