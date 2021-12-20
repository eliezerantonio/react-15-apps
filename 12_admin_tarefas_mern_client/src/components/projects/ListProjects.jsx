import React from "react";
import Project from "./Project";

import projectContext from "../../context/projects/projectContext";

import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout="200" classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
