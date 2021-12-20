import React from "react";

import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  //contexto do projecto
  const projectsContext = React.useContext(projectContext);
  const { project } = projectsContext;

  //obter contexto da terfa
  const tasksContext = React.useContext(taskContext);
  const { deleteTask, getTasks } = tasksContext;

  //extriando projecto actual

  const [actualProject] = project;

  //funcao que se executa quando usuario clica botak eliminar tarefa

  const taskDelete = (id) => {
    deleteTask(id);
    getTasks(actualProject.id);
  };
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.state ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => taskDelete(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
