import React from "react";
import "./sectionsStyles.css";
import img1 from "../img/deportes.jpg";
import img2 from "../img/entretenimiento.jpg";
import img3 from "../img/musica.jpg";
import img4 from "../img/politica.jfif";
import img5 from "../img/religion.jpg";
import img6 from "../img/educacion.jfif";
import { Link } from "react-router-dom";

const CategoriasHtml = [
  {
    nombre: "Negocio",
    img: img6,
    url: `business`,
  },
  {
    nombre: "Entretenimiento",
    img: img6,
    url: `entertainment`,
  },
  {
    nombre: "General",
    img: img5,
    url: `general`,
  },
  {
    nombre: "Salud",
    img: img4,
    url: `health`,
  },
  {
    nombre: "Ciencia",
    img: img3,
    url: `science`,
  },
  {
    nombre: "Tecnología",
    img: img2,
    url: `technology`,
  },
  {
    nombre: "Deportes",
    img: img1,
    url: `sports`,
  },
];

const Sections = () => {
  const catWiki = CategoriasHtml.map((cat) => (
    <div className="cardCategoria" key={cat.url}>
      <div className="contenedorCard">
        <Link to={`/categoria/${cat.url}`}  >
          <img src={cat.img} className="imgCat" alt="..." />
          <p className="nombreCat">{cat.nombre}</p>
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <div className="contenedorCategorias">
        <div className="tituloCategoria">
          <h3>Categorías</h3>
        </div>
        <div className="cardsCategorias">{catWiki}</div>
      </div>
    </>
  );
};

export default Sections;
