import React, { Fragment } from "react";

const Music = ({ lyrics }) => {

    if (lyrics.length === 0) return null;
  return (
    <Fragment>
      <h2>Letra da Musica</h2>
      <p className="letra">{lyrics}</p>
    </Fragment>
  );
};

export default Music;
