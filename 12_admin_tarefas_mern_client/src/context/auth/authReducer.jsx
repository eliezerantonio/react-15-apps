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

        localStorage.setItem('token,', action.payload.token);

        return {
          ...state,
          authenticated: true,
    message: null,
        }
        
      case REGISTER_ERROR:
          return {
          ...state,
          token: null,
    message: action.payload,
        }

      default: return state;
    }
}