import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import NewsList from "./components/NewsList.jsx";
import Header from "./components/Header";

const App = () => {
  //definir a categoria
  const [category, setCategory] = React.useState("");

  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    const consultApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=pt&category=${category}&apiKey=38017d4116b443d3a18a33a66f3f96d9 `;

      const response = await fetch(url);
      const noticia = await response.json();
      setNews(noticia.articles);
    };
    consultApi();
  }, [category, setCategory]);
  return (
    <Fragment>
      <Header title="Buscador de noticias" />

      <div className="container white">
        <Formulario saveCategory={setCategory} />

        <NewsList news={news} />
      </div>
    </Fragment>
  );
};

export default App;
