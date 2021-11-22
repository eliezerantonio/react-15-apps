import React from "react";
import styled from "@emotion/styled";
import imagem from "./cryptomonedas.png";

import Formulario from "./components/Formulario";
import Price from "./components/Price";
import axios from "axios";

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const App = () => {
  const [coin, setCoin] = React.useState("");
  const [criptomoeda, setCriptomoeda] = React.useState("");

  const [result, setResult] = React.useState({});

  React.useEffect(() => {
    //evitamos a execucao an primeira vez

    const getCriptmoeda = async () => {
      if (coin === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoeda}&tsyms=${coin}`;
      const result = await axios.get(url);

      setResult(result.data.DISPLAY_NAME[criptomoeda][coin]);
    };
    getCriptmoeda();
  }, [coin, criptomoeda]);
  return (
    <Content>
      <div>
        <Imagen src={imagem} alt="Imagem criptomoedas" />
      </div>
      <div>
        <Heading>Cite criptomoedas instantaneamente</Heading>
        <Formulario setCoin={setCoin} setCriptomoeda={setCriptomoeda} />
        <Price result={result} />
      </div>
    </Content>
  );
};

export default App;
