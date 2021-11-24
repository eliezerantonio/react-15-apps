import React, { Fragment } from "react";

const Music = ({ lyrics }) => {
  return (
    <Fragment>
      <h2>Letra da Musica</h2>
      <p className="letra">{lyrics}</p>
    </Fragment>
  );
};

export default Music;
