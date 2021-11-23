import React, { Fragment } from "react";
import { revisarOrcamento } from "../helpers";
import PropTypes from "prop-types";

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

ControlPresuposto.propTypes = {
  orcamento: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
export default ControlPresuposto;
