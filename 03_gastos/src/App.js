import React, { useEffect } from "react";
import Formulario from "./components/Formulario";
import Pergunta from "./components/Pergunta";

import Gastos from "./components/Gastos";

import ControlPresuposto from "./components/ControlPresuposto";
const App = () => {
  const [orcamento, setOrcamento] = React.useState(0);
  const [restante, setRestante] = React.useState(0);
  const [mostrarPergunta, setMostrarPergunta] = React.useState(true);
  const [gastos, setGastos] = React.useState([]);
  const [gasto, setGasto] = React.useState({});
  const [criarGasto, setCriarGasto] = React.useState(false);

  //UseEffect que atualiza setRestante
  useEffect(() => {
    if (criarGasto) {
      //adiconar novo gasto
      setGastos([...gastos, gasto]);
    }
    //restante do orcamneto

    const orcamentoRestante = restante - gasto.quantidade;
    setRestante(orcamentoRestante);

    //resetar como fl
    setCriarGasto(true);
  }, [gasto, gastos, criarGasto, restante]);

  //quando guardamosnovo gastos para

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
                <Formulario setGasto={setGasto} setCriarGasto={setCriarGasto} />
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
