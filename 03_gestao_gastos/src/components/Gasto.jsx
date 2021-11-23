import React from "react";
import PropTypes from "prop-types";
const Gasto = ({ gasto }) => {
  return (
    <li className="gastos">
      <p>
        {gasto.nome}
        <span className="gasto">$ {gasto.quantidade}</span>
      </p>
    </li>
  );
};
Gasto.protoType = {
  gasto: PropTypes.object.isRequired,
};
export default Gasto;
