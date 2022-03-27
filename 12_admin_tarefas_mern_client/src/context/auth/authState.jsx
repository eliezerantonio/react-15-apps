/* eslint-disable no-unused-vars */
import React from "react";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import clientAxios from "../../config/axios";
import tokenAuth from "../../config/token";
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLOSE_SESSION,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = React.useReducer(AuthReducer, initialState);

  //funcoes

  const createAccount = async (datas) => {
    try {
      const response = await clientAxios.post("/api/users", datas);

      console.log(response);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      getAuthUser();

      //get usuario logado
    } catch (error) {
      console.log(error.response);
      const alert = {
        msg: error.response.data.msg,
        category: "alert-error",
      };
      dispatch({ type: REGISTER_ERROR, payload: alert });
    }
  };

  //Retorna  usuario autenticado

  const getAuthUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      // funcao para neviar token em headers
      tokenAuth(token);
      try {
        const response = await clientAxios.get("/api/auth");
        dispatch({ type: GET_USER, payload: response.data });
      } catch (error) {
        console.log(error.response);
        dispatch({ type: LOGIN_ERROR });
      }
    }
  };

  //ao iniciar a sessao
  const initSession = async (datas) => {
    try {
      const response = await clientAxios.post("/api/auth", datas);

      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      getAuthUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alert-error",
      };
      dispatch({ type: LOGIN_ERROR, payload: alert });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        createAccount,
        initSession,
        getAuthUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
