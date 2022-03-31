//funcoes que mudam o estado

import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import clientAxios from "../config/axios";
//criar novo produto

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      //inserir produto na bd
      await clientAxios.post("/products", product);

      ///case der certo atualizar estado
      dispatch(addProductSuccess(product));
    } catch (e) {
      console.log(e);
      //se ha um error mudar estado
      dispatch(addProductError(true));
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});
const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});
