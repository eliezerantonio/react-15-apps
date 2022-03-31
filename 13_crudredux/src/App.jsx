import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/products/new" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
