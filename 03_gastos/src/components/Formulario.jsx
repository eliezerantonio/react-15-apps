import React from "react";
import Error from "./Error";
import shortid from "shortid";
const Formulario = ({ setGasto, setCriarGasto }) => {
  const [nome, setNome] = React.useState("");
  const [quantidade, setQuantidade] = React.useState(0);
  const [error, setError] = React.useState(false);

  //quando gurdamosmnovo gastos

  //qiando usuario meter o gasto

  const definirGasto = (e) => {
    e.preventDefault();
    //validar

    if (quantidade < 1 || isNaN(quantidade) || nome.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    const gasto = {
      nome,
      quantidade,
      id: shortid.generate(),
    };

    console.log(gasto);

    //   contruit gasto

    //passar gasto para o compoente princiapal
    setGasto(gasto);
    setCriarGasto(true);

    //resetar formulario

    setNome("");
    setQuantidade(0);

    //resetat form
  };
  return (
    <div>
      <form onSubmit={definirGasto}>
        <h2> Adicione seus gastos aqui</h2>
        {error ? <Error /> : null}

        <div className="campo">
          <label>Nome gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Saldo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Quantidade gasta</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="3000 kz"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className=" button-primary u-full-width"
          value="Definir gasto"
        />
      </form>
    </div>
  );
};

export default Formulario;
