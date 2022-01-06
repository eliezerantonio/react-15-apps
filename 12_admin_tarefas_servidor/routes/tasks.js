const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController.js");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//api/tasks

router.post(
  "/",
  auth,
  [
    check("name", "Nome deve ser preenchido").not().isEmpty(),
    check("project", "Projecto em falta").not().isEmpty(),
  ],
  taskController.createTask
);

//obter tarefas por projects

router.get("/", auth, taskController.getTasks);

//update task s
router.put(
  "/:id",
  auth,
  [
    check("name", "Nome deve ser preenchido").not().isEmpty(),
    check("project", "Projecto em falta").not().isEmpty(),
  ],
  taskController.updateTask
);

router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
