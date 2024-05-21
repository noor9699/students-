import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsPhoneVibrateFill } from "react-icons/bs";


const Contact = () => {
  return (
    <>
      <section id="contact" class="contact">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-12 col-md-12 mt-5 mb-5">
              <div class="section-title text-center">
                <h2 class="dark-color">Contact</h2>
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
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i>
                    <ImLocation2 />
                  </i>
                  <h4 class="dark-color">Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div class="mail">
                  <i>
                    <MdEmail />
                  </i>
                  <h4 class="dark-color">Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div class="phone">
                <i>
                <BsPhoneVibrateFill />

                  </i>
                  <h4 class="dark-color">Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                    // style="border: 0; width: 100%; height: 290px"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="col-lg-7 d-flex align-items-stretch">
              <form action="" class="form-php-mail">
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="inputName" class="form-label fs-5">
                      Your Name
                    </label>
                    <input type="text" class="form-control" id="inputName" />
                  </div>
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label fs-5">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      required
                    />
                  </div>
                  <div class="col-12 mt-0">
                    <label for="inputAddress" class="form-label fs-5 mt-3">
                      Subject
                    </label>
                    <input type="text" class="form-control" id="inputSubject" />
                  </div>
                </div>
                <div class="col-12 mt-0">
                  <label for="inputAddress" class="form-label fs-5 mt-3">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="floatingTextarea2"
                  ></textarea>
                </div>
                <div class="text-center mt-5">
                  <button type="submit" class="bg-btn text-color">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
