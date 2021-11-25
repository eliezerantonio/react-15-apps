import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import CategoriesProvider from "./context/CategoriesContext";

const App = () => {
  return (
    <CategoriesProvider>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriesProvider>
  );
};

export default App;
