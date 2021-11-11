import React from "react";
import styled from "@emotion/styled";

import useCoin from "../hooks/useCoin";
import useCriptomoeda from "../hooks/useCriptomoeda";
import axios from "axios";
import Error from "./Error";

const Button = styled.input`
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Formulario = ({ setCoin, setCriptomoeda }) => {
  const [listcriptmoedas, setListcriptomoedas] = React.useState([]);
  const [error, setError] = React.useState(false);
  const MOEDAS = [
    { code: "USD", name: "Dolar Estados Unidos" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "AOA", name: "Angola Kwanza" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "LIbra Esterlina" },
  ];
  const [coin, Select] = useCoin("Escolha a sua moeda", "", MOEDAS);
  const [criptomoeda, SelectCripto] = useCriptomoeda(
    "Escolha sua criptomoeda",
    "",
    listcriptmoedas
  );

  //executar chamada da api

  React.useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);

      setListcriptomoedas(result.data.Data);
    };

    consultAPI();
  }, []);

  //quando usuario fazer submit

  const handleSubmit = (e) => {
    e.preventDefault();
    //se ambos campos estao preenchidos
    if (coin === "" || criptomoeda === "") {
      setError(true);
      return;
    }

    //passar dados para o componento principal
    setError(false);

    setError(coin);
    setCriptomoeda(criptomoeda);
  };
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="Todos campos devem ser preenchidos" /> : null}
      <Select />
      <SelectCripto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
