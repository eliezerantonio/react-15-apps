import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Music from "./components/Music";

const App = () => {
  const [searchLyrics, setSearchLyrics] = React.useState({});
  const [lyrics, setLyrics] = React.useState("");

  React.useState(() => {
    const consultApiLyrics = async () => {
      const url_letra = `https://api.lyrics.ovh/v1/${searchLyrics.artista}/${searchLyrics.cancion}`;
      const url_info = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchLyrics.artista}`;

      const result = axios.get(url_letra);
      setLyrics(result);
    };

    consultApiLyrics();
  }, [lyrics]);
  return (
    <Fragment>
      <Formulario setSearchLyrics={setSearchLyrics} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <Music lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
