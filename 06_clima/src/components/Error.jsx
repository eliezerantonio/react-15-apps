import React from "react";

const Error = ({ message }) => {
  return (
    <div>
      <p className="red darken-4 error">{message}</p>
    </div>
  );
};

export default Error;
