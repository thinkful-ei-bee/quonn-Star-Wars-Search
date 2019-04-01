import React from "react";
import "./ContentFilter.css";

function ContentFilter(props) {

    return <div>
        <select onChange={e => props.onChange(e)}>
            <option id="people/?search=">Characters</option>
            <option id="films/?search=">Films</option>
            <option id="planets/?search=">Planets</option>
            <option id="spaceships/?search=">Spaceships</option>
            <option id="species/?search=">Species</option>
            <option id="vehicles/?search=">Vehicles</option>
        </select>
    </div>

}

export default ContentFilter;