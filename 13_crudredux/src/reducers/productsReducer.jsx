import{   ADD_PRODUCT,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_ERROR}from '../types'

//cada reducer tem seu proprio estado

const initalState = {
  products: [],
  error: null,
  loading: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
