import React from "react";

const Formulario = () => {
  return (
    <form>
      <div className="input-field col s12">
        <input type="text" className="form-control" name="cidade" id="cidade" />
        <label>Cidade: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais">
          <option value="">-- Selecione um pais --</option>
        </select>

        <label>Pais</label>
      </div>
    </form>
  );
};

export default Formulario;
