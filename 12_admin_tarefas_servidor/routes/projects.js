const express = require("express");

const router = express.Router();
const projectController = require("../controllers/projectController");
//criar projecto
router.post("/", projectController.createProject);

module.exports = router;
