import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RenderingCat from "./RenderingCat/RenderingCat";

const SectionCateg = () => {
  const [catSeleccionada, setCatSeleccionada] = useState();
  const { idCategoria } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=ar&category=${idCategoria}&apiKey=890d59d25ca54eefb7b4a69116cc48db`
        );
        const data = await response.json();
        setCatSeleccionada(data.articles);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(catSeleccionada)

  return(
    catSeleccionada.map((categoria) => {
      return <RenderingCat key={categoria.publishedAt} categoria={categoria} />
    })

    );
};

export default SectionCateg;
