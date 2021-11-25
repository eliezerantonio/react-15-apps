import React from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Formulario = () => {
  const { categories } = React.useContext(CategoriesContext);

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend> Buscar bebidas por categoria oIngrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingredientes"
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="Categoria">
            <option value="">-Selecione a Categoria-</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md=4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
