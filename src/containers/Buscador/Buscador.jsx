import React, { useEffect } from "react";
import { useState } from "react";
import Resultados from "../../components/Resultados/Resultados";
import "../Buscador/buscadorStyles.css";

const Buscador = () => {
  const [search, setSearch] = useState("");
  const [resultados, setResultados] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${search}&limit=20`
        );
        const data = await response.json();
        // console.log(data);
        setResultados(data.pages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [search]);

  console.log("resultados", resultados);

  const handleSubmit = (event) => {
    let busqueda = event.target.search.value;
    console.log(busqueda);
    setSearch(busqueda);
    event.preventDefault();
  };

  const handleChange = (event) => {
      let busqueda = event.target.value;
      setSearch(busqueda);
      console.log(search);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          name="search"
          autoComplete="off"
          onChange={handleChange}
        />
        <input type="submit" value="Buscar" ></input>
      </form>
      <p>Resultados: {search}</p>
      <div>
        {resultados ? <Resultados resultados={resultados} /> : null}
      </div>
    </>
  );
};

export default Buscador;
