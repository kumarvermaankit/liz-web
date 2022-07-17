export default function Footer() {
  return (
    <section
      id="download_app"
      class="download-app pb-0 background-fullwidth background-fixed"
      style={{ backgroundImage: "url(assets/img/gray-bg.jpg)" }}
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-12" data-aos="fade-right">
            <div className="download-content section-title-style-2">
              <h3>Download <span>O2C</span> App</h3>
              <p className="demo-p">Start earning on your rides*</p>
              <div className="btn-inline">
                <a href="#" class="btn-app-download" tabindex="0">
                  <i class="fab fa-app-store-ios"></i> <span>APP STORE</span>
                </a>
                <a href="#" class="btn-app-download" tabindex="0">
                  <i class="fab fa-google-play"></i> <span>GOOGLE PLAY</span>
                </a>
              </div>
              <p class="">* Members only</p>
            </div>
          </div>
          <div
            class="col-lg-6 col-12"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="img-block">
              <img
                src="assets/img/custom/43.png"
                class="img-fluid d-block mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
