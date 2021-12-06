import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasksProjects = [
    { name: "Enviar e-mail", state: true },
    { name: "Cancelar Pedidos", state: false },
    { name: "Enviar Pedidos", state: true },
    { name: "Apagar Conta", state: false }, 
  ];
  return (
    <Fragment>
      <h2>Projecto: Loja virtual</h2>
      <ul className="listado-tareas">
        {tasksProjects.length === 0 ? (
          <li className="tarea"> Sem tarefas</li>
        ) : (
          tasksProjects.map((task) => <Task task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Projecto &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
