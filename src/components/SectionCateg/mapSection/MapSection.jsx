import React from "react";
import RenderingCat from "../RenderingCat/RenderingCat";
import Spinner from "react-bootstrap/Spinner";
import "./stylesMapSection.css";

const MapSection = ({ catSeleccionada }) => {
  return !catSeleccionada ? (
    <div>
      <div className="spinner">
        <Spinner animation="grow" />
      </div>
      <div className="texto">
        <p>API no disponible en deploy</p>
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
