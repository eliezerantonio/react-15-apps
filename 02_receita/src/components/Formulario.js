import React, { Fragment } from "react";

const Formulario = () => {
  //criar stado da reeita
  const [receita, setReceita] = React.useState({
    mascote: "",
    proprietario: "",
    data: "",
    hora: "",
    sintomas: "",
  });
  //funcao que se secuta cada vez que o usauiro escreve algo

  const handleChange = () => {
    console.log("escrevendo");
  };
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
          onChange={handleChange}
        />

        <label>Nome Dono</label>
        <input
          type="text"
          name="proprietario"
          className="u-full-width"
          placeholder="Nome do propp"
          onChange={handleChange}
        />

        <label>Data</label>

        <input
          type="date"
          name="data"
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Hora</label>

        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Sintomas</label>

        <textarea
          className="u-full-width"
          name="Sintomas"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Passar receita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
