/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLOSE_SESSION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        authenticated: true,
        message: null,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_ERROR:

    case REGISTER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
      };

    default:
      return state;
  }
};
