import React, { Fragment } from "react";
import uuid from "uuid/dist/v4";

const Formulario = ({ criarReceita }) => {
  // criar state para receita

  const [receita, atualizarReceita] = React.useState({
    mascote: "",
    proprietario: "",
    data: "",
    hora: "",
    sintomas: "",
  });
  const [error, atualizarError] = React.useState(false);

  const atualizarState = (e) => {
    atualizarReceita({ ...receita, [e.target.name]: e.target.value });
  };

  //estrair os valores

  const { mascote, proprietario, data, hora, sintomas } = receita;

  //quando usuaro pressiona enviar formulario

  const submeterReceita = (e) => {
    e.preventDefault();

    // validar
    if (
      mascote.trim() === "" ||
      proprietario.trim() === "" ||
      data.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      atualizarError(true);

      return;
    }

    atualizarError(false);

    //add um id
    receita.id = uuid();

    console.log(receita);
    //criar receita
    criarReceita(receita);
    //reiniciar fomrulario
    atualizarReceita({
      mascote: "",
      proprietario: "",
      data: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h1>Criar receita</h1>
      {error ? (
        <p className="alerta-error">Todos campos sao obrigatorios</p>
      ) : null}
      <form onSubmit={submeterReceita}>
        <label>Nome da Mascote</label>
        <input
          type="text"
          name="mascote"
          className="u-full-width"
          placeholder="Nome mascote"
          onChange={atualizarState}
          value={mascote}
        />
        <label>Nome do Dono</label>
        <input
          type="text"
          name="proprietario"
          className="u-full-width"
          placeholder="Dono da mascote"
          onChange={atualizarState}
          value={proprietario}
        />
        <label>Data</label>
        <input
          type="date"
          name="data"
          className="u-full-width"
          onChange={atualizarState}
          value={data}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={atualizarState}
          value={hora}
        />

        <label>Sintomas</label>

        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={atualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Passar receita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
