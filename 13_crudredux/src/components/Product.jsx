import React from "react";
import { Link } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

import { deleteProductAction } from "../actions/productsActions";

const Product = ({ product }) => {
  const { name, price, id } = product;
  const dispatch = useDispatch();

  //confirmar de dejsa eliminar

  const deleteConfirmProduct = (id) => {
    //pergunrar usuario

    //  passar action
    dispatch(deleteProductAction(id));
  };
  return (
    <tr>
      <td>
        <span className="font-weight-bold">${name}</span>
      </td>
      <td>{price}</td>
      <td className="acciones">
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteConfirmProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
