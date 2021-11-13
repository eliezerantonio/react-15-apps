import React, { Fragment } from "react";

import Formulario from "./components/Formulario";

const App = () => {
  //lista de receitas

  const [receitas, atualizarReceita] = React.useState([]);

  const criarReceita = (receita) => {
    atualizarReceita([...receitas, receita]);
  };

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario criarReceita={criarReceita} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
