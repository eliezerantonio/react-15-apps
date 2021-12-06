import React from "react";

import axios from "axios";


//create a context \

export const ModalContext = React.createContext();

const ModalProvider = (props) => {
  //state do provider
  const [idRevenue, saveIdRevenue] = React.useState(null);

  React.useEffect(() => {
    const getRevenue = async () => {
      if (!idRevenue) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRevenue}`;

      const result = await axios.get(url);

        console.log(result);
        
    };
    getRevenue();
  }, [idRevenue]);
  return (
    <ModalContext.Provider value={{ saveIdRevenue }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
