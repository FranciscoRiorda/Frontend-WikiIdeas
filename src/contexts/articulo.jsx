import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Articulo = createContext({});

const ArticuloProvider = ({ children }) => {

  const [articulos, setArticulos] = useState([]);
  const [title, setTitle] = useState([]);

  const searchKey = (searchKeyToAdd) => {
      setArticulos(searchKeyToAdd);
    };
    
  const searchTitle = (searhTitleToAdd) => {
    setTitle(searhTitleToAdd);
  };
    

  return (
    <Articulo.Provider value={{ articulos, searchKey, title, searchTitle }}>
        {children}
    </Articulo.Provider>
  );
};

export default ArticuloProvider;
