import React from "react";
import "./itemResultStyles.css";
import { Link } from "react-router-dom";

const Result = ({ result }) => {
  return (
    <>
      <Link target={'_blank'} to={result.url}>
        <div className="listaResult">
          <li>{result.title}</li>
        </div>
      </Link>
    </>
  );
};

export default Result;
