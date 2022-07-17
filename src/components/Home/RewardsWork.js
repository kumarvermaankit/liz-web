import Marquee from "react-fast-marquee";

export default function Footer() {
  return (
    <section
      id="screenshots"
      class="screenshots padding-100 background-fullwidth background-fixed"
      style={{
        backgroundImage: "url(assets/img/gray-bg.jpg)",
      }}
    >
      <div class="container-fluid">
        <div class="row">
          <div class="text-center col-12 section-title sec-title" data-aos="fade-zoom-in">
            <h3>
              How The System
              <span> Works ?</span>
            </h3>
            <div class="space-25"></div>
            <p>
              The revolutionary automated system helps you verify your green
              actions transparently and get rewarded consistently, with world’s
              most important and valuable carbon reward
            </p>
            <br />
            <p>
              {" "}
              You not only earn to do good for the climate and health, but also
              boost local economy
            </p>
          </div>
        </div>
        <div class="row reward-work">
          <div
            style={{
              width: "100%",
              overflow: "auto",
              display: "flex",
            }}
            class="col-12"
          >
            <Marquee
              speed={150}
              gradient={false}
              // class="screenshots-slider slick-initialized slick-slider d-flex align-items-center"
              data-aos="fade-up"
              // style={{
              //   width: "50%",
              //   overflow: "auto",
              // }}
            >
              <div class="item">
                <h5>Green Actions</h5>
                <img
                  src="assets/img/stepA.png"
                  class="img-fluid d-block"
                  alt=""
                />
                <p>Users can share their sustainable actions via Mobile App.</p>
              </div>
              <div class="item">
                <h5>AI Verifies</h5>
                <img
                  src="assets/img/stepB.png"
                  class="img-fluid d-block"
                  alt=""
                />
                <p>The AI verifies the proof of sustainable actions.</p>
              </div>
              <div class="item">
                <h5>Oracles Confirm</h5>
                <img
                  src="assets/img/stepC.png"
                  class="img-fluid d-block"
                  alt=""
                />
                <p>
                  Once the POSA (proof of sustainable action) is verified
                  transactions are recorded on the Blockchain.
                </p>
              </div>
              <div class="item">
                <h5>Contract Rewards</h5>
                <img
                  src="assets/img/stepD.png"
                  class="img-fluid d-block"
                  alt=""
                />
                <p>Get Rewards in form of crypto tokens </p>
              </div>
              <div class="item">
                <h5>Value Grows</h5>
                <img
                  src="assets/img/stepE.png"
                  class="img-fluid d-block"
                  alt=""
                />
                <p>
                  A once in a lifetime opportunity, Earn reward and watch an
                  exponential growth
                </p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
