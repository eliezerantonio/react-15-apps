import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3rem;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

const App = () => {
  //estado da frasesApi

  const [phrase, setPhrase] = React.useState({});
  

  const consultAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    const phrase = await api.json();

    console.log(phrase[0]);
  };
  return (
    <Content>
      <Button onClick={consultAPI}>Obter Frases</Button>
    </Content>
  );
};

export default App;
