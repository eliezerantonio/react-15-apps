import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductsAction } from "../actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    //buscar dados

    const getProduct = () => dispatch(getProductsAction());
    getProduct();
  }, []);
  return (
    <Fragment>
      <h2 className="text-center my-5 ">Lista de produtos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="row">Nome</th>
            <th scope="row">Preco</th>
            <th scope="row">Actions</th>
          </tr>
          <tbody></tbody>
        </thead>
      </table>
    </Fragment>
  );
};

export default Products;
