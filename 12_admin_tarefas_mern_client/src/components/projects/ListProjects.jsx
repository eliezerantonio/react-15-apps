import React from "react";
import Project from "./Project";



const ListProjects = () => {
  const projects = [
    { name: "Tenda virtual" },
    { name: "Intranet" },
    { name: "Desenho sites  na web" },
  ];
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
