import React from "react";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagens</p>
        <Formulario />
      </div>
    </div>
  );
};

export default App;
