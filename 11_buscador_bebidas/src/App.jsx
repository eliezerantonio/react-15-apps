import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import RevenueList from "./components/RevenueList";
import CategoriesProvider from "./context/CategoriesContext";
import RevenueProvider from "./context/RevenueProvider";
import ModalProvider from "./context/ModalContext";

const App = () => {
  return (
    <CategoriesProvider>
      <RevenueProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RevenueList />
          </div>
        </ModalProvider>
      </RevenueProvider>
    </CategoriesProvider>
  );
};

export default App;
