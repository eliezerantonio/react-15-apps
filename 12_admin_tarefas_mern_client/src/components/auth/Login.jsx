import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  //statado iniciar sesao

  const [user, setUser] = React.useState({ email: "", password: "" });

  //extrair user
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //quando usuario querer iniciar a sessao

  const onSubmit = (e) => {
    e.preventDefault();

    //validar se ha campos vazios

    //passar al action
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sessão</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Seu E-mail"
              onChange={onChange}
            />
          </div>{" "}
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Sua password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" />
          </div>
        </form>
        <Link to={"new-account"} className="enlance-cuenta">
          Criar Conta
        </Link>
      </div>
    </div>
  );
};

export default Login;
