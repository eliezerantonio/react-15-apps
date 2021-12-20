import React from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Enviar e-mail", state: true, projectId: 1 },
      { name: "Cancelar Pedidos", state: false, projectId: 2 },
      { name: "Enviar Pedidos", state: true, projectId: 3 },
      { name: "Apagar Conta", state: false, projectId: 4 },
      { name: "Enviar e-mail", state: true, projectId: 1 },
      { name: "Cancelar Pedidos", state: false, projectId: 2 },
      { name: "Enviar Pedidos", state: true, projectId: 3 },
      { name: "Enviar e-mail", state: true, projectId: 4 },
      { name: "Cancelar Pedidos", state: false, projectId: 1 },
      { name: "Enviar Pedidos", state: true, projectId: 2 },
    ],
    taskproject: null,
  };

  // criar dispatch e estados

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  //criar funcoes

  //obter tarefas de um projetos

  const getTasks = (projectId) => {
    dispatch({ type: TASKS_PROJECT, payload: projectId });
  };

  return (
    <TaskContext.Provider
      value={{ tasks: state.tasks, tasksproject: state.tasksproject, getTasks }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskState;
