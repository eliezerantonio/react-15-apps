import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import "./index.css";
import Clima from "./components/Clima";
import Error from "./components/Error";
const App = () => {
  const [searchfor, setSearchfor] = React.useState({
    cidade: "",
    pais: "",
  });

  const [consult, setConsult] = React.useState(false);
  const [result, setResult] = React.useState({});
  const [error, setError] = React.useState(false);

  const { cidade, pais } = searchfor;

  React.useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const appId = "b55746611649b856861e18178ae5f741";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        setConsult(false);

        ///verifica se ha resultado na pedquisa da api
        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultAPI();
  }, [cidade, consult, pais]);

  let component;

  if (error) {
    component = <Error message="Sem resultados" />;
  } else {
    component = <Clima result={result} />;
  }

  return (
    <Fragment>
      <Header title="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                searchfor={searchfor}
                setSearchfor={setSearchfor}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
