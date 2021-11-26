import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Music from "./components/Music";
import Info from "./components/Info";
import Error from "./components/Error";

const App = () => {
  const [searchLyrics, setSearchLyrics] = React.useState({});
  const [lyrics, setLyrics] = React.useState("");
  const [info, setInfo] = React.useState({});
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (Object.keys(searchLyrics).length === 0) {
      console.log("falhou");

      return;
    }

    const { artist, music } = searchLyrics;
    const consultApiLyrics = async () => {
      try {
        setError(false);
        const url_letra = `https://api.lyrics.ovh/v1/${artist}/${music}`;
        const url_info = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

        const [lyrics, info] = await Promise.all([
          axios.get(url_letra),
          axios.get(url_info),
        ]);
        if (lyrics == null) {
          alert("falhou");
        }

        setLyrics(lyrics.data.lyrics);
        setInfo(info.data.artists[0]);
      } catch (error) {
        setError(true);
      }
    };

    consultApiLyrics();
  }, [searchLyrics, info]);
  return (
    <Fragment>
      <Formulario setSearchLyrics={setSearchLyrics} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Music lyrics={lyrics} />
          </div>
        </div>
        {error ? <Error message="Sem resultado" /> : null}
      </div>
    </Fragment>
  );
};

export default App;
