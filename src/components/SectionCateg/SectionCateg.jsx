import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MapSection from "./mapSection/MapSection";
import "./stylesSectionCateg.css";

const SectionCateg = () => {
  const [catSeleccionada, setCatSeleccionada] = useState();
  const { idCategoria } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=ar&pageSize=12&category=${idCategoria}&apiKey=890d59d25ca54eefb7b4a69116cc48db`
        );
        const data = await response.json();
        setCatSeleccionada(data.articles);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idCategoria]);

  return (
    <>
      <div className="banner">
        <p className="pBanner">{idCategoria.toLocaleUpperCase()}</p>
      </div>
      <div className="mapSelection">
        <MapSection catSeleccionada={catSeleccionada} />
      </div>
    </>
  );
};

export default SectionCateg;
