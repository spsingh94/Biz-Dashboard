import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/home">
        Work Books
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="/home">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-link" href="/about">
            About
          </a>
          <a class="nav-link" href="/tools">
            Tools
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
