import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProduct from "./components/EditProduct";
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
          <Route exat path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
