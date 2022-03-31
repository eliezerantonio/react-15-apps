import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>CRUD -REACT, REDUX, REST API & AXIOS </h1>
      </div>
      <a
        href="/products/new"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        Adicionar Produto &#43;
      </a>
    </nav>
  );
};

export default Header;
