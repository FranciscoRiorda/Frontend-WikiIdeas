import React from "react";
import { Link } from "react-router-dom";
import "./stylesRenderingCat.css";

const RenderingCat = ({ categoria }) => {
  return (
    <>
      <div className="cardCategoria2">
        <Link to={`${categoria.url}`} target={"_blank"} className="link">
          <div className="divCard">
            <ul className="ulCard">
              <li className="liCard">{categoria.title}</li>
              <li className="liCard authorCard">{categoria.author}</li>
            </ul>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RenderingCat;
