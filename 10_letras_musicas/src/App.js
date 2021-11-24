import React, { Fragment } from "react";
import Formulario from "./components/Formulario";

const App = () => {
  const [seekLyrics, setSeekLyrics] = React.useState({});

  React.useState(() => {
    const consultApiLyrics = async () => {
      const url_letra = `https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`;
      const url_info = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaLetra.artista}`;
    };

    consultApiLyrics();
  }, [seekLyrics]);
  return (
    <Fragment>
      <Formulario setSeekLyrics={setSeekLyrics} />
    </Fragment>
  );
};

export default App;
