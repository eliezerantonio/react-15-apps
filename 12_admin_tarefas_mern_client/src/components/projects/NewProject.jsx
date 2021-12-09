import React, { Fragment } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  //estado do formulario

  const projectsContext = React.useContext(projectContext);
  const {
    formulario,
    errorform,
    showForm,
    addProject,
    showError,
    actualProject,
  } = projectsContext;

  //stado para projecto
  const [project, setProject] = React.useState({ name: "" });

  //extraindo valores para

  const { name } = project;

  const onChangeProject = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  //quando usuario enviar o projecto
  const onSubmitProject = (e) => {
    e.preventDefault();
    //validar o projectos
    if (name === "") {
      showError();
      return;
    }

    //mudar estados
    addProject(project);
    //reset form
    setProject({ name: "" });
  };
  //mostrar formulario de
  const onClick = () => {
    showForm();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClick}
      >
        Novo Projecto
      </button>
      {formulario ? (
        <form className="formularo-nuevo-proyecto" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Nome do projecto"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input type="submit" className="btn btn-primario btn-block" />
        </form>
      ) : null}
      {errorform ? <p className="error mensaje">Preencha o campo</p> : null}
    </Fragment>
  );
};

export default NewProject;
