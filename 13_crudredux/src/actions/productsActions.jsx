//funcoes que mudam o estado

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../types";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";
//criar novo produto

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      //inserir produto na bd
      await clientAxios.post("/products", product);

      ///case der certo atualizar estado
      dispatch(addProductSuccess(product));

      //mostrar alerter
      Swal.fire("Sucesso", "Produto adicionado com sucesso", "success");
    } catch (e) {
      console.log(e);
      //se ha um error mudar estado
      dispatch(addProductError(true));
      Swal.fire("Falha", "Falha ao adicionar produto", "error");
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

//buscando produtos

export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const response = await clientAxios.get("/products");
      dispatch(getProductsSuccess(response.data));
    } catch (e) {
      console.log(e);
      dispatch(getProductsError());
    }
  };
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true,
});
