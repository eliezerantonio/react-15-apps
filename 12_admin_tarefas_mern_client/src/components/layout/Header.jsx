import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Ola <span>Eliezer Antonio</span>
      </p>

      <nav className="nav-principal">
        <a href="#!">Encerrar sessao</a>
      </nav>
    </header>
  );
};

export default Header;