export default function Footer({ setShowMembership }) {
  return (
    <section id="prices" class="prices padding-100">
      <div class="container">
        <div class="row">
          <div class="text-center col-12 section-title" data-aos="fade-zoom-in">
            <h3>
              O2 Membership <span>Plans</span>
              {/* <!-- <span> Price</span> --> */}
            </h3>
            <div class="space-25"></div>
            <p></p>
            <div class="space-50"></div>
          </div>
          <div class="col-lg-4 col-md-4 col-12">
            <div
              class="price-table text-center"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div
                class="top background-fullwidth"
                style={{ backgroundImage: "url(assets/img/gray-bg.jpg)" }}
              >
                <h4>Member</h4>
                <h3>Free</h3>
                <h5>Weekly</h5>
              </div>
              <div class="bottom">
                <ul>
                  <li>Upto 1100 blocks per year</li>
                  <li>3 Referrals max</li>
                  <li>Accident Insurance for 2 rides daily</li>
                  <li class="disable">Entry Privileges, Upto 20% discount</li>
                  <li class="disable">Limited Membership</li>
                </ul>
                <div onClick={() => setShowMembership()} class="btn-style-two btn-membership-plans">
                  <span>Choose Plan</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-12">
            <div
              class="price-table text-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div
                class="top background-fullwidth"
                style={{ backgroundImage: "url(assets/img/gray-bg.jpg)" }}
              >
                <span class="offer">Popular</span>
                <h4>Maker</h4>

                <div className="d-flex justify-content-center align-items-center">
                  <del className="pr-3">$99</del>
                  <h3>$45.9</h3>
                </div>
                <h5>Free by invitation</h5>
              </div>
              <div class="bottom">
                <ul>
                  <li>Upto 3600 blocks per year </li>
                  <li>10 Referrals max</li>
                  <li class="">Accident Insurance for 6 rides daily</li>
                  <li class="disable">Entry Privileges, Upto 20% discount </li>
                  <li class="disable">52 Weeks Membership</li>
                </ul>
                <div
                  onClick={() => setShowMembership()}
                  class="btn-style-two btn-membership-plans"
                >
                  <span>Choose Plan</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-12">
            <div
              class="price-table text-center"
              data-aos="fade-left"
              data-aos-delay="1200"
            >
              <div
                class="top background-fullwidth"
                style={{ backgroundImage: "url(assets/img/gray-bg.jpg)" }}
              >
                <h4>Pro</h4>
                <div className="d-flex justify-content-center align-items-center">
                  <del className="pr-3">$4999</del>
                  <h3>$459</h3>
                </div>

                <h5>Lifetime membership</h5>
              </div>
              <div class="bottom">
                <ul>
                  <li>Upto 3600 blocks per year </li>
                  <li>Regular Topup of Referrals</li>
                  <li class="">Accident Insurance for 6 rides daily</li>
                  <li class="">Upto 50% Discounts</li>
                  <li class="">Lifetime Membership</li>
                </ul>
                <div
                  onClick={() => setShowMembership()}
                  class="btn-style-two btn-membership-plans"
                >
                  <span>Choose Plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
