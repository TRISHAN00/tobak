import React from "react";

const HeroBanner = () => {
  return (
    <section class="hero-banner pt-160 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <div class="hero-content pt-110">
              <h1 class="title mb-20">
                Designers, Developers and Marketers united.
              </h1>
              <p class="sub-title">
                We have helped over 7000 customers & brands to design, develop
                and market their products worldwide.
              </p>
              <div class="talk-btn mt-60">
                <a href="tel:+4444243" class="cta-btn mr-30">
                  Let's chat <img src="images/icons/cta.svg" alt="cta" />
                </a>
                <a href="about_us.html">
                  <span>Learn more about us</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-5 d-none d-md-block">
            <div class="hero-img">
              <img
                class="img-fluid"
                src="images/media/person.png"
                alt="Person"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
