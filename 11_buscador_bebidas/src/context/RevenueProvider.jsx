import React from "react";
import axios from "axios";
export const RevenueContext = React.createContext();

const RevenueProvider = (props) => {
  const [revenues, saveRevenue] = React.useState([]);
  const [search, searchRevenue] = React.useState({
    ingredient: "",
    category: "",
  });

  const [consult, saveConsult] = React.useState(false);
  //
  const { name, category } = search;

  React.useEffect(() => {
    if (consult) {
      const getRevenue = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        const consult = await axios.get(url);
        saveRevenue(consult.data.drinks);
      };
      getRevenue();
    }
  }, [search, revenues, consult, name, category]);
  return (
    <RevenueContext.Provider
      value={{
        revenues,
        searchRevenue,
        saveConsult,
      }}
    >
      {props.children}
    </RevenueContext.Provider>
  );
};

export default RevenueProvider;
