import React from "react";

import projectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
  const projectsContext = React.useContext(projectContext);

  const { actualProject } = projectsContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => actualProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
