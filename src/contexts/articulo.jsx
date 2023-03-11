import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Articulo = createContext({});

const ArticuloProvider = ({ children }) => {

  const [articulos, setArticulos] = useState([]);

  const searchKey = (searchKeyToAdd) => {
      setArticulos(searchKeyToAdd);
    };
    
    

  return (
    <Articulo.Provider value={{ articulos, searchKey }}>
        {children}
    </Articulo.Provider>
  );
};

export default ArticuloProvider;
