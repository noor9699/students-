import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";





const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer" class="footer">
          <div class="container">
            <div class="row mt-5 mb-4">
              <div class="col-lg-3 col-md-6">
                <div class="section-title dark-color">
                  <h2>ARSHA</h2>
                </div>
                <p>
                  A108 Adam Street
                  <br />
                  New York, NY 5352002
                  <br />
                  United States
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 2533841313
                  <br />
                  <strong>Email:</strong> Exampleinfo@gmail.com
                </p>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-sec2">
                  <h4 class="dark-color">Usefull Link</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#home" class="text-decoration-none fs-5">
                        Home
                      </a>
                    </li>
                    <li class="mt-2">
                      <a href="#about" class="text-decoration-none fs-5">
                        About
                      </a>
                    </li>
                    <li class="mt-2">
                      <a href="#team" class="text-decoration-none fs-5">
                        Team
                      </a>
                    </li>
                    <li class="mt-2">
                      <a href="#service" class="text-decoration-none fs-5">
                        Service
                      </a>
                    </li>
                    <li class="mt-2">
                      <a href="#contact" class="text-decoration-none fs-5">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-sec3">
                  <h4 class="dark-color">Company</h4>
                  <p class="common-name fs-5">
                    Moyb
                    <br />
                    Belimo
                    <br />
                    LifeGroups
                    <br />
                    Lilly
                    <br />
                    Citrus
                    <br />
                    Trustly
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-sec4">
                  <h4 class="dark-color">Our Social Networks</h4>
                  <p>
                    Cras fermentum odio eu feugiat lide par naso tierra videa
                    magna derita valies
                  </p>
                  <div class="footer-icon text-center">
                    <i class="fs-4 text-color"><FaTwitter /></i>
                    <i class=" text-color"><FaFacebook /></i>
                    <i class="  text-color"><AiFillInstagram /></i>
                    <i class="  text-color"><FaGithub /></i>
                    <i class=" text-color"><FaLinkedinIn /></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="footer-end" class="footer-end bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="foot-sec d-flex justify-content-between">
                <div class="f-left mt-2">
                  <p class="text-color">
                    &copy; Copyright{" "}
                    <strong>
                      <span>Arsha</span>
                    </strong>
                    . All Rights Reserved
                  </p>
                </div>
                <div class="f-right mt-2 text-color">
                  Designed by
                  <a
                    href="https://bootstrapmade.com/"
                    class="bg-icon text-decoration-none"
                  >
                    BootstrapMade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
