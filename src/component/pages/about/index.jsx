import React from "react";
import { FaCheckDouble } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="section-title text-center pt-4">
              <h2 class="dark-color">About Us</h2>
              <div class="line col-md-2 m-auto bg"></div>
            </div>

            <div class="about1 col-xl-6 col-md-12 fs-5 mt-3 mb-5">
              <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul class="fs-5 list-unstyled">
                <li>
                  <FaCheckDouble />
                  <span> </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <FaCheckDouble />
                  <span> </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </li>
                <li>
                  <FaCheckDouble />
                  <span> </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
            <div class="about2 col-xl-6 col-md-12 mt-3 mb-5">
              <p class="fs-5 mt-3">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a href="#" class="btn-learn-more text-decoration-none">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      

      <section id="background-img" class="background-img">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 text-center text-xl-start">
              <h3 class="text-color">Call To Action</h3>
              <p class="text-color">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div class="col-xl-3 mt-5 background-img-btn-container text-center">
              <a
                class="background-img-btn align-middle text-decoration-none fs-4 text-color"
                href="#"
              >
                Call To Active
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
