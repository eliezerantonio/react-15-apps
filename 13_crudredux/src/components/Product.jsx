import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

//redux
import { useDispatch } from "react-redux";

import { deleteProductAction } from "../actions/productsActions";

const Product = ({ product }) => {
  const { name, price, id } = product;

  const dispatch = useDispatch();

  //confirmar de dejsa eliminar

  const deleteConfirmProduct = (id) => {
    //pergunrar usuario

    Swal.fire({
      title: "Estas Seguro?",
      text: " Esta accao nao pode ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, Eliminar",
      cancelButtonText: "Cancelar",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      //  passar action

      if (result.isConfirmed) {
        dispatch(deleteProductAction(id));
      }
    });
  };
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">{price}</span>
      </td>
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
