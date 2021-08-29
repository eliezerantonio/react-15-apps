import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  //criar lista de produtos
  const listProducts = [
    { id: 1, name: "Camisa ReactJs", price: 3100 },
    { id: 2, name: "Camisa Nodejs", price: 3200 },
    { id: 3, name: "Camisa Flutter", price: 3500 },
    { id: 4, name: "Camisa AngularJS", price: 3200 },
  ];
  const [products, setProducts] = React.useState(listProducts);

  //estado para carrinh de cmprars

  const [cart, setCart] = React.useState([]);
  const date = new Date().getFullYear();
  return (
    <div className="App">
      <Header title=" Loja virtual" />

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          products={products}
          setCart={setCart}
        />
      ))}

      <Footer date={date} />
    </div>
  );
};
export default App;
