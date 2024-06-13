import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="doc">
          <a href="http://localhost:8000/swagger" target="_blank" rel="noopener noreferrer">
            Swagger
          </a>
          <a href="http://localhost:8000/doc" target="_blank" rel="noopener noreferrer">
            Doc
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;