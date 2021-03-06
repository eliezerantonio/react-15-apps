import React from "react";
import PropTypes from "prop-types";

const Error = ({ msg }) => {
    
  return (
    <div>
      <p className="alert alert-danger error">{msg}</p>
    </div>
  );
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};


export default Error;
