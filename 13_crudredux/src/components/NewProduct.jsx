/* eslint-disable no-unused-vars */
import React from "react";
import { createNewProductAction } from "../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
const NewProduct = () => {
  const history = useNavigate();
  //estado do component   de

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  //utilizar use dispatch y te crea uma funcao
  const dispatch = useDispatch();

  //acessar estado de store

  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  //chama a acao de productAction
  const addProduct = (product) => dispatch(createNewProductAction(product));
  const submitNewProduct = (e) => {
    e.preventDefault();

    //validar Formulario

    if (name.trim() === "" || price <= 0) {
      return;
    }

    //se ja error

    //criar new product
    addProduct({ name, price });
    //redireconar

    history("/");
  };
  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Adicionar Produto
            </h2>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Nome </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome Produto"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
              </div>{" "}
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Preco Produto"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 my-2"
              >
                Adicionar
              </button>
            </form>
            {loading ? <p>Carregando...</p> : null}
            {error ? (
              <p className="alert alert-danger p2 text-center">Houve um erro</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
