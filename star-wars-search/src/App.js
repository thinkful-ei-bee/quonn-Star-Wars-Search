import React, { Component } from "react";
import "./App.css";
import config from "./config.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: [],
      loading: false
    };
  }

  handleInput = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    this.setState({ loading: true });
    const searchTerm = this.state.searchTerm;

    fetch(`${config.API_ENDPOINT} ${searchTerm}`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data => {
        this.setState({
          loading: false,
          results: data.results
        });
        // Clears the form after successful fetch
        this.inputEntry.value = "";
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const results = this.state.results;
    const loading = this.state.loading;
    return (
      <div className="App">
        <div>
          <input
            type="text"
            onChange={e => this.handleInput(e)}
            placeholder="Enter Search Term"
            ref={el => (this.inputEntry = el)}
          />
          <button
            type="submit"
            onClick={e => this.handleSubmit(e)}
            disabled={loading}
          >
            {loading && <i className="fa fa-spinner slow-spin" />}
            SUBMIT
          </button>
          <ul>
            {results.map(result => (
              <li>{result.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
