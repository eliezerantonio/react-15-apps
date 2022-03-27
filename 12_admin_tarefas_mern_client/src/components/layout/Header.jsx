import React from "react";

import AuthContext from "../../context/auth/authContext";

const Header = () => {
  const authContext = React.useContext(AuthContext);
  const { user, getAuthUser } = authContext;

  React.useEffect(() => {
    getAuthUser();
  }, []);
  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Bem vindo Sr. <span>{user.user.name }</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <a href="#!">Sair</a>
      </nav>
    </header>
  );
};

export default Header;
