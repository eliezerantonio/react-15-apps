import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Criar receita</h2>
      <form>
        <label>Nome Mascote</label>
        <input
          type="text"
          name="mascote"
          className="u-full-width"
          placeholder="Nome da mascote"
        />

        <label>Nome Dono</label>
        <input
          type="text"
          name="proprietario"
          className="u-full-width"
          placeholder="Nome do propp"
        />

        <label>Data</label>

        <input type="date" name="data" className="u-full-width" />

        <label>Hora</label>

        <input type="time" name="hora" className="u-full-width" />

        <label>Sintomas</label>
        <textarea className="u-full-width" name="Sintomas"></textarea>

        <button type="submit" className="u-full-width button-primary">
          Passar receita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
