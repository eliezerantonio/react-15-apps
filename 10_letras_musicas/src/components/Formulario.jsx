import React from "react";

const Formulario = ({ setSeekLyrics }) => {
  const [search, setSearch] = React.useState({ artist: "", music: "" });

  const { artist, music } = search;

  const [error, setError] = React.useState(false);

  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchInfo = (e) => {
    e.preventDefault();

    if (artist.trim() === "" || music.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    setSeekLyrics(search);
  };
  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">Preencha os campos</p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={searchInfo}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                Buscador de letras musicais
              </legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <labe> Artista</labe>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nome Artista"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <labe> Artista</labe>
                    <input
                      type="text"
                      className="form-control"
                      name="music"
                      placeholder="Titulo musica"
                      onChange={updateState}
                      value={music}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
