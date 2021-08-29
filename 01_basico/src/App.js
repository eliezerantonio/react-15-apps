import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  //criar lista de produtos
  const [products, setProducts] = React.useState();
  const date = new Date().getFullYear();
  return (
    <div className="App">
      <Header title=" Loja virtual" />
      <Footer date={date} />
    </div>
  );
};
export default App;
