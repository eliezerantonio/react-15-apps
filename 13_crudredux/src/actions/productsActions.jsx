//funcoes que mudam o estado

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
import Swal from "sweetalert2";
import axios from "axios";
//criar novo produto

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      //inserir produto na bd
      await axios.post("http://localhost:4000/products", product);

      ///case der certo atualizar estado
      dispatch(addProductSuccess(product));

      //mostrar alerter
      Swal.fire({
        title: "Sucesso",
        text: "Produto adicionado com sucesso",
        icon: "success",
      });
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
      const response = await axios.get("http://localhost:4000/products");
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

//SELECIONAR E ELIMNAR PRODUCT

export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id));
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);
      dispatch(deleteProductSuccess());
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } catch (e) {
      console.log(e);
      dispatch(deleteProductError());
    }
  };
}

const getProductDelete = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});
