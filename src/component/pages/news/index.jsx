import React from "react";

const News = () => {
  return (
    <>
      <section id="news" class="news bg-lite">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="news-letter mt-3 mb-3">
                <h4 class="dark-color">Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post" class="bg-white">
                  <input type="email" name="email" placeholder="Your Address" />
                  <input
                    type="submit"
                    class="bg-btn text-color"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
