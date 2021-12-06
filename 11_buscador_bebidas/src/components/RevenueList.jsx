import React from "react";
import { RevenueContext } from "../context/RevenueProvider";
import Revenue from "./Revenue";
const RevenueList = () => {
  //extaindo Receitas
  const { revenues } = React.useContext(RevenueContext);

  return (
    <div className="row mt-5">
      {revenues.map((revenue) => (
        <Revenue key={revenue.idDrink} revenue={revenue} />
      ))}
    </div>
  );
};

export default RevenueList;
