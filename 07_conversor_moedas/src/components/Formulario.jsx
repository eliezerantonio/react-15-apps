import React from "react";
import styled from "@emotion/styled";

import useCoin from "../hooks/useCoin";
import useCriptomoeda from "../hooks/useCriptomoeda";

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
const Formulario = () => {
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
    ""
  );

  return (
    <form>
      <Select />
      <SelectCripto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
