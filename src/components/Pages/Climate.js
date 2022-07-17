const Climate = () => {
  return (
    <div>
      <section id="slide" class="slide page-breadcrumb">
        <div class="content-bottom"></div>
        <section
          id="team"
          class="our-team wcci">
          <div class="container">
            <div class="row">
              <div
                class="text-center col-sm-12 col-md-12 col-lg-12 section-title">
                <h3>Worldwide Carbon Credit Initiatives</h3>
                <h3><span>Digital innovations to enable climate action</span></h3>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          class="why-us CarbonCredits background-fullwidth background-fixed "
          style={{ backgroundImage: "url(assets/img/gray-bg1.jpg)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6 text-center" data-aos="fade-right">
                <img
                  src="assets/img/ClimateCredit.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-zoom-in"
                data-aos-delay="200"
              >
                <h4 className="page-sec-title">What is a carbon credit?</h4>
                <div class="space-25"></div>
                <p>
                  A carbon credit is a kind of permit that represents 1 ton of
                  carbon dioxide removed from the atmosphere. They can be
                  purchased by an individual or, more commonly, a company to
                  make up for carbon dioxide emissions that come from industrial
                  production, delivery vehicles or travel.
                </p>
                <p>
                  Carbon credits are most often created through agricultural or
                  forestry practices, although a credit can be made by nearly
                  any project that reduces, avoids, destroys or captures
                  emissions. Individuals or companies looking to offset their
                  own greenhouse gas emissions can buy those credits through a
                  middleman or those directly capturing the carbon. But this
                  only goes for what is called the “voluntary market.”
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="download_app"
          class="download-app ComplianceMarket">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-12" data-aos="fade-right">
                <h4 className="page-sec-title">The Kyoto Protocol</h4>
                <div class="space-25"></div>
                <p>
                  The United Nations' Intergovernmental Panel on Climate Change
                  (IPCC) developed a carbon credit proposal to reduce worldwide
                  carbon emissions in a 1997 agreement known as the Kyoto
                  Protocol. The agreement set binding emission reduction targets
                  for the countries that signed it. Another agreement, known as
                  the Marrakesh Accords, spelled out the rules for how the
                  system would work.
                </p>
                <p>
                  The Kyoto Protocol divided countries into industrialized and
                  developing economies. Industrialized countries, collectively
                  called Annex 1, operated in their own emissions trading
                  market. If a country emitted less than its target amount of
                  hydrocarbons, it could sell its surplus credits to countries
                  that did not achieve its Kyoto level goals, through an
                  Emission Reduction Purchase Agreement (ERPA).
                </p>
                <p>
                  The separate Clean Development Mechanism for developing
                  countries issued carbon credits called a Certified Emission
                  Reduction (CER). A developing nation could receive these
                  credits for supporting sustainable development initiatives.
                  The trading of CERs took place in a separate market.
                </p>
                <p>
                  The first commitment period of the Kyoto Protocol ended in
                  2012.6 The U.S. had already dropped out in 2001.
                </p>
              </div>
              {/* <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-left"
                data-aos-delay="400"
              ></div> */}
            </div>
          </div>
        </section>
        <section
          id="about"
          class="why-us CreditMarket background-fullwidth background-fixed "
          style={{ backgroundImage: "url(assets/img/gray-bg.png)" }}>
          <div class="container">
            <div class="row align-items-center">
              {/* <div class="col-sm-12 col-md-12 col-lg-12 text-center" data-aos="fade-right"></div> */}
              <div
                class="col-sm-12 col-md-12 col-lg-12"
                data-aos="fade-zoom-in"
                data-aos-delay="200"
              >
                <h4 className="page-sec-title">The Paris Climate Agreement</h4>
                <div class="space-25"></div>
                <p>
                  The Kyoto protocol was revised in 2012 in an agreement known
                  as the Doha Amendment, which was ratified as of October 2020,
                  with 147 member nations having "deposited their instrument of
                  acceptance."
                </p>
                <p>
                  More than 190 nations signed on to the Paris Agreement of
                  2015, which also sets emission standards and allows for
                  emissions trading. The U.S. dropped out in 2017 but
                  subsequently rejoined the agreement in January 2020 under
                  President Joe Biden.
                </p>
                <p>
                  The Paris Agreement, also known as the Paris Climate Accord,
                  is an agreement among the leaders of over 180 countries to
                  reduce greenhouse gas emissions and limit the global
                  temperature increase to below 2 degrees Celsius (3.6 F) above
                  preindustrial levels by the year 2100.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="download_app"
          class="download-app ComplianceMarket">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-12" data-aos="fade-right">
                <h4 className="page-sec-title">The Glasgow COP26 Climate Change Summit</h4>
                <div class="space-25"></div>
                <p>
                  Negotiators at the summit in November 2021 inked a deal that
                  saw nearly 200 countries implement Article 6 of the 2015 Paris
                  Agreement, allowing nations to work toward their climate
                  targets by buying offset credits that represent emission
                  reductions by other countries. The hope is that the agreement
                  encourages governments to invest in initiatives and technology
                  that protects forests and build renewable energy technology
                  infrastructure to combat climate change.
                </p>
                <p></p>
              </div>
              {/* <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-left"
                data-aos-delay="400"
              ></div> */}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Climate;
