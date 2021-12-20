import React from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  //obtendo estado de projectos
  const projectsContext = React.useContext(projectContext);
  
  const { actualProject } = projectsContext;
//obter tarefas do projecto
  const tasksContext = React.useContext(taskContext);
  const { getTasks } = tasksContext;

  //funcoa para buscar actual project e buscar suas tarefas

  const selectProject = (id) => {
    actualProject(id); //buscar projecto atual
    getTasks(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
