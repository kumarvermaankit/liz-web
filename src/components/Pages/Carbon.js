const Carbon = () => {
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
                <h3>What are carbon credits?</h3>
                <h3><span>How fighting climate change became a billion-dollar industry</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section
          id="download_app"
          class="download-app CarbonCredits background-fullwidth background-fixed"
          style={{ "background-image": "url(assets/img/gray-bg1.jpg)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6" data-aos="fade-right">
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
                <p>
                  There is also something called the involuntary or “compliance
                  market.”
                </p>
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  src="assets/img/ClimateCredit.png"
                  class="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          class="why-us ComplianceMarket padding-100 background-fullwidth background-fixed ">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6 text-center" data-aos="fade-right">
                <img
                  src="assets/img/CarbonExchange.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-zoom-in"
                data-aos-delay="200"
              >
                <h4 className="page-sec-title">What is the “compliance market” for carbon credits?</h4>
                <div class="space-25"></div>
                <p>
                  In the compliance market, or involuntary market, governments
                  set a cap on how many tons of emissions certain sectors — oil,
                  transportation, energy or waste management can release.
                </p>
                <p>
                  If an oil company, for example, goes over the prescribed
                  emissions limit, it must buy or use saved credits to stay
                  under the emissions cap.
                </p>
                <p>
                  If a company stays under that cap, it can save or sell those
                  credits. This is known as a cap-and-trade market. The cap is
                  the amount of greenhouse gasses a government will allow to be
                  released into the atmosphere and emitters must trade to stay
                  within that limit.
                </p>

                <div class="space-25"></div>
                <p>
                  So join us in the mission of saving our planet from being
                  cooked, and we promise you that you will be more than fairly
                  compensated!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="download_app"
          class="download-app CreditMarket background-fullwidth background-fixed"
          style={{ backgroundImage: "url(assets/img/pattern-bg.png)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6" data-aos="fade-right">
                <h4 className="page-sec-title">How big is the carbon credit market?</h4>
                <div class="space-25"></div>
                <p>
                  <i>
                    "Global carbon markets value surged to record $851 Billion
                    in 2021 -Refinitiv"
                  </i>
                </p>
                <p>
                  The value of traded global markets for carbon dioxide (CO2)
                  permits grew by 164% to a record 760 billion euros ($851
                  billion) in 2021 according to Refinitiv.
                </p>
                <p>
                  Most of the increase came from the European Union's Emissions
                  Trading System (EU ETS), which launched in 2005 and is the
                  world's most established carbon market.
                </p>
                <p>
                  It accounted for 90% of the global value at 683 billion euros,
                  the annual Refinitiv Carbon Market Year in Review showed.
                </p>
                <p>
                  Prices in the EU ETS ended 2021 at more than 80 euros a tonne,
                  more than double the price at the end of 2020, on expectations
                  that a more ambitious EU climate target of reducing emissions
                  by 55% by 2030 would lead to a tighter market.
                </p>
                <p>
                  According to Refinitiv the two regional carbon markets in
                  North America - the Western Climate Initiative and the
                  Regional Greenhouse Gas Initiative - grew by 6% last year
                  combined to around 49 billion euros. Permits in those schemes
                  rose in price by 70% over the course of last year and traded
                  volumes also hit record highs because the caps on the schemes
                  are much tighter through 2030 than to the end of 2020.
                </p>
              </div>
              <div
                class="col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  src="assets/img/carbonCreditMarket.png"
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

export default Carbon;
