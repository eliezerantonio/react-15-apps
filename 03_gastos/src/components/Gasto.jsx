import React from "react";

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

export default Gasto;
