import React from "react";
import Form from "./components/Form";
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
            <Form />
          </div>
        </div>
      </RevenueProvider>
    </CategoriesProvider>
  );
};

export default App;
