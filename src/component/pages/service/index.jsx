import React from "react";
import { SiNginxproxymanager } from "react-icons/si";
import { ImAndroid } from "react-icons/im";
import { SiSemanticweb } from "react-icons/si";
import { SiGooglechrome } from "react-icons/si";



const Service = () => {
  return (
    <>
      <section id="service" class="service bg-lite">
        <div class="container mt-4 mb-5">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="section-title text-center">
                <h2 class="dark-color">Services</h2>
                <div class="line col-md-2 m-auto bg"></div>
                <p class="mt-3">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
            </div>
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
            >
              <div class="icon-box bg-white">
                <div class="icon mb-3">
                    <SiNginxproxymanager />
                </div>
                <h4>
                  <a href="" class="text-decoration-none dark-color">
                    Node Js
                  </a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
            >
              <div class="icon-box bg-white">
                <div class="icon mb-3">
                    <ImAndroid />
                </div>
                <h4>
                  <a href="" class="text-decoration-none dark-color">
                    Android Version
                  </a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
            >
              <div class="icon-box bg-white">
                <div class="icon mb-3">
                    <SiSemanticweb />
                </div>
                <h4>
                  <a href="" class="text-decoration-none dark-color">
                    X-Box
                  </a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
            >
              <div class="icon-box bg-white">
                <div class="icon mb-3">
                <SiGooglechrome />
                </div>
                <h4>
                  <a href="" class="text-decoration-none dark-color">
                    Google Chrome
                  </a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
