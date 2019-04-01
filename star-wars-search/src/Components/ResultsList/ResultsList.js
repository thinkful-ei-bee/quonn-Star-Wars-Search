import React from "react";
import Result from "../Result/Result";

const uuidv4 = require('uuid/v4');

function ResultsList(props) {
    console.log(props.results)
    return <div>
        <ul>
            {props.results.map(result => {
               return <Result id={uuidv4()} result={result}></Result>
            })}
          </ul>
    </div>
}

export default ResultsList;