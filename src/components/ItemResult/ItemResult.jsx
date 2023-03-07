import React from "react";

const Result = ({result}) => {

    return (
        <>
            <p>{result.key}</p>
            <p>{result.description}</p>
        </>
    )
}

export default Result;