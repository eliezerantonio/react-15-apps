import React from "react";

import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  //contexto do projecto
  const projectsContext = React.useContext(projectContext);
  const { project } = projectsContext;

  //obter contexto da terfa
  const tasksContext = React.useContext(taskContext);
  const { deleteTask, getTasks, changeStateTask, saveActualTask } =
    tasksContext;

  //extriando projecto actual

  const [actualProject] = project;

  //funcao que se executa quando usuario clica botak eliminar tarefa

  const taskDelete = (id) => {
    deleteTask(id, actualProject._id);
    getTasks(actualProject.id);
  };

  //funcao qur modifica estado das tarefas

  const changeState = (task) => {
    if (task.state) {
      task.state = false;
    } else {
      task.state = true;
    }
    changeStateTask(task);
  };

  //quando usuario deseja editar uma tarefa

  const selectTask = (task) => {
    saveActualTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.state ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeState(task)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeState(task)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => taskDelete(task._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
