import React, { Fragment } from "react";

const useCoin = () => {
  //estado do custom Hook
  const [state, setState] = React.useState("");

  const Select = () => (
    <Fragment>
      <label>Moeda</label>
      <select>
        <option value="MXN">Preco mexicano</option>
      </select>
    </Fragment>
  );

  return [state, Select, setState];
};

export default useCoin;
