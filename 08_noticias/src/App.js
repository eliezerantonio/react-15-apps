import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <Header title="Buscador de noticias" />

      <div className="container white">
        <Formulario />
      </div>
    </Fragment>
  );
};

export default App;
