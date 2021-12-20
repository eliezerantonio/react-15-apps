import React from "react";
import Project from "./Project";

import projectContext from "../../context/projects/projectContext";
const ListProjects = () => {
  const projectsContext = React.useContext(projectContext);

  const { projects, getProjects } = projectsContext;

  //obter projectos ao carregar components

  React.useEffect(() => {
    getProjects();
  }, []);
  //revisar se existe algum projecto
  if (projects.length === 0) return <p>Nenhum projecto cadastrado</p>;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
