import React from "react";
import { Link, useNavigate } from "react-router-dom";

import AlertContext from "../../context/alerts/alertContext";
import authContext from "../../context/auth/authContext";
import AuthState from "../../context/auth/authContext";

const Login = (props) => {
  //extrair vaores contexto
  const alertContext = React.useContext(AlertContext);
  const history = useNavigate();

  const { alert, showAlert } = alertContext;
  const authContext = React.useContext(AuthState);
  const { message, authenticated, initSession } = authContext;
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
    if (email.trim() === "" || password.trim() === "") {
      showAlert("Todos campos sao obragatorios", "alert-error");
    }

    //passar al action

    initSession({ email, password });
  };

  React.useEffect(() => {
    if (authenticated) {
      history("/projects");
    }

    if (message) {
      console.log(message.category);
      showAlert(message.msg, message.category);
    }
  }, [message, authenticated, history]);
  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.msg}</div>
      ) : null}
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
              placeholder="E-mail"
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
              placeholder="Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sessão"
            />
          </div>
        </form>
        <br />
        <Link to={"new-account"} className="enlance-cuenta">
          Criar Conta
        </Link>
      </div>
    </div>
  );
};

export default Login;
