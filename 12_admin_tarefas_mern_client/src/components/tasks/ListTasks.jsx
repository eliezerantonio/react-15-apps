import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasksProjects = [
    { name: "Eligit Elegir colores", state: true },
    { name: "Dar o www", state: false },
    { name: "Eligit plataforma de pago", state: true },
    { name: "Eligir Hosting", state: false },
  ];
  return (
    <Fragment>
      <h2>Projecto: Loja virtual</h2>
      <ul className="litado-tareas">
        {tasksProjects.length === 0 ? (
          <li className="tarea"> Sem tarefas</li>
        ) : (
          tasksProjects.map((task) => <Task task={task} />)
        )}
      </ul>
    </Fragment>
  );
};

export default ListTasks;
