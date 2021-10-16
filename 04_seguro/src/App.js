import React from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContedorFormularios = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
const App = () => {
  return (
    <Contenedor>
      <Header titulo="Cotação de Seguros" />

      <ContedorFormularios>
        <Formulario />
      </ContedorFormularios>
    </Contenedor>
  );
};

export default App;
