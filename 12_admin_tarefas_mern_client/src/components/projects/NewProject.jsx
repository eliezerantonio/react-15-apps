import React, { Fragment } from "react";

const NewProject = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Novo Projecto
      </button>

      <form className="formularo-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nome do projecto"
          name="name"
        />
        <input type="submit" className="btn btn-primario btn-block" />
      </form>
    </Fragment>
  );
};

export default NewProject;
