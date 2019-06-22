import React from "react";
import Result from "../Result/Result";

const uuidv4 = require('uuid/v4');

function ResultsList(props) {
    let searchResults;
    if(!props.results.length){
        searchResults = props.results
    }else{
        searchResults = props.results.map(result => {
            return <Result id={uuidv4()} result={result}></Result>
         })
    }
    return <div>
        {searchResults}
        
    </div>
}

export default ResultsList;