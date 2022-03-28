import React from "react";

import projectContext from "./projectContext";

import projectReducer from "./projectReducer";

import clientAxios from "../../config/axios";

import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    formulario: false,
    errorform: false,
    project: null,
    message: null,
  };

  //dispach para executar as accoes
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = React.useReducer(projectReducer, initialState);

  //serie de funcoes para o CRUD
  const showForm = () => {
    dispatch({ type: FORM_PROJECT });
  };
  //obter os projectos
  const getProjects = async () => {
    try {
      const result = await clientAxios.get("/api/projects");
      dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //adicionar novo projectState

  const addProject = async (project) => {
    try {
      //inserir projecto na lisa

      const result = await clientAxios.post("/api/projects", project);
      console.log(result);
      dispatch({ type: ADD_PROJECT, payload: result.data });
    } catch (error) {
      console.log(error);
    }
  };

  //VALIDAR FORMULARIO POR ERROR -

  const showError = () => {
    dispatch({ type: VALIDATE_FORM });
  };

  //select project click

  const actualProject = (projectId) => {
    dispatch({ type: ACTUAL_PROJECT, payload: projectId });
  };

  //APAGA UM PROJETO

  const deleteProject = async (projectId) => {
    try {
      await clientAxios.delete(`api/projects/${projectId}`);
      dispatch({ type: DELETE_PROJECT, payload: projectId });
    } catch (error) {
      const alert = {
        msg: "Aconteceu algum erro",
        category: "alert-error",
      };
      dispatch({ type: PROJECT_ERROR, payload: alert });
    }
  };
  return (
    <projectContext.Provider
      value={{
        errorform: state.errorform,
        projects: state.projects,
        formulario: state.formulario,
        project: state.project,
        message: state.message,

        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
