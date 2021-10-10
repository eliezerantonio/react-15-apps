import React from "react";
import Formulario from "./components/Formulario";
import Pergunta from "./components/Pergunta";

const App = () => {
  const [orcamento, setOrcamento] = React.useState(0);
  const [restante, setRestante] = React.useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          <Pergunta setOrcamento={setOrcamento} setRestante={setRestante} />

          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
