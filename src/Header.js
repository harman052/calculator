/** Third party libraries */
import React, { Component } from "react";

/** CSS */
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header className="header-bg">
        <div className="container">
          <div className="navbar navbar-expand-lg navbar-dark bg-dark box-shadow">
            <a href="demo" className="navbar-brand d-flex align-items-center">
              <strong>PhotoShoto</strong>
            </a>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="https://google.com">
                  About <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://google.com">
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://google.com">
                  Contribute
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://google.com">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
