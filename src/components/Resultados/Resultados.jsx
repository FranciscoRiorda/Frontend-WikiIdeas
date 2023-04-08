import React from "react";
import Result from "../ItemResult/ItemResult";

const Resultados = ({resultados}) => {
    return(
        resultados.map((result) => {
            return <Result key={result.title} result={result} />
        })
    )
}

export default Resultados;