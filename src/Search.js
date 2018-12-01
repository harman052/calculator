/** Third party libraries */
import React, { Component } from "react";

/** CSS */
import "./App.css";

class Search extends Component {
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Search images from one place</h1>
          <p className="lead text-muted">
            Get your image search results from popular image sites such as
            <span className="font-weight-bold service-provider-names">
              Unsplash, Pixabay and Pexels
            </span>
            all at one place
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control search-box"
              placeholder="Love, flowers, mountains, city..."
              aria-label="Search text"
              aria-describedby="image search term"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
