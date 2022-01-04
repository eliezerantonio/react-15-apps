const Task = require("../models/Task");
const Project = require("../models/Project");
const { validationResult } = require("express-validator");

//cria uma nova tarefa

exports.createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //extrari projectos
  try {
    const { project } = req.body;
    const existProject = await Project.findById(project);

    if (!existProject) {
      return res.status(404).json({ msg: "Projecto n encontrado" });
    }
    //revisar se projecto arctual pertence ao usuaro autenticado

    if (existProject.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Nao autorizado" });
    }

    //criar a tareffa

    const task = new Task(req.body);
    await task.save();

    res.json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).send("Existe um error");
  }
};

//buscar tarefas por peojectos

exports.getTasks = async (req, res) => {
  try {
    //striar projcto

    const { project } = req.body;
    const existProject = await Project.findById(project);

    if (!existProject) {
      return res.status(404).json({ msg: "Projecto n encontrado" });
    }
    //revisar se projecto arctual pertence ao usuaro autenticado

    if (existProject.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Nao autorizado" });
    }
    //obter tarefas por projects

    const tasks = await Task.find({ project });
    res.json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ha um erro");
  }
};


//atualizar tarefa