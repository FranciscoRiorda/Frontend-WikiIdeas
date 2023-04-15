import React from "react";
import RenderingCat from "../RenderingCat/RenderingCat";
import Spinner from "react-bootstrap/Spinner";
import "./stylesMapSection.css";

const MapSection = ({ catSeleccionada }) => {

  return !catSeleccionada ? (
    <div className="spinner">
      <Spinner animation="grow" />
    </div>
  ) : (
    catSeleccionada &&
      catSeleccionada.map((categoria) => {
        return (
          <RenderingCat key={categoria.publishedAt} categoria={categoria} />
        );
      })
  );
};

export default MapSection;
