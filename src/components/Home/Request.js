import { useState } from "react";

export default function Footer({ setShowMembership, setEmailData }) {
  const [email, setEmail] = useState("");
  return (
    <section
      id="download_app"
      class="download-app padding-100 pb-0 background-fullwidth background-fixed"
      style={{
        backgroundImage: "url(assets/img/gray-bg.jpg)",
      }}
    >
      <div class="container">
        <div class="row align-items-center sec-reverse">
          <div class="col-lg-6 col-12" data-aos="fade-left" data-aos-delay="400">
            <div className="img-block">
              <img src="assets/img/custom/42.png" class="img-fluid d-block mx-auto" alt="" style={{ backgroundColor: "#ffffff" }} />
            </div>
          </div>
          <div class="col-lg-6 col-12" data-aos="fade-right">
            <div class="membership-data section-title-style-2">
              <h3>Request <span>Membership</span></h3>
              <p class="demo-p">Membership plans are limited and are by invite only.</p>
              <p>If you’ve not yet received an invite, prioritise your invite by requesting membership here.</p>
            <div class="form-email mt-3">
              <div class="">
                <input type="text" class="form-control" placeholder="Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span class="focus-border"></span>
              </div>
              <div class="submit">
                <button type="submit" class="btn-style-two"
                  onClick={() => {
                    setShowMembership();
                    setEmailData(email);
                  }}
                >
                  <span>Submit</span>
                </button>
              </div>
            </div>
            <p class="demo-p">
              Pro Tip: If an existing member refers you, you get the maker
              membership plan, FREE.
            </p>
            {/* <!-- <a href="#" class="btn btn-primary shadow btn-colord btn-theme" tabindex="0">
                        <i class="fab fa-apple"></i>
                        <span>Git it on
                            <br />APP STORE</span>
                    </a>
                    <a href="#" class="btn btn-primary shadow  btn-colord btn-theme" tabindex="0">
                        <i class="fab fa-google-play"></i>
                        <span>Git it on
                            <br />GOOGLE PLAY</span>
                    </a> --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
