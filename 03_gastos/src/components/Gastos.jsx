import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Gastos = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Lista</h2>

      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};

Gastos.protoType = {
  gastos: PropTypes.array.isRequired,
};
export default Gastos;
