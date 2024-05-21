import React from "react";
import Image1 from "../../assets/img/hero-img.png";
import Image2 from "../../assets/img/client-1.png";
import Image3 from "../../assets/img/client-2.png";
import Image4 from "../../assets/img/client-3.png";
import Image5 from "../../assets/img/client-4.png";
import Image6 from "../../assets/img/client-5.png";
import Image7 from "../../assets/img/client-6.png";

const Home = () => {
  return (
    <>
      <section id="home" class="home bg">
        <div class="container">
          <div class="row home-row">
            <div class="col-lg-6 col-md-12 home-section">
              <h1 class="text-color">
                Better Solution For Your <br />
                Business
              </h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div>
                <button class="btn-started bg-btn text-color">
                  Get Started
                </button>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div className="image1">
                <img src={Image1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home-foot" class="bg-lite">
        <div class="container">
          <div class="row foot-img d-flex justify-content-between">
            <div class="col-lg-2 col-md-6 ">
              <div class="image2">
                <img src={Image2} />
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="image2">
                <img src={Image3} />
              </div>
            </div>
            <div class="col-lg-2 col-md-6 image2">
              <div class="image2">
                <img src={Image4} />
              </div>
            </div>
            <div class="col-lg-2 col-md-6 image2">
              <div class="image2">
                <img src={Image5} />
              </div>
            </div>
            <div class="col-lg-2 col-md-6 image2">
              <div class="image2">
                <img src={Image6} />
              </div>
            </div>
            <div class="col-lg-2 col-md-6 image2">
              <div class="image2">
                <img src={Image7} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
