import React, { Fragment } from "react";
import uuid from 'uuid/dist/v4';
const Formulario = ({criarReceita}) => {
  //criar stado da reeita
  const [receita, setReceita] = React.useState({
    mascote: "",
    proprietario: "",
    data: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = React.useState(false)
  //funcao que se secuta cada vez que o usauiro escreve algo

  const handleChange = (e) => {
    setReceita({
      ...receita,

      [e.target.name]: e.target.value,
    });
  };

  //extrar validatePropTypes

  const { mascote, proprietario, data, hora, sintomas } = receita;

  //quando usuairo pressiona enviar fomrulario

  const submitReceita = e => {
    e.preventDefault();

  //validar usuairo
    if (mascote.trim() === ''||proprietario.trim()===""||hora.trim()===""||data.trim()==="") {
      console.log("error")
    setError(true)
      return;
    }

    //add um ID 
    receita.id = uuid()

    //Criar receita

    criarReceita(receita)

    //Reiniciar o form
setReceita({ mascote: "",
    proprietario: "",
    data: "",
    hora: "",
    sintomas: "",})
    

  }

  return (
    <Fragment>
      <h2>Criar receita</h2>

      {error ? <p className="alerta-error">Todos campos sao obrigatorios</p> : null}
      
      <form onSubmit={submitReceita}>
        <label>Nome Mascote</label>
        <input
          type="text"
          name="mascote"
          className="u-full-width"
          placeholder="Nome da mascote"
          onChange={handleChange}
          value={mascote}
        />

        <label>Nome Dono</label>
        <input
          type="text"
          name="proprietario"
          className="u-full-width"
          placeholder="Nome do propp"
          onChange={handleChange}
          value={proprietario}
        />

        <label>Data</label>

        <input
          type="date"
          name="data"
          className="u-full-width"
          onChange={handleChange}
          value={data}
        />

        <label>Hora</label>

        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Sintomas</label>

        <textarea
          className="u-full-width"
          name="Sintomas"
          onChange={handleChange}
          value={sintomas}
        />

        <button type="submit" className="u-full-width button-primary">
          Passar receita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
