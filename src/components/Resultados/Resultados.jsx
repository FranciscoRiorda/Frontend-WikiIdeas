import React from "react";
import Result from "../ItemResult/ItemResult";

const Resultados = ({resultados}) => {

    return(
        resultados.map((result) => {
            return <Result key={result.id} result={result} />
        })
    )
}

export default Resultados;