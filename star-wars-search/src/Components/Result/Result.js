import React, {Component} from "react";
import "./Result.css";

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showName: true
        }
    }

    render() {
        const result = this.props.result;
        return <div key={this.props.id} id={this.props.red}>
            <li className="result">
                <p>{result.name}</p>
                <p></p>
            </li>
        </div>
    }

}

export default Result;