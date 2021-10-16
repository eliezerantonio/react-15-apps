import React from "react";
import styled from "@emotion/styled";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.input`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
`;
const Formulario = () => {
  const [datos, guardarDatos] = React.useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, guardarError] = React.useState(false);

  //extrair valor dos ease

  const { marca, year, plan } = datos;

  //ler dados do fomrulario

  const obterInfromacion = (e) => {
    guardarDatos({ ...datos, [e.target.name]: e.target.value });
  };

  //quando usuario presionar enviar fomrulario
  const contizarSeguro = (e) => {
    e.preventDefault();

    if (marca.trim() === "" || year.trim() === "" || year.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //pbter diferenca de anos

    // por cada ano deve restar 3 porcento do valor

    //Americano 15%
    //Asiatico 5%
    //Europeu 30%

    // Basico aumenta 20%
    //Completo 50%

    //total
  };

  return (
    <form onSubmit={contizarSeguro}>
      {error ? <Error> Todos os campos sao obrigatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obterInfromacion}>
          <option value=""> -- Selecione</option>
          <option value="americano">Americano</option>
          <option value="europeu">Europeu</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>{" "}
      <Campo>
        <Label>Ano</Label>
        <Select name="year" value={year} onChange={obterInfromacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plano</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obterInfromacion}
        />{" "}
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obterInfromacion}
        />{" "}
        Completo
      </Campo>
      <Boton type="submit" value="Cotar" />
    </form>
  );
};

export default Formulario;
