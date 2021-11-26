import React from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Formulario = () => {
  const [search, saveSearch] = React.useState({ name: "", category: "" });
  const { categories } = React.useContext(CategoriesContext);

  //funcoa para ler o cosnteudos

  const getData = (e) => {
    saveSearch({ ...search, [e.target.name]: e.target.value });
  };

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend> Buscar bebidas por categoria oIngrediente</legend>
      </fieldset>

      <div className="row">
        <div className="col-md-4 mt-5">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingredientes"
            onChange={getData}
          />
        </div>
        <div className="col-md-4 mt-5">
          <select className="form-control" name="Categoria" onChange={getData}>
            <option value="">-Selecione a Categoria-</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 mt-5">
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
