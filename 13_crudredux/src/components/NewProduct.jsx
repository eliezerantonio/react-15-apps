import React from "react";

const NewProduct = () => {
  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Adicionar Produto
            </h2>
            <form>
              <div className="form-group">
                <label>Nome </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome Produto"
                  value="name"
                />{" "}
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Preco Produto"
                  value="price"
                />
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
