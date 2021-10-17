import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoContacao = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: center;
  position: relative;
`;

const TextoContaco = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;
const Resultado = ({ cotacao }) => {
  return cotacao === 0 ? (
    <Mensaje>Escolha ano e tipo de seguro</Mensaje>
  ) : (
    <ResultadoContacao>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotacao}
          timeout={{ enter: 500, exit: 500}}
        >
          <TextoContaco>Total de contaco e: {cotacao}</TextoContaco>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoContacao>
  );
};

export default Resultado;
