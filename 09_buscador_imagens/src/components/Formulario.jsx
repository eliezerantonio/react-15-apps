import React from "react";
import Error from "./Error";

const Formulario = () => {
  const [termino, saveTermino] = React.useState("");
  const [error, setError] = React.useState(false);

  const searchImages = (e) => {
    e.preventDefault();
    //validar
    if (termino.trim() === "") {
      setError(true);

      return;
    }

    setError(false);
    //enviar  o termino do bsuca ao componente principal
  };
  return (
    <form onSubmit={searchImages}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca uma imagem"
            onChange={(e) => saveTermino(e.target.value)}
          />
        </div>{" "}
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error message="Adicione uma palavra de busca" /> : null}
    </form>
  );
};

export default Formulario;
