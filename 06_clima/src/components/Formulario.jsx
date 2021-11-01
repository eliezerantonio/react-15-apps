import React from "react";

const Formulario = ({ searchfor, setSearchfor, setConsult }) => {
  //estado do formulario

  const [error, setError] = React.useState(false);

  const { cidade, pais } = searchfor;

  const handleChange = (e) => {
    //atualizar estado

    setSearchfor({ ...searchfor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cidade.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">
          {" "}
          Todos os campos devem ser preenchidos
        </p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          className="form-control"
          name="cidade"
          id="cidade"
          value={cidade}
          onChange={handleChange}
        />
        <label htmlFor="cidade">Cidade: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Selecione um pais --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AO">Angola</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>ais --
        </select>

        <label htmlFor="pais">Pais</label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="wawes-effect waves-light btn-large btn-blcok yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Formulario;
