import React, { Fragment, useEffect } from "react";
import Formulario from "./components/Formulario";
import Receita from "./components/Receita";

const App = () => {
  //receitas em localStorage
  let receitasInicias = JSON.parse(localStorage.getItem("receitas"));
  if (!receitasInicias) {
    receitasInicias = [];
  }
  const [receitas, setReceitas] = React.useState(receitasInicias);

  //realizar certar os operacoes quando mudamos de estados
  useEffect(() => {
    if (receitasInicias) {
      localStorage.setItem("receitas", JSON.stringify(receitas));
    } else {
      localStorage.setItem("receitas", JSON.stringify([]));
    }
  }, [receitas, receitasInicias]);

  //funcao para buscar de

  const criarReceita = (receita) => {
    setReceitas([...receitas, receita]);
  };
  //funcao eliminar receita por id

  const eliminarReceita = (id) => {
    console.log(id);
    const novaReceita = receitas.filter((receita) => receita.id !== id);
    setReceitas(novaReceita);
  };

  const titulo = receitas.length === 0 ? "Sem receitas" : "Gerenciar receitas";

  return (
    <Fragment>
      <h1>Gestor de Pacientes</h1>

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
