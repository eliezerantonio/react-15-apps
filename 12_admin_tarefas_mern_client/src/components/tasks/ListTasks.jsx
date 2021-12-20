import React, { Fragment } from "react";
import projectContext from "../../context/projects/projectContext";
import Task from "./Task";
import taskContext from "../../context/tasks/taskContext";
const ListTasks = () => {
  //extrar estado inicial de projctos
  const projectsContext = React.useContext(projectContext);

  const { project, deleteProject } = projectsContext;
  //obter tarefas  do projecto
  const tasksContext = React.useContext(taskContext);
  const { tasksproject } = tasksContext;

  //se nao tem projcto selecionado
  if (!project) return <h2>Seleciona um projecto</h2>;
  //arrray destruiring para extrair porjecto ACTUAL

  const [actualProject] = project;

  //eliminar project

  const onClickDelete = () => {
    deleteProject(actualProject.id);
  };
  return (
    <Fragment>
      <h2>Projecto:{actualProject.name}</h2>
      <ul className="listado-tareas">
        {tasksproject.length === 0 ? (
          <li className="tarea"> Sem tarefas</li>
        ) : (
          tasksproject.map((task) => <Task task={task} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickDelete}
      >
        Eliminar Projecto &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
