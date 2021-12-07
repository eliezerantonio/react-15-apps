import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const projectState = (props) => {
  const initialState = {
    newProject: false,
  };

  //dispach para executar as accoes
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //serie de funcoes para o CRUD

    return <projectContext.Provider>
      
        {props.children}
  </projectContext.Provider>;
};
