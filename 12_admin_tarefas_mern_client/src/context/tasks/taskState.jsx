import React from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Enviar e-mail", state: true, projectId: 1 },
      { id: 2, name: "Cancelar Pedidos", state: false, projectId: 2 },
      { id: 3, name: "Enviar Pedidos", state: true, projectId: 3 },
      { id: 4, name: "Apagar Conta", state: false, projectId: 4 },
      { id: 5, name: "Enviar e-mail", state: true, projectId: 1 },
      { id: 6, name: "Cancelar Pedidos", state: false, projectId: 2 },
      { id: 7, name: "Enviar Pedidos", state: true, projectId: 3 },
      { id: 8, name: "Enviar e-mail", state: true, projectId: 4 },
      { id: 9, name: "Cancelar Pedidos", state: false, projectId: 1 },
      { id: 10, name: "Enviar Pedidos", state: true, projectId: 2 },
    ],
    taskproject: null,
    errortask: false,
  };

  // criar dispatch e estados

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  //criar funcoes

  //obter tarefas de um projetos

  const getTasks = (projectId) => {
    dispatch({ type: TASKS_PROJECT, payload: projectId });
  };

  //Adicionar uma tarefa ao projecto selecionado
  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  //valida e mostra error caso seja necessario

  const validateTask = () => {
    dispatch({ type: VALIDATE_TASK });
  };

  //Eiminar tarefa por id

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  //muda o estado da tarefa

  const changeStateTask = (task) => {
    dispatch({ type: STATE_TASK, payload: task });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,

        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeStateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskState;
