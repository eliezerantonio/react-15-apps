const Project = require("../models/Project");

exports.createProject = async (req, res) => {
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
