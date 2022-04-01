import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
} from "../types";

//cada reducer tem seu proprio estado

const initalState = {
  products: [],
  error: null,
  loading: false,
  deleteProdcuct: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };

    case GET_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...state.products, action.payload],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProdcuct: action.payload,
      };

    default:
      return state;
  }
}
