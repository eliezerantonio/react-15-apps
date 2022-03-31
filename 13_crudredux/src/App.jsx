import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProduct from "./components/EditProduct";
import Header from "./components/Header";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";

//Redux
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <Router>
      <Provider store={store}>
        {" "}
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/products/new" element={<NewProduct />} />
            <Route exat path="/products/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
