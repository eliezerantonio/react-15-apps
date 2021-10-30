import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import "./index.css";
const App = () => {
  return (
    <Fragment>
      <Header title="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario />
            </div>
            <div className="col m6 s12">2 </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
