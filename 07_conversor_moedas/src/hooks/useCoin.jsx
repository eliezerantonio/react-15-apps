import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 2rem;
  display: block;
`;

const SelectC = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCoin = (label, initialState, options) => {
  //estado do custom Hook
  const [state, setState] = React.useState(initialState);

  const Select = () => (
    <Fragment>
      <Label>{label}</Label>
      <SelectC onChange={(e) => setState(e.target.value)} valeu={state}>
        <option value="">- Selecione-</option>
        {options.map((option) => (
          <option key={option.codigo} value={option.codigo}>
            {option.name}
          </option>
        ))}
      </SelectC>
    </Fragment>
  );

  return [state, Select, setState];
};
export default useCoin;
