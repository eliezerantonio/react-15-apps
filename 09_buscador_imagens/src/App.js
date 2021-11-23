import React from "react";
import Formulario from "./components/Formulario";
import ListaImages from "./components/ListaImages";

const App = () => {
  const [search, setSearch] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [actualPage, setActualPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    const consultAPI = async () => {
      if (search === "") return;
      const imagesForPages = 30;

      const key = "24488788-982acf07953acda6a4845eee0";

      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesForPages}&page=${actualPage}`;

      const response = await fetch(url);

      const result = await response.json();
      setImages(result.hits);

      //calcular total de pagins
      const calculateTotalPages = Math.ceil(result.totalHits / imagesForPages);
      setTotalPages(calculateTotalPages);

      //mover scool para cima apos mudar de pagina

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultAPI();
  }, [actualPage, search]);

  //definir pagina and pag
  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if (newActualPage === 0) return;

    setActualPage(newActualPage);
  };
  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if (newActualPage > totalPages) return;

    setActualPage(newActualPage);
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagens</p>
        <Formulario setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListaImages images={images} />
        {actualPage === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={previousPage}
          >
            &laquo; Anterior
          </button>
        )}
        {actualPage === totalPages ? null : (
          <button type="button" className="btn btn-info" onClick={nextPage}>
            &raquo; Seguinte
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
