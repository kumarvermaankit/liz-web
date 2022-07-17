const HowitWorks = () => {
  return (
    <div>
      <section id="slide" class="slide page-breadcrumb">
        <div class="content-bottom"></div>
        <section id="boxes" class="boxes">
          <section id="main_features" class="main-features how-it-works">
            <div class="container">
              <div class="row">
                <div class="text-center col-sm-12 col-md-12 col-lg-12 section-title">
                  <h3>How <span>it works?</span></h3>
                </div>
                <div class="space-50"></div>

                <div className="text-center">
                  <p>
                    O2C Foundation is building a collaborative platforms and
                    network systems using IoT, connected sensors, and blockchain
                    which can help achieve global low-carbon transition goals.
                    The biggest hurdle toward a carbon-neutral future is the
                    inability of blockchains to interact with environmental data
                    meaningfully that could create value for the community. The
                    platform uses mobility data to build smart contracts. The
                    blockchain oracles pull data from various vehicle sensors
                    and other sources to trigger smart contracts built on a
                    blockchain. The platform guarantees that people earn rewards
                    fairly and transparently when they meet sustainability
                    requirements.
                  </p>
                </div>

                <div class="space-25"></div>
                <img
                  src="assets/img/How-it-work.png"
                  class="img-fluid"
                  alt=""
                />
                <div class="space-25"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-12"></div>
                <div class="col-md-12 col-12">
                  <h5 className="page-sec-title-sm">Data Source</h5>
                  <p>
                    An IoT device or Mobile App collects data from various
                    sensors to calculate the sustainable miles. The data is then
                    fed into decentralized computation nodes.
                  </p>

                  <div class="space-25"></div>

                  <h5 className="page-sec-title-sm">Data Pipeline</h5>
                  <p>
                    IoT devices and Mobile apps generate a massive amount of
                    data points each minute which may or may not have relevant
                    information. The data pipeline is a series of programs that
                    help filter out unnecessary data using machine learning and
                    other property algorithms.
                  </p>
                  <div class="space-25"></div>

                  <h5 className="page-sec-title-sm">Decentralized Computation</h5>
                  <p>
                    The filtered data is fed into the decentralized
                    computational node to verify user sustainability actions.
                    Once the POW is verified the data is stored in a distributed
                    file system using (InterPlanetary File System protocol) and
                    the transaction is recorded on the Blockchain.
                  </p>
                  <div class="space-25"></div>

                  <h5 className="page-sec-title-sm">Decentralized Storage</h5>
                  <p>
                    Every user’s data and proof of work are securely stored on a
                    distributed file system using (InterPlanetary File System
                    protocol). Users can access the data whenever required to
                    support the transaction. The data stored in distributed file
                    system contain indispensable information that can be used to
                    improve infrastructure, last-mile connectivity, or boost the
                    local economy.
                  </p>
                  <div class="space-25"></div>

                  <h5 className="page-sec-title-sm">Smart Contract</h5>
                  <p>
                    Our Smart contracts are an incredible tool for incentivizing
                    participation in global green initiatives. O2Club smart
                    contracts are fully automated decentralized incentive
                    systems that can directly reward individuals for taking part
                    in sustainable practices. Any public or private institution
                    interested in acquiring users’ data has to go through a
                    decentralized smart contract the price paid for data will be
                    uniformly distributed to the users who have given the
                    consent to data sharing.
                  </p>
                  <div class="space-25"></div>

                  <h5 className="page-sec-title-sm">BlockChain Network</h5>
                  <p>
                    Every transaction of the green mile traveled is recorded on
                    Blockchain. Your data is sensitive and crucial, and
                    blockchain can significantly change how your critical
                    information is viewed. By creating a record that can’t be
                    altered and is encrypted end-to-end, blockchain helps
                    prevent fraud and unauthorized activity. Information is
                    stored across a network of computers rather than a single
                    server.
                  </p>
                  <div class="space-25"></div>

                  <h5 className="page-sec-title-sm">Digital Wallet</h5>
                  <p>
                    Every Blockchain transaction is stored on a digital wallet.
                    A digital wallet allows users to store and manage their
                    tokens or cryptocurrencies. A blockchain wallet allows
                    transfers in cryptocurrencies and the ability to convert
                    them back into a user's local currency.
                  </p>
                  <div class="space-25"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default HowitWorks;
