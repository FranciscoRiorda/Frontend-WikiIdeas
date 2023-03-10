import React, { useEffect } from "react";
import { useState } from "react";
import Resultados from "../../components/Resultados/Resultados";
import Sections from "../../components/Sections/sections";
import "../Buscador/buscadorStyles.css";

const Buscador = () => {
  const [search, setSearch] = useState("");
  const [resultados, setResultados] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${search}&limit=8`
        );
        const data = await response.json();
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
  };

  return (
    <>
      <div className="contenedorSlider">
        <div className="fondo">
          <div>
            <h1>Buscar en Enciclopedia</h1>
          </div>
          <div>
            <form className="formBuscador" onSubmit={handleSubmit}>
              <input
                className="inputForm"
                name="search"
                type="text"
                autoComplete="off"
                aria-label="Search"
                onChange={handleChange}
              />
              <button className="botonBuscar btn btn-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
      <div className="contenedorResultados">
          <div className="resultados">
            {resultados && search !== "" ? <Resultados resultados={resultados} /> : null}
          </div>
        </div>
        </div>
      </div>

      <div>
        <Sections />
      </div>
    </>
  );
};

export default Buscador;
