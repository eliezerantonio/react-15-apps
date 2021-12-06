import React from "react";

const FormTask = () => {
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input-container">
          <input
            type="text"
            className="input-text"
            placeholder="Nome da tarefa"
            name="name"
          />
        </div>

        <div>
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Adicionar tarefa"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
