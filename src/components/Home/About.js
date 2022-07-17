const About = ({ handleShow }) => {
  return (
    <section id="slide" class="slide background-withbg">
      <div class="content-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-8 col-lg-9" data-aos="fade-right">
              {/* <!-- <p class="mb-0">With us you will</p> --> */}
              <div className="main-title">
                <h2>World’s First<br/>Green Reward System</h2>
              </div>

              <h5 style={{ color: "#FFFFFF" }}>Democratizes Carbon Credits for all</h5>
              <div class="space-25"></div>
              <div className="btn-read-more">
                <a
                  class="btn-style-two"
                  onClick={handleShow}
                >
                  <span>Membership</span>
                </a>
              </div>
              <p class="community">Join the community</p>
              <div class="social">
                <ul>
                  <li>
                    <a>
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-discord"></i>
                    </a>
                  </li>
                  {/* <!-- <li>
                                    <i class="fab fa-m"></i>
                                </li> --> */}
                  <li>
                    <a>
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center" data-aos="fade-left" data-aos-delay="200">
              <img
                src="assets/img/custom/mobile.png"
                class="home-img img-fluid d-block mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
