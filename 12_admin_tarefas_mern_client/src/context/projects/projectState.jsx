import React from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import uuid from "uuid";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Loja virtual" },
    { id: 2, name: "Leva" },
    { id: 3, name: "Vida" },
    { id: 4, name: "Localiza" },
  ];

  const initialState = {
    projects: [],
    formulario: false,
    errorform: false,
    project: null,
  };

  //dispach para executar as accoes
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = React.useReducer(projectReducer, initialState);

  //serie de funcoes para o CRUD
  const showForm = () => {
    dispatch({ type: FORM_PROJECT });
  };
  //obter os projectos
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };
  //adicionar novo projectState

  const addProject = (project) => {
    project.id = uuid.v4();
    //inserir projecto na lisa
    dispatch({ type: ADD_PROJECT, payload: project });
  };

  //VALIDAR FORMULARIO POR ERROR -

  const showError = () => {
    dispatch({ type: VALIDATE_FORM });
  };

  //select project click

  const actualProject = (projectId) => {
    dispatch({ type: ACTUAL_PROJECT, payload: projectId });
  };
  return (
    <projectContext.Provider
      value={{
        errorform: state.errorform,
        projects: state.projects,
        formulario: state.formulario,
        project: state.project,

        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
