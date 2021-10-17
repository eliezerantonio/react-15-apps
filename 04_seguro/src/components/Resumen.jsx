import React from "react";
import styled from "@emotion/styled";
import { primieraMaiscula } from "../helper";
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
    <ContenedorResumen>
      <h2>Resumo de contacao</h2>
      <ul>
        <li> Marca: {primieraMaiscula(marca)} </li>
        <li> Plan: {primieraMaiscula(plan)} </li>
        <li> Ano do Auto: {year} </li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
