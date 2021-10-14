import React from "react";
import Formulario from "./components/Formulario";
import Pergunta from "./components/Pergunta";

import Gastos from "./components/Gastos";

import ControlPresent from "./components/ControlPresuposto";
const App = () => {
  const [orcamento, setOrcamento] = React.useState(0);
  const [restante, setRestante] = React.useState(0);
  const [mostrarPergunta, setMostrarPergunta] = React.useState(true);
  const [gastos, setGastos] = React.useState([]);

  //quando guardamosnovo gastos para

  const guardarNovoGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarPergunta ? (
            <Pergunta
              setOrcamento={setOrcamento}
              setRestante={setRestante}
              setMostrarPergunta={setMostrarPergunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario guardarNovoGasto={guardarNovoGasto} />
              </div>
              <div className="one-half column">
                <Gastos gastos={gastos} />
                <ControlPresuposto orcamento={orcamento} restante={restante} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
