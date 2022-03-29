import React from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  //extrair o projectoactivo
  const projectsContext = React.useContext(projectContext);

  const { project } = projectsContext;

  //obter a funcao de context das tarefas
  const tasksContext = React.useContext(taskContext);
  const {
    taskselected,
    errortask,
    addTask,
    validateTask,
    getTasks,
    updateTask,
    clearTask,
  } = tasksContext;

  //usefect para detear uma tarefa selecionada

  React.useEffect(() => {
    if (taskselected !== null) {
      setTask(taskselected);
    } else {
      setTask({ name: "" });
    }
  }, [taskselected]);

  //stado do form
  const [task, setTask] = React.useState({ name: "" });

  //extrair o nome do projecto

  const { name } = task;

  //sem nao tem nenhum projecto selecionado retrona null

  if (!project) return null;

  const [actualProject] = project;

  //ler os valores do formularo
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    //validar
    if (name.trim() === "") {
      validateTask();
      return;
    }
    //verificar se estamos a editar ou salvar nova tarefa
    if (taskselected === null) {
      //add nova tarefa ao estado de tarefas
      task.project = actualProject._id;
     
      addTask(task);
    } else {
      //update task existent
      updateTask(task);
      //elimina tarefa selecionada do estado
      clearTask();
    }

    //obter e filtrar tarefa do projecto
    getTasks(actualProject.id);

    //reset form
    setTask({ name: "" });
  };
  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input-container">
          <input
            type="text"
            className="input-text"
            placeholder="Nome da tarefa"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </div>

        <div>
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={taskselected ? "Editar" : "Adicionar"}
          />
        </div>
      </form>
      {errortask ? <p className="mensaje error">Tarefa invalida</p> : null}
    </div>
  );
};

export default FormTask;
