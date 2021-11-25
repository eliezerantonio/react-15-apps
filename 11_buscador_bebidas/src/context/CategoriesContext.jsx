import React from "react";
import axios from "axios";
//criadno context

export const CategoriesContext = React.createContext();

//Provider onde se encontram as funcoes e estados

const CategoriesProvider = (props) => {
  //criar estado do contexto
  const [categories, setCategories] = React.useState([]);

  ///fazendo a consulta na api
  React.useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categories = await axios.get(url);

      setCategories(categories.data.drinks);
    };

    getCategories();
  }, []);
  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
