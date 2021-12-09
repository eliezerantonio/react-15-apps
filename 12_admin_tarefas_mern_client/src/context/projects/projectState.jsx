import React from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT } from "../../types";

const ProjectState = (props) => {
  const initialState = {
    formulario: false,
  };

  //dispach para executar as accoes
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = React.useReducer(projectReducer, initialState);

  //serie de funcoes para o CRUD
  const showForm = () => { 
  
}

  return (
    <projectContext.Provider
      value={{
        formulario: state.formulario,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState