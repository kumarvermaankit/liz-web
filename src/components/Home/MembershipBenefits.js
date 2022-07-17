import {
  FaMoneyBillWaveAlt,
  FaBusinessTime,
  FaHandHoldingHeart,
  FaGasPump,
} from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { BsAwardFill } from "react-icons/bs";

export default function Footer() {
  return (
    <section
      id="about"
      class="why-us membership-benefits padding-100 background-fullwidth background-fixed "
      style={{
        backgroundImage: "url(assets/img/gray-bg1.jpg)",
      }}
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center" data-aos="fade-right">
            <img src="assets/img/card.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-6" data-aos="fade-zoom-in" data-aos-delay="200">
            <div className="section-title-style-2 section-title-style-2-sm">
              <h3>Membership <span>Benefits</span></h3>
              <p className="demo-p">Countless rewards and Benefits</p>
            </div>
            <div class="space-50"></div>
            <div class="row box-grid">
              <div
                class="col-lg-6 col-md-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div class="why-us-icon">
                  <FaMoneyBillWaveAlt />
                  {/* <img src="./assets/img/wallet.png" alt="Icon" /> */}
                  <p>Financial Benefit</p>
                </div>
                <div class="space-25"></div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div class="why-us-icon">
                  {/* <img src="./assets/img/improvement.png" alt="Icon" /> */}
                  <FaBusinessTime />

                  <p>Privileges to Save Time</p>
                </div>
              </div>
              <div class="space-25"></div>
            </div>
            <div class="row box-grid">
              <div
                class="col-lg-6 col-md-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <div class="why-us-icon">
                  {/* <img src="./assets/img/healthy-living.png" alt="Icon" /> */}
                  <FaHandHoldingHeart />
                  <p>Health and Well Being</p>
                </div>
                <div class="space-25"></div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div class="why-us-icon">
                  {/* <img src="./assets/img/store.png" alt="Icon" /> */}
                  <MdAddBusiness />
                  <p>Local Business Deals</p>
                </div>
                <div class="space-25"></div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div class="why-us-icon">
                  {/* <img src="./assets/img/fuel.png" alt="Icon" /> */}
                  <FaGasPump />
                  <p>Fuel Savings</p>
                </div>
                <div class="space-25"></div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div class="why-us-icon">
                  {/* <img src="./assets/img/ribbon.png" alt="Icon" /> */}
                  <BsAwardFill />
                  <p>Travel Protection</p>
                </div>
                <div class="space-25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
