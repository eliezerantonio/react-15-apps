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

    const { project } = req.query;
    const existProject = await Project.findById(project);

    if (!existProject) {
      return res.status(404).json({ msg: "Projecto n encontrado" });
    }
    //revisar se projecto arctual pertence ao usuaro autenticado

    if (existProject.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Nao autorizado" });
    }
    //obter tarefas por projects

    const tasks = await Task.find({ project }).sort({ created: -1 });
    res.json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ha um erro");
  }
};

//atualizar tarefa

exports.updateTask = async (req, res) => {
  try {
    //striar projcto

    const { project, name, state } = req.body;

    //verificar se a tarefa existe
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Tarefa n encontrada" });
    }
    const existProject = await Project.findById(project);

    if (!existProject) {
      return res.status(404).json({ msg: "Projecto n encontrado" });
    }
    //revisar se projecto arctual pertence ao usuaro autenticado

    if (existProject.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Nao autorizado" });
    }

    //criar objec com nova informacao
    const newTask = {};

    if (name) newTask.name = name;

    if (state) newTask.state = state;

    //save task

    task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, {
      new: true,
    });

    res.json({ task });
  } catch (error) {
    res.status(500).send("Ha um erro");
  }
};
//eliminar uma tarefa

exports.deleteTask = async (req, res) => {
  try {
    //striar projcto

    const { project } = req.query;

    //verificar se a tarefa existe
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Tarefa n encontrada" });
    }
    const existProject = await Project.findById(project);

    if (!existProject) {
      return res.status(404).json({ msg: "Projecto n encontrado" });
    }
    //revisar se projecto arctual pertence ao usuaro autenticado

    if (existProject.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Nao autorizado" });
    }
    //eliminar

    await Task.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Tarefa Eliminada" });
  } catch (error) {}
};
