import React from "react";
import styled from "@emotion/styled";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;
const Resumen = ({ datos }) => {
  //extrair de tatos
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") return null;
  return (
    <div>
      <h2>Resumo de contacao</h2>;
      <ul>
        <li> Marca: </li>
        <li> Plan: </li>
        <li> Ano do Auto: </li>
      </ul>
    </div>
  );
};

export default Resumen;
