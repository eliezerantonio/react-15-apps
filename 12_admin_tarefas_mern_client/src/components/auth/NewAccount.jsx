import React from "react";
import { Link } from "react-router-dom";

import AlertContext from "../../context/alerts/alertContext";

import AuthState from "../../context/auth/authContext";

const NewAccount = () => {
  const alertContext = React.useContext(AlertContext);

  const { alert, showAlert } = alertContext;
  const authContext = React.useContext(AuthState)
  const { createAccount} = authContext;

  //statado iniciar sesao

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  //extrair user
  const { name, email, password, confirm } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //quando usuario querer iniciar a sessao

  const onSubmit = (e) => {
    e.preventDefault();

    //validar se ha campos vazios

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      showAlert("Deve preencher todos campos", "alert-error");
      return;
    }

    //password minimo 6 caracteres
    if (password.length < 6) {
      showAlert("Password minimo 6 caracteres", "alert-error");
      return;;
    }

    if (password !== confirm) {
      showAlert("Passwords sao diferentes", "alert-error");
      return;
    }
    //passar al action
    createAccount({name,email,password});
  };
  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Criar Nova Conta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Seu nome"
              onChange={onChange}
            />
          </div>{" "}
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
          </div>{" "}
          <div className="campo-form">
            <label htmlFor="confirm">Confirmar Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              placeholder="Repita sua Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Criar Conta"
            />
          </div>
        </form>
        <Link to={"/"} className="enlance-cuenta">
          Tenho uma conta
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
