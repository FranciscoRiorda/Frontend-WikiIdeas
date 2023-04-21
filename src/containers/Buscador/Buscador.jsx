import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Resultados from "../../components/Resultados/Resultados";
import Sections from "../../components/Sections/sections";
import { Articulo } from "../../contexts/articulo";
import "../Buscador/buscadorStyles.css";


const Buscador = () => {
  
  const [search, setSearch] = useState("");
  const [resultados, setResultados] = useState();
  const { searchKey } = useContext(Articulo);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=890d59d25ca54eefb7b4a69116cc48db`
        );
        const data = await response.json();
        searchKey(search);
        setResultados(data.articles);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSubmit = (event) => {
    let busqueda = event.target.search.value;
    setSearch(busqueda);
    event.preventDefault();
  };

  // const handleChange = (event) => {
  //   let busqueda = event.target.value;
  //   setSearch(busqueda);
  // };

  const clear = (event) => {
    if (event.code === "Escape") {
      setResultados("");
    }
  };

  console.log(resultados)

  return (
    <>
      <div data-aos="fade-up" className="contenedorSlider">
        <div className="fondo">
          <div>
            <h1>Buscar Noticias</h1>
          </div>
          <div>
            <form className="formBuscador" onSubmit={handleSubmit}>
              <input
                className="inputForm"
                name="search"
                type="text"
                autoComplete="off"
                aria-label="Search"
                // onChange={handleChange}
                onKeyDown={clear}
              />
              <button className="botonBuscar btn btn-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
          <div className="contenedorResultados">
            {resultados && search !== "" ? (
              <div className="resultados">
                <Resultados resultados={resultados} />
              </div>
            ) : null}
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
