const Project = require("../models/Project");
const { validationResult } = require("express-validator");
exports.createProject = async (req, res) => {
  //revisar se ha errors

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    //criar novo project

    const project = new Project(req.body);
    //pegar  id usuario logado
    project.creator = req.user.id;
    project.save();
    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).send("Errordo servidor");
  }
};

//obter toddos project do usuario logado

exports.findAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ creator: req.user.id });

    res.json({ projects });
  } catch (error) {
    console.lgo(error);
    res.status(500).send("Ocorreu um erro");
  }
};

//atualizar perojecto

exports.updateProject = async (req, res) => {
  //revisar se ha errors

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;

  const newProject = {};
  if (name) {
    newProject.name = name;
  }
  try {
    //revisar id

    let project = await Project.findById(req.params.id);
    //reviar se o projecto existe

    if (!project) {
      return res.status(404).json({ mag: "Projecto n econtrado" });
    }
    //verificar criador do projecto

    if (project.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "N autorizado" });
    }

    //atualizar

    project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      { $set: newProject },
      { new: true }
    );
    res.json({ project });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error no servidor");
  }
};
