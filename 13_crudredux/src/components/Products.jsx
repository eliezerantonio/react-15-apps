import React, { Fragment } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

import { getProductsAction } from "../actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    //buscar dados

    const getProduct = () => dispatch(getProductsAction());
    getProduct();
  }, [dispatch]);

  //obter estado

  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  console.log(products[0]);

  return (
    <Fragment>
      <h2 className="text-center my-5 ">Lista de produtos</h2>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center">
          Houve um error
        </p>
      ) : null}
      {loading ? <p className="text-center">Loading... </p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="row">Nome</th>
            <th scope="row">Preco</th>
            <th scope="row">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                Nenhum produto cadastrado
              </td>
            </tr>
          ) : (
            products[0].map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
