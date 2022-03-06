import React from "react";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import clientAxios from '../../config/axis'
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


  const createAccount = async datas => {
    try {
      const response = await clientAxios.post("/api/users", datas);

      console.log(response);
      dispatch({type:REGISTER_SUCCESS,payload:response.data})
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
      const alert = {
   msg:error.response.data.msg,category:'alerta-error'
 }
      dispatch({type:REGISTER_ERROR, payload :alert})
  }
}
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        createAccount
      }}
    >{props.children}



    </AuthContext.Provider>
  );
};

export default AuthState;
