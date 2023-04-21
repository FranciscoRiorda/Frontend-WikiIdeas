import React from "react";
import { Link } from "react-router-dom";
import "./stylesRenderingCat.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RenderingCat = ({ categoria }) => {
  AOS.init();
  return (
    <>
      <div data-aos="fade-up" className="cardCategoria2" id="card">
        <Link to={`${categoria.url}`} target={"_blank"} className="link">
          <div className="divCard" data-aos="fade-right">
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
