import React from "react";
import RenderingCat from "../RenderingCat/RenderingCat";
import Spinner from "react-bootstrap/Spinner";
import "./stylesMapSection.css";
import { useState } from "react";
import { useEffect } from "react";

const MapSection = ({ catSeleccionada }) => {

 let [deploy, setDeploy] = useState('');

 useEffect(()=> {
  setTimeout(() => {
    setDeploy('API no disponible para producción');
  }, 3000);
},[deploy]);

  return !catSeleccionada ? (
    <div>
      <div className="spinner">
        <Spinner animation="grow" />
      </div>
      <div className="texto">
        <p>{deploy}</p>
      </div>
    </div>
  ) : (
    catSeleccionada &&
      catSeleccionada.map((categoria) => {
        return (
          <>
            <div className="rendering">
              <RenderingCat key={categoria.publishedAt} categoria={categoria} />
            </div>
          </>
        );
      })
  );
};

export default MapSection;
