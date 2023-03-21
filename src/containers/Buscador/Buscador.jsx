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

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const options = {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "2183111fccmshe1ee4f00d662488p1a3704jsncc04d6874c65",
  //           "X-RapidAPI-Host": "wiki-briefs.p.rapidapi.com",
  //         },
  //       };
  //       const response = await fetch(
  //         `https://wiki-briefs.p.rapidapi.com/search?q=${search}&topk=3`,
  //         options
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setResultados(data.similar);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [search]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://es.wikipedia.org/w/rest.php/v1/search/page?q=${search}&limit=15`
          // `https://newsapi.org/v2/everything?q=${search}&apiKey=890d59d25ca54eefb7b4a69116cc48db`
        );
        const data = await response.json();
        searchKey(search);
        console.log(data);
        setResultados(data.pages);
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

  const handleChange = (event) => {
    let busqueda = event.target.value;
    setSearch(busqueda);
  };

  const clear = (event) => {
    if (event.code === "Escape") {
      setResultados("");
    }
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
