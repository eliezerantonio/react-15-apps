import React, { Fragment } from "react";
import { revisarOrcamento } from "../helpers";

const ControlPresuposto = ({ orcamento, restante }) => {

  return (
    <Fragment>
      <div className="alert alert-primary ">orcamento:{orcamento}</div>
      <div className={revisarOrcamento(orcamento, restante)}>
        Restate :{restante}
      </div>
    </Fragment>
  );
};

export default ControlPresuposto;
