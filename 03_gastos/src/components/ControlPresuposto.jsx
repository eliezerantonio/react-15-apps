import React, { Fragment } from "react";

const ControlPresuposto = ({ orcamento, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary ">orcamento:{orcamento}</div>
      <div className="alert ">Restate :{restante}</div>
    </Fragment>
  );
};

export default ControlPresuposto;
