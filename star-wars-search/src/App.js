import React, {Component} from "react";
import "./App.css";
import config from "./config.js";
import InputBox from "./Components/InputBox/InputBox";
import ResultsList from "./Components/ResultsList/ResultsList";
import ContentFilter from "./Components/ContentFilter/ContentFilter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            results: [],
            loading: false,
            filterVal: "",
            endPoint: "people/?search="
        };
    }

    // updates state with user input
    handleInput = e => {
        const searchTerm = e.target.value;
        this.setState({searchTerm: searchTerm});
    };

    // updates state with fetch results or empty array based on whether or not the
    // user has entered input planets, spaceships, vehicles, characters, films or
    // species
    handleSubmit = e => {
        const endpoint = this.state.endPoint;
        const searchTerm = this.state.searchTerm;
        
        if (searchTerm.length > 0) {
            this.setState({loading: true});
            fetch(`${config.API_ENDPOINT}${endpoint}${searchTerm}`)
            // API response/JSON format...
                .then(response => response.json())
            // Update state
                .then(data => {
                this.setState({loading: false, results: data.results});
                // Clears the form after successful fetch
                this.setState({searchTerm: ""})
                this.inputEntry.value = this.state.searchTerm;
            })
            // Catch any errors we hit and update the app
                .catch(error => this.setState({error, isLoading: false}));
         }
        
    };

    handleFilter(e) {
        const option = e.target.value;
        this.setState({
            filterVal: option
        });
        console.log(this.state.filterVal)
        if(option === "Characters"){
            this.setState({endPoint: "people/?search="});
        }else if(this.state.filterVal === "Planets"){
            console.log("planets")
            this.setState({endPoint: "planets/?search="},console.log("planets picked",this.state.endPoint));
            
        }else if(option === "Spaceships"){
            this.setState({endPoint: "spaceships/?search="});
        }else if(option === "Vehicles"){
            this.setState({endPoint: "vehicles/?search="});
        }else if(option === "Films"){
            this.setState({endPoint: "films/?search="});
        }else if(option === "Species"){
            this.setState({endPoint: "species/?search="});
        }
        console.log(this.state.endPoint,option)
    }

    render() {
        const results = this.state.results;
        const loading = this.state.loading;
        const searchTerm = this.state.searchTerm;
        const filterVal = this.state.filterVal;
        return (
            <div className="App">
                <div></div>
                <div>
                    <h1>Star Wars Search</h1>
                    <ContentFilter onChange={e => this.handleFilter(e)}></ContentFilter>
                    <InputBox
                        onChange={e => this.handleInput(e)}
                        ref={el => (this.inputEntry = el)}
                        onClick={e => this.handleSubmit(e)}
                        value={searchTerm}></InputBox>
                    <ResultsList results={results}></ResultsList>
                    {/* Shows spinner icon while fetch results are loading */}
                    {loading && <div><i className="fa fa-spinner slow-spin fa-3x"/>
                        <h1>Loading Characters...</h1>
                    </div>}
                    <h1>{filterVal}</h1>
                </div>
            </div>
        );
    }
}

export default App;
