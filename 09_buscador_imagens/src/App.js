import React from "react";
import Formulario from "./components/Formulario";

const App = () => {
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const consultAPI = async () => {
      if (search === "") return;
      const imagesForPages = 30;

      const key = "24488788-982acf07953acda6a4845eee0";

      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesForPages}`;

      const response = await fetch(url);

      const result = await response.json();
      setSearch(result.hits);
    };
    consultAPI();
  }, [search]);
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagens</p>
        <Formulario setSearch={setSearch} />
      </div>
    </div>
  );
};

export default App;
