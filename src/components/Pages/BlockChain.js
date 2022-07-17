const BlockChain = () => {
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
                class="text-center col-sm-12 col-md-12 col-lg-12 section-title">
                <h3>Blockchain</h3>
                <h3><span>Digital innovations to enable climate action</span></h3>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          class="why-us SecBlockChains SecBlockChain padding-100 background-fullwidth background-fixed "
          style={{ backgroundImage: "url(assets/img/gray-bg1.jpg)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6 text-center" data-aos="fade-right">
                <img
                  src="assets/img/ClimateChange.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-zoom-in"
                data-aos-delay="200"
              >
                <h4 className="page-sec-title">A climate change Challanges and BlockChain Opportunities</h4>
                <div class="space-25"></div>
                <p>
                  Blockchain is a powerful tool that can significantly improve
                  the transparency, accountability and traceability of
                  greenhouse gas emissions. It helps companies provide more
                  accurate, reliable, standardized, and readily available data
                  on carbon emissions.
                </p>
                <p>
                  Blockchain transform individual efforts into a networked
                  effort. And, it can clearly pinpoint the contributions
                  individual actors make to reduce their carbon footprint. The
                  spirit of competition and market-based incentives create a
                  win-win situation for all.
                </p>
                <p>
                  The decentralized approach of blockchain provides both breadth
                  and depth. It engages and enables everyone to participate in
                  the calculation. It allows for tracking and reporting of
                  reductions in greenhouse gas emissions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="download_app"
          class="download-app mrv background-fullwidth background-fixed">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6" data-aos="fade-right">
                <h4 className="page-sec-title">
                  Challanges in Measurement, reporting and verification (MRV) of
                  Carbon Credit Market
                </h4>
                <div class="space-25"></div>
                <p>
                  Currently, there is a great deal of mistrust among various
                  stakeholders, including donors and recipients of climate
                  finance. Measurement, reporting and verification (MRV) issues
                  have been major impediments to countries fulfilling their
                  climate finance pledges.
                </p>
                <p>
                  With blockchain’s consensus mechanism and crucial immutability
                  feature, especially when paired with other emerging
                  technologies such as AI and IoT, it can significantly enhance
                  MRV, driving trust in climate funding that goes to carbon
                  assets management/trading, biodiversity conservation (REDD),
                  community renewable energy projects, etc.
                </p>
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  src="assets/img/MRV.png"
                  class="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          class="why-us SecBlockChain padding-100 background-fullwidth background-fixed "
          style={{ backgroundImage: "url(assets/img/pattern-bg.png)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6 text-center" data-aos="fade-right">
                <img src="assets/img/ecosystem.png" class="img-fluid" alt="" />
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-zoom-in"
                data-aos-delay="200"
              >
                <h4 className="page-sec-title">BlockChain and MRV EcoSystem</h4>
                <div class="space-25"></div>

                <p>
                  At the global level, blockchain technology could track carbon
                  credit transactions, tokenize carbon credits and link
                  transactions to smart contracts. It could also securely store
                  the information required to track a carbon credit.
                </p>

                <p>
                  This is being tested under the World Bank’s Climate Warehouse,
                  a meta-registry that demonstrates how national registries can
                  be connected and uses blockchain technology to track
                  transactions between parties.
                </p>

                <p>
                  Eventually blockchain technology will link with the digital
                  MRV system and create a connected digital ecosystem for
                  credible, transparent and liquid carbon markets.
                </p>

                <div class="space-25"></div>

                <p>
                  Blockchain is an excellent auditable system of record that can
                  track emissions data provenance, provide data security,
                  prevent the double-counting of emissions and introduce
                  transparency in data processing steps to prove environmental
                  performance and prevent fraudulent claims.
                </p>

                <p>
                  Blockchain can provide the same benefits to carbon offsets and
                  credits where a lack of transparency and the double-counting
                  of credits is of great concern.
                </p>
                <div class="space-25"></div>

                <p>
                  In addition, by leveraging smart contracts, communities can
                  automate and incentivize participation in sustainable
                  practices that require tight coordination between individuals,
                  governments and companies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default BlockChain;
