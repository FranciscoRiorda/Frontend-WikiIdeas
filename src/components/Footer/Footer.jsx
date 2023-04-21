import React from "react";
import "./footerStyles.css";
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <p>© Todos los derechos reservados </p>
          <ul>
            <li>
              <Link to={"https://www.instagram.com"} target="_blank">
                <FaInstagram className="icono" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.facebook.com"} target="_blank">
                <FaFacebookSquare className="icono" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.twitter.com"} target="_blank">
                <FaTwitterSquare className="icono" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
