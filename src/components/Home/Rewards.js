export default function Footer() {
  return (
    <section
      id="feature-area"
      class="feature-area default-padding-bottom bottom-less"
    >
      <div
        class="fixed-bottom-shape"
        style={{
          backgroundImage:
            "url(https://wordpressriverthemes.com/aveit/wp-content/uploads/2021/11/19.png)",
        }}
      ></div>
      <div class="text-center col-12 section-title" data-aos="fade-zoom-in">
        <h3>
          Ways to <span>Earn</span>{" "}
        </h3>
        <div class="space-25"></div>
        <p>
          {" "}
          {/* <h4>Earn Crypto Rewards by commiting a sustainable actions. </h4> */}
        </p>
        <div class="space-50"></div>
      </div>

      <div class="container">
        <div class="feature-items text-center">
          <div class="row">
            <div
              class="single-item col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              <div class="item">
                <div class="info">
                  <h4>Public Transport</h4>
                  {/* <p>
                    Public transportation reduces the number of people driving
                    single occupancy vehicles, more fuel is conserved, air
                    pollution decreases, and reduces the carbon footprint.{" "}
                  </p> */}
                </div>
                <div class="icon">
                  <img src="./assets/img/train.png" alt="Icon" />
                </div>
              </div>
            </div>

            <div
              class="single-item col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              <div class="item">
                <div class="info">
                  <h4>Renewable Energy</h4>
                  {/* <p>
                    Switching to clean sources of energy, such as wind and
                    solar, thus helps address not only climate change but also
                    air pollution and health.
                  </p> */}
                </div>
                <div class="icon">
                  <img src="./assets/img/cycle.png" alt="Icon" />
                </div>
              </div>
            </div>

            <div
              class="single-item col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              <div class="item">
                <div class="info">
                  <h4>Eco-Friendly Vehicles</h4>
                  {/* <p>
                    Electric cars reduces air pollution considerably, improving
                    air quality in towns and cities, with no tailpipe, EV
                    produce zero Carbon emissions when driving.
                  </p> */}
                </div>
                <div class="icon">
                  <img src="./assets/img/ev.png" alt="Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
