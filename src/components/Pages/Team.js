const Team = () => {
  return (
    <div>
      <section id="slide" class="slide">
        <div class="content-bottom"></div>
        <section
          id="team"
          class="our-team padding-100 background-fullwidth background-fixed"
          style={{ backgroundImage: "url(assets/img/gray-bg.jpg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="text-center col-sm-12 col-md-12 col-lg-12 section-title">
                <h3>Our<span> Team</span></h3>
                <div class="space-25"></div>
                <p>Team and Mind Behind O2C.</p>
                <div class="space-50"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div
                  class="team-slider d-flex align-items-center justify-content-center"
                  data-aos="fade-up"
                >
                  <div class="item person text-center">
                    <img
                      src="https://via.placeholder.com/200x200"
                      class="img-fluid d-block mx-auto"
                      alt=""
                    />
                    <div class="space-20"></div>
                    <h3>Nishant Idnani</h3>
                    <div class="space-20"></div>
                    <h5>Co-Founder</h5>
                    <div class="space-20"></div>
                    <p>Investment Banking</p>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item person text-center">
                    <img
                      src="https://via.placeholder.com/200x200"
                      class="img-fluid d-block mx-auto"
                      alt=""
                    />
                    <div class="space-20"></div>
                    <h3>Vineet Singh</h3>
                    <div class="space-20"></div>
                    <h5>Co-Founder</h5>
                    <div class="space-20"></div>
                    <p>Engineering</p>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Team;
