import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import FormTask from "../tasks/FormTask";
const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTask />
          <div className="contendedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
