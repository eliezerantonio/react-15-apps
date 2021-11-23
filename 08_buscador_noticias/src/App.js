import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import NewsList from "./components/NewsList.jsx";
import Header from "./components/Header";
import "./app.css";

const App = () => {
  //definir a categoria
  const [category, setCategory] = React.useState("");

  const [news, setNews] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const consultApi = async () => {
      try {
        const url = `http://newsapi.org/v2/top-headlines?country=pt&category=${category}&apiKey=38017d4116b443d3a18a33a66f3f96d9 `;

        const response = await fetch(url);
        if (response === null) return;
        const news = await response.json();
        setNews(news.articles);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    consultApi();
  }, [category, setCategory]);
  return (
    <Fragment>
      <Header title="Buscador de noticias" />

      <div className="container white">
        <Formulario saveCategory={setCategory} />
        {error ? (
          <div className="error_custom">
            <a
              href="#!"
              class="btn-floating btn-large waves-effect waves-light red"
            >
              <i class="material-icons">add</i>
            </a>

            <p>Sem internet</p>
          </div>
        ) : null}

        <NewsList news={news} />
      </div>
    </Fragment>
  );
};

export default App;
