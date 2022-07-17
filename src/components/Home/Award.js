import { FaShare } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiVipFill } from "react-icons/ri";
import { BsShieldFillCheck } from "react-icons/bs";
export default function Footer() {
  return (
    <section id="main_features" class="main-features padding-100">
      <div class="container">
        <div class="row">
          <div class="text-center col-12 section-title" data-aos="fade-zoom-in">
            <h3>Award Winning <span>Features</span></h3>
            <div class="space-25"></div>
            {/* <p>
              O2 Club is the revolutionary Web 3.0 platform, that helps you
              verify your sustainable actions transparently and get rewarded
              consistently, with world’s most important and fastest growing
              Crypto
            </p> */}
            <div class="space-25"></div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-3 text-lg-right left-side">
            <div
              class="one-feature one"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              <div>
                {/* <span class="lnr lnr-rocket"></span> */}
                <GiTakeMyMoney />
              </div>
              <div>
                <h3>Decarbon to Earn</h3>
                <p>
                  1kg Co2 rewarded with 1 token now, and 0.9x every 52 weeks, to
                  reward early action more <br />{" "}
                </p>
                <p style={{ fontStyle: "italic" }}>Scarce with time like oil</p>
              </div>
            </div>
            {/* <!-- <div class="one-feature" data-aos="fade-right" data-aos-delay="1800">
                        <h5>Lorem ipsum</h5>
                        <span class="lnr lnr-cloud"></span>
                        <p>Our system is a comprehensive system of applied creativity.</p>
                    </div> --> */}
            <div
              class="one-feature"
              data-aos="fade-right"
              data-aos-delay="1400"
            >
              <div>
                {/* <span class="lnr lnr-cog"></span> */}
                <RiVipFill />
              </div>
              <h3>Move better</h3>
              <p>
                Members get mobility benefits, privileges they love
              </p>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <div class="features-circle">
              <div class="circle-svg" data-aos="zoom-in" data-aos-delay="400">
                <svg
                  version="1.1"
                  id="features_circle"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="543px"
                  height="400.953px"
                  viewBox="0 0 543 542.953"
                  enable-background="new 0 0 543 542.953"
                  xmlSpace="preserve"
                >
                  <g>
                    <circle
                      fill="none"
                      stroke="#"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      stroke-dasharray="11.9474,11.9474"
                      cx="271.5"
                      cy="271.516"
                      r="270"
                    />
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0"
                      to="360"
                      dur="50s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </g>
                </svg>
              </div>
              <img
                data-aos="fade-up"
                data-aos-delay="200"
                src="assets/img/custom/feat.png"
                class="download-img img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-3 right-side">
            <div class="one-feature" data-aos="fade-left" data-aos-delay="1000">
              <div>
                {/* <span class="lnr lnr-construction"></span> */}
                <BsShieldFillCheck />
              </div>
              <h3>Transparent verification</h3>
              <p>
                AI driven smart contracts prove actions transparently on
                blockchain
              </p>
            </div>
            {/* <!-- <div class="one-feature" data-aos="fade-left" data-aos-delay="1800">
                        <h5>Lorem ipsum</h5>
                        <span class="lnr lnr-database"></span>
                        <p>For more than 5 years, we’ve been passionate about achieving better.</p>
                    </div> --> */}
            <div class="one-feature" data-aos="fade-left" data-aos-delay="1400">
              <div>
                {/* <span class="lnr lnr-gift"></span> */}
                <FaShare />
              </div>
              <div>
                <h3>Share to inspire</h3>
                <p>
                  Integration across platforms to inspire collective action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
