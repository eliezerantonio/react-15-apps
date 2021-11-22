import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #fff;

  p {
    span {
    }
  }
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;
const PriceC = styled.p``;
const Price = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <ResultDiv>
      <PriceC>
        Preco: <span>{result.PRICE}</span>
      </PriceC>{" "}
      <Info>
        Preco mais alto do dia: <span>{result.HIGHDAY}</span>
      </Info>{" "}
      <Info>
        Preco mais baixo do dia: <span>{result.LOWDAY}</span>
      </Info>{" "}
      <Info>
        Variacao de ultimas 24 Horas: <span>{result.CHANGEPCT24HOUR}</span>
      </Info>{" "}
      <Info>
        Ultimas atualizacoes: <span>{result.LASTUPDATE}</span>
      </Info>
    </ResultDiv>
  );
};

export default Price;
