import React from "react";
import "./sectionsStyles.css";
import entretenimientoNews from "../img/entretenimientoNews.jpg";
import businessNews from "../img/businessNews.png";
import generalNews from "../img/generalNews.jpg";
import saludNews from "../img/saludNews.png";
import cienciasNews from "../img/cienciasNews.png";
import techNews from "../img/techNews.png";
import sportsNews from "../img/sportsNews.png";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const CategoriasHtml = [
  {
    nombre: "NEGOCIOS",
    img: businessNews,
    url: `business`,
  },
  {
    nombre: "DEPORTES",
    img: sportsNews,
    url: `sports`,
  },
  {
    nombre: "ENTRETENIMIENTO",
    img: entretenimientoNews,
    url: `entertainment`,
  },
  {
    nombre: "TECNOLOGIA",
    img: techNews,
    url: `technology`,
  },
  {
    nombre: "SALUD",
    img: saludNews,
    url: `health`,
  },
  {
    nombre: "CIENCIA",
    img: cienciasNews,
    url: `science`,
  },
  {
    nombre: "GENERAL",
    img: generalNews,
    url: `general`,
  },
];

const Sections = () => {
  AOS.init();

  const catWiki = CategoriasHtml.map((cat) => (
    <div data-aos="fade-up" className="cardCategoria" key={cat.url}>
      <div className="contenedorCard">
        <Link to={`/categoria/${cat.url}`}>
          <div className="divNombre">
            <p className="nombreCat" data-aos="fade-right">{cat.nombre}</p>
          </div>
          <img src={cat.img} className="imgCat" alt="..." />
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <div className="contenedorCategorias">
        <div className="cardsCategorias">{catWiki}</div>
      </div>
    </>
  );
};

export default Sections;
