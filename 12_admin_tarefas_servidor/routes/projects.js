const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");
//criar projecto
router.post(
  "/",
  auth,
  [check("name", "Informe o nome do projecto")],
  projectController.createProject
);

//buscar todos projectos
router.get("/", auth, projectController.findAllProjects);

//atualizar projecto  projectos
router.put(
  "/:id",
  auth,
  [check("name", "Informe o nome do projecto")],
  projectController.updateProject
);

//delete project
router.delete("/:id", auth, projectController.deleteProject);

module.exports = router;
