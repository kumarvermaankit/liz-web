const About = () => {
  console.log("call aboyt ======");
  return (
    <div>
      <section id="slide" class="slide page-breadcrumb">
        <div class="content-bottom"></div>
        <section
          id="team"
          class="our-team background-fullwidth background-fixed">
          <div class="container">
            <div class="row">
              <div
                class="text-center col-12 section-title"
                data-aos="fade-zoom-in"
              >
                <h3>
                  About
                  <span>Us</span>
                </h3>
                <div class="space-25"></div>
                <h4>
                  O2 Club foundation brings carbon-credit rewards to
                  individuals.
                </h4>
                <p>
                  Our collaborative platforms and network systems leverage IoT,
                  connected sensors, and the blockchain technology that can help
                  achieve global low-carbon transition goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          class="why-us vision padding-100 background-fullwidth background-fixed "
          style={{ backgroundImage: "url(assets/img/gray-bg1.jpg)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6 text-center" data-aos="fade-right">
                <img src="assets/img/vision.png" class="img-fluid" alt="" />
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-zoom-in"
                data-aos-delay="200"
              >
                <h4 className="page-sec-title">Vision</h4>
                <div class="space-25"></div>
                <p>
                  Positive change starts on the personal level and the best
                  thing we can all do for our communities is to adopt
                  eco-friendly practices to fight against climate change.
                </p>
                <p>
                  Our actions can create ripple effects that inspire and
                  motivate collective actions, moving us towards the systemic
                  change we need to tackle an issue like climate change.
                </p>
                <p>
                  To address climate change, we have to work together. We all
                  live and work in various communities, and can organize our
                  friends, family, and co-workers to tackle climate change
                  together. The more people we involve in climate solutions, the
                  more our impact multiplies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="download_app"
          class="download-app ideal-citizen">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6" data-aos="fade-right">
                <h4 className="page-sec-title">Get Rewarded for Being an Ideal Citizen</h4>
                <div class="space-25"></div>
                <p>
                  Every mile you travel through public transport or an Electric
                  Vehicle, earns you the right to be called an ideal citizen.{" "}
                </p>
                <p>So where is the incentive that you rightfully deserve? </p>
                <p>
                  After all, in a world where the climate is more destabilized
                  every day, who crowns the unsung heroes that are doing
                  something about it?
                </p>
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  src="assets/img/rewards.png"
                  class="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          class="why-us we-are padding-100 background-fullwidth background-fixed "
          style={{ backgroundImage: "url(assets/img/pattern-bg.png)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6 text-center" data-aos="fade-right">
                <img src="assets/img/earning.png" class="img-fluid" alt="" />
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-zoom-in"
                data-aos-delay="200"
              >
                <h4 className="page-sec-title">We are...</h4>
                <div class="space-25"></div>
                <p>
                  Every time you take the metro instead of a fossil fuel powered
                  vehicle, we are here to thank you.
                </p>
                <p>
                  Every mile that you travel saving carbon emissions, we are
                  with you.
                </p>
                <p>
                  We use a block-chain based crypto reward system that rewards
                  you with tokens that you can exchange at your convenience for
                  amazing rewards and discounts with your favorite carbon
                  neutral businesses.
                </p>
                <div class="space-25"></div>
                <p>
                  So join us in the mission of saving our planet from being
                  cooked, and we promise you that you will be more than fairly
                  compensated!{" "}
                </p>
                <p>
                  <div class="space-15"></div>
                  <a
                    href="#"
                    class="btn-style-two"
                  >
                    <span>Join Now</span>
                  </a>
                </p>
                <div class="space-50"></div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="download_app"
          class="download-app how-we-help">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6" data-aos="fade-right">
                <h4 className="page-sec-title">How do We Help?</h4>
                <div class="space-25"></div>
                <p>
                  We recognize your contribution in helping big organizations
                  earn carbon credits, and we reward you for it.{" "}
                </p>
                <p>
                  You earn tokens which can be directly traded for reward later.
                </p>
                <p>
                  For every 1kg of CO2 that you offset, we reward you with 1
                  token.
                </p>
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  src="assets/img/recognization.png"
                  class="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
