import React, { Fragment } from "react";
import projectContext from "../../context/projects/projectContext";
import Task from "./Task";

const ListTasks = () => {
  const projectsContext = React.useContext(projectContext);

  const { project, deleteProduct } = projectsContext;

  //se nao tem projcto selecionado
  if (!project) return <h2>Seleciona um projecto</h2>;
  //arrray destruiring para extrair porjecto ACTUAL

  const [actualProject] = project;

  const tasksProjects = [
    { name: "Enviar e-mail", state: true },
    { name: "Cancelar Pedidos", state: false },
    { name: "Enviar Pedidos", state: true },
    { name: "Apagar Conta", state: false },
  ];

  //eliminar project

  const onClickDelete = () => {
    deleteProduct(project.id);
  };
  return (
    <Fragment>
      <h2>Projecto:{actualProject.name}</h2>
      <ul className="listado-tareas">
        {tasksProjects.length === 0 ? (
          <li className="tarea"> Sem tarefas</li>
        ) : (
          tasksProjects.map((task) => <Task task={task} />)
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
