import React from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import clientAxios from "../../config/axios";

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAR_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasksproject: [],
    errortask: false,
    taskselected: null,
  };

  // criar dispatch e estados

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  //criar funcoes

  //obter tarefas de um projetos

  const getTasks = async (project) => {
    try {
      const result = await clientAxios.get("/api/tasks", {
        params: { project },
      });
      dispatch({ type: TASKS_PROJECT, payload: result.data.tasks });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  //Adicionar uma tarefa ao projecto selecionado
  const addTask = async (task) => {
    try {
      const result = await clientAxios.post("/api/tasks", task);
      console.log(result);
      dispatch({ type: ADD_TASK, payload: task });
    } catch (error) {
      console.log(error);
    }
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

  //EXTRAR UMA TAEFA PARA EDITR

  const saveActualTask = (task) => {
    dispatch({ type: ACTUAL_TASK, payload: task });
  };

  //EDITAR TAREFA

  const updateTask = (task) => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  //ELIMINA  A TAREFA SELECIONADA

  const clearTask = () => {
    dispatch({
      type: CLEAR_TASK,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        taskselected: state.taskselected,

        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeStateTask,
        saveActualTask,
        updateTask,
        clearTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
