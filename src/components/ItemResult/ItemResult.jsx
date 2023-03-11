import React from "react";
import "./itemResultStyles.css";
import { Link } from "react-router-dom";

const Result = ({ result }) => {
  return (
    <>
      <Link to={`/articulo/${result.id}`}>
        <div className="listaResult">
          <li>{result.key}</li>
          <li>{result.description}</li>
        </div>
      </Link>
    </>
  );
};

export default Result;
