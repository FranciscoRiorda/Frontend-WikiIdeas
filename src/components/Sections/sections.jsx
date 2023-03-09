import React from "react";
import "./sectionsStyles.css";
import img1 from "../img/deportes.jpg";
import img2 from "../img/entretenimiento.jpg";
import img3 from "../img/musica.jpg";
import img4 from "../img/politica.jfif";
import img5 from "../img/religion.jpg";
import img6 from "../img/educacion.jfif";

const Categorias = [
  {
    nombre: "educacion",
    img: img6,
  },
  {
    nombre: "religion",
    img: img5,
  },
  {
    nombre: "politica",
    img: img4,
  },
  {
    nombre: "musica",
    img: img3,
  },
  {
    nombre: "entretenimiento",
    img: img2,
  },
  {
    nombre: "deportes",
    img: img1,
  },
];

const Sections = () => {
  const catWiki = Categorias.map((cat) => (
    <div className="cardCategoria">
      <div className="contenedorCard">
        <img src={cat.img} className="imgCat" alt="..." />
        <p className="nombreCat">{cat.nombre}</p>
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
