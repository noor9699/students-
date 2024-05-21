import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-xl navbar-dark bg">
        <div class="container">
          <h1 class="logo me-auto">
            <a class="navbar-brand" href="#">
              Arsha
            </a>
          </h1>
          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ms-auto mb-2 mb-xl-0 fs-5">
              <li>
                <a class="nav-link active pt-1" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link active pt-1" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link active pt-1" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a class="nav-link active pt-1" href="#service">
                  Service
                </a>
              </li>
              <li>
                <a class="nav-link active pt-1" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a
                  class="getstarted scrollto text-decoration-none text-color"
                  href="#about"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
