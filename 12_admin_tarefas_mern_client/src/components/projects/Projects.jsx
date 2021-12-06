import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import FormTask from "../tasks/FormTask";
import ListProjects from "./ListProjects";
const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListProjects />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
