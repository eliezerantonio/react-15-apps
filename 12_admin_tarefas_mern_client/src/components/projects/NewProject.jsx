import React, { Fragment } from "react";

const NewProject = () => {
  //stdo para projecto

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

    //mudar estados
    //reset form
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Novo Projecto
      </button>

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
    </Fragment>
  );
};

export default NewProject;
