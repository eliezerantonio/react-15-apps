//funcoes que mudam o estado

import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";

//criar novo produto

export function createNewProductAction(product) {
  return (dispatch) => {
    dispatch(addProduct());

    try {
      dispatch(addProductSuccess(product));
    } catch (e) {
      dispatch(addProductError(true));
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
});

const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload:product
});
const addProductError = () => ({
  type: ADD_PRODUCT_ERROR,
});
