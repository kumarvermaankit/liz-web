import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function Footer() {
  return (
    <section
      id="about"
      class="why-us blockchain background-fullwidth background-fixed "
      style={{
        backgroundImage: "url(assets/img/gray-bg.jpg)",
      }}
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12 col-lg-6" data-aos="fade-zoom-in" data-aos-delay="200">
            <div className="section-title-style-2">
              <h3>O2 <span>Technology</span></h3>
            </div>
            <div class="space-50"></div>

            <Tabs defaultActiveKey="security" id="uncontrolled-tab-example" lassName="mb-3">
              <Tab eventKey="security" title="Security">
                <div class="tab-block-content">
                  <span class="lnr lnr-lock"></span>
                  <h3>Security</h3>
                </div>
                <p>O2 blockchain solution creates an unalterable record of transactions with end-to-end encryption.</p>
                <p> It makes it harder to fraud and prevents unauthorized activity. Additionally, data on the blockchain is stored across a network of computers, making it nearly impossible to hack.</p>
              </Tab>

              <Tab eventKey="transparency" title="Transparency">
                <div class="tab-block-content">
                  <span class="lnr lnr-magnifier"></span>
                  <h3>Transparency</h3>
                </div>
                <p>The blockchain solution improves transparency, accountability, and traceability of actions that reduce carbon footprint. It provides reliable, standardized, and readily available information on actions and the carbon reductions thereof.</p>
              </Tab>

              <Tab eventKey="incentive" title="Incentive System">
                <div class="tab-block-content">
                  <span class="lnr lnr-gift"></span>
                  <h3>Incentives</h3>
                </div>
                <p>AI verifies and Oracles confirm actions with an automated system. Smart contracts operate on the verified information to fully automated incentive linked to the actions and carbon reductions thereof. They directly reward individuals for using greener modes. Automation helps reach users at lowest cost transparently, and ensures a consistent reward system for long period of time.</p>
              </Tab>
              
              <Tab eventKey="data" title="Data Ownership">
                <div class="tab-block-content">
                  <span class="lnr lnr-database"></span>
                  <h3>Data Ownership</h3>
                </div>
                <p>The blockchain solution improves transparency, accountability, and traceability of actions that reduce carbon footprint. It provides reliable, standardized, and readily available information on actions and the carbon reductions thereof.</p>
              </Tab>
            </Tabs>

            {/* <div class="toggle">
              <div class="tabs">
                <div class="tab active">Security</div>
                <div class="tab">Transparency</div>
                <div class="tab">Incentive System</div>
                <div class="tab">Data Ownership</div>
              </div>
              <div class="panels">
                <div class="panel">
                  <div class="flex-cont">
                    <span class="lnr lnr-lock"></span>
                    <h3>Security</h3>
                  </div>
                  <p>
                    O2 blockchain solution creates an unalterable record of
                    transactions with end-to-end encryption. <br /> It makes it
                    harder to fraud and prevents unauthorized activity.
                    Additionally, data on the blockchain is stored across a
                    network of computers, making it nearly impossible to hack.
                  </p>
                </div>
                <div class="panel">
                  <div class="flex-cont">
                    <span class="lnr lnr-magnifier"></span>
                    <h3>Transparency</h3>
                  </div>
                  <p>
                    The blockchain solution improves transparency,
                    accountability, and traceability of actions that reduce
                    carbon footprint. It provides reliable, standardized, and
                    readily available information on actions and the carbon
                    reductions thereof.
                  </p>
                </div>
                <div class="panel">
                  <div class="flex-cont">
                    <span class="lnr lnr-gift"></span>
                    <h3>Incentives</h3>
                  </div>
                  <p>
                    AI verifies and Oracles confirm actions with an automated
                    system. Smart contracts operate on the verified information
                    to fully automated incentive linked to the actions and
                    carbon reductions thereof. They directly reward individuals
                    for using greener modes. Automation helps reach users at
                    lowest cost transparently, and ensures a consistent reward
                    system for long period of time.
                  </p>
                </div>
                <div class="panel">
                  <div class="flex-cont">
                    <span class="lnr lnr-database"></span>
                    <h3>Data Ownership</h3>
                  </div>
                  <p>
                    The blockchain solution improves transparency,
                    accountability, and traceability of actions that reduce
                    carbon footprint. It provides reliable, standardized, and
                    readily available information on actions and the carbon
                    reductions thereof.
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div class="col-md-12 col-lg-6 text-center" data-aos="fade-right">
            <img src="assets/img/custom/block.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
