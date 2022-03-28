import React from "react";
import Project from "./Project";

import projectContext from "../../context/projects/projectContext";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import AlertContext from "../../context/alerts/alertContext";
const ListProjects = () => {
  const projectsContext = React.useContext(projectContext);

  const { message, projects, getProjects } = projectsContext;

  const alertContext = React.useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  //obter projectos ao carregar components

  React.useEffect(() => {
    //se ha algum error
    if (message) {
      showAlert(message.msg, message.category);
    }
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  //revisar se existe algum projecto
  if (projects.length === 0) return <p>Nenhum projecto cadastrado</p>;

  return (
    <ul className="listado-proyectos">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={200} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
