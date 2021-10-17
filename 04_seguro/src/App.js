import React from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContedorFormularios = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
const App = () => {
  const [resumen, guadarResumen] = React.useState({
    cotacao: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });
  const [carregando, guardarCarregando] = React.useState(false);
  const { datos, cotacao } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotação de Seguros" />

      <ContedorFormularios>
        <Formulario
          guadarResumen={guadarResumen}
          guardarCarregando={guardarCarregando}
        />
        {carregando ? <Spinner /> : null}
        <Resumen datos={datos} />
        <Resultado cotacao={cotacao} />
      </ContedorFormularios>
    </Contenedor>
  );
};

export default App;
