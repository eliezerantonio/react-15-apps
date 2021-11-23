import React, { Fragment } from "react";

import Formulario from "./components/Formulario";
import Receita from "./components/Receita";

const App = () => {
  //lista de receitas

  const [receitas, atualizarReceita] = React.useState([]);

  const criarReceita = (receita) => {
    atualizarReceita([...receitas, receita]);
  };

  const eliminarReceita = (id) => {
    const novasReceitas = receitas.filter((receita) => receita.id !== id);

    atualizarReceita(novasReceitas);
  };

  const titulo =
    receitas.length === 0 ? "Sem receitas" : "Administra tuas receitas";
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario criarReceita={criarReceita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>

            {receitas.map((receita) => (
              <Receita
                key={receita.id}
                receita={receita}
                eliminarReceita={eliminarReceita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
