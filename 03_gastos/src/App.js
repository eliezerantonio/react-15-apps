import React from "react";
import Pergunta from "./components/Pergunta";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          <Pergunta />
        </div>
      </header>
    </div>
  );
};

export default App;
