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
      <div className="colorBuscador">
      <br/>
      <h1 className="text-center">Buscar en Enciclopedia</h1>
    <div className="text-center">
    <form className="d-flex buscadorStyles"  onSubmit={handleSubmit}>
      <input className="form-control me-2" name="search" type="text" autoComplete="off" placeholder="Buscar" aria-label="Search" />
        <button className="btn btn-success" type="submit" onChange={handleChange}>Search</button>
      </form>
      <br/>
      </div>
      <p className="text-center h3">Resultados: {search}</p>
      <div className="card container" style={{width: '18rem'}} >
       <div className="card-body" >
        {resultados ? <Resultados resultados={resultados} /> : null}
       </div>
      </div>
    </div>
    </>
  );
};

export default Buscador;
