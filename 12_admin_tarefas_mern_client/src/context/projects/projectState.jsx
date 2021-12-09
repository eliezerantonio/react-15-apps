import React from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT, GET_PROJECTS } from "../../types";

const projects = [
  { id: 1, name: "Loja virtual" },
  { id: 2, name: "Leva" },
  { id: 3, name: "Vida" },
  { id: 4, name: "Localiza" },
];

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    formulario: false,
  };

  //dispach para executar as accoes
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = React.useReducer(projectReducer, initialState);

  //serie de funcoes para o CRUD
  const showForm = () => {
    dispatch({ type: FORM_PROJECT });
  };
  //obter os projectos
  const getProjects = (projects) => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        formulario: state.formulario,
        showForm,
        getProjects,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
