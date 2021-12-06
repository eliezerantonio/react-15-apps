import React from "react";
import Project from "./Project";



const ListProjects = () => {
  const projects = [
    { name: "Loja virtual" },
    { name: "Leva" },
    { name: "Vida" },
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
