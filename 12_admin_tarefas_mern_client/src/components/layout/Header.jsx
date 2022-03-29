/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import AuthContext from "../../context/auth/authContext";

const Header = () => {
  const authContext = React.useContext(AuthContext);
  const { user, getAuthUser, closeSession } = authContext;

  React.useEffect(() => {
    getAuthUser();
  }, []);
  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Bem vindo Sr. <span>{user.user.name}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => closeSession()}
        >
          Sair
        </button>
      </nav>
    </header>
  );
};

export default Header;
