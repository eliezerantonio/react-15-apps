import React from "react";
import styled from "@emotion/styled";

const PhraseContent = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800%;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::befrore {
      content: open-quote;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    text-align: right;
    top: -2rem;
    position: absolute;
    color: #666;
    margin-top: 2rem;
  }
`;
const Phrase = ({ phrase }) => {
  if (Object.keys(phrase).length === 0) return null;
  return (
    <PhraseContent>
      <h1>{phrase.quote}</h1>
      <p>{phrase.author}</p>
    </PhraseContent>
  );
};

export default Phrase;
