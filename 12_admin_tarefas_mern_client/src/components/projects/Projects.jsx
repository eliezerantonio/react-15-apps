import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks";

import AuthContext from "../../context/auth/authContext";


const Projects = () => {
  //extrair informacao de autenticacao  
  const authContext = React.useContext(AuthContext)
  const { getAuthUser } = authContext;

  React.useEffect(() => {
    getAuthUser();
  },[])
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
