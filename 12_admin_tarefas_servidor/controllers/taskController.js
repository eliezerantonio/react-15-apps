const Task = require("../models/Task");
const Project = require("../models/Project");

//cria uma nova tarefa

exports.createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};
