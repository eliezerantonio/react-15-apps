import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import CategoriesProvider from "./context/CategoriesContext";
import RevenueProvider from "./context/RevenueProvider";

const App = () => {
  return (
    <CategoriesProvider>
      <RevenueProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
        </div>
      </RevenueProvider>
    </CategoriesProvider>
  );
};

export default App;
