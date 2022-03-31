import React, { Fragment } from "react";

const Products = () => {
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
