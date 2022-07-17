import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer class="padding-100 pb-0">
      <div class="subscribe">
        <div class="container">
          {/* <form class="subscribe-form row m-0 align-items-center">
            <div class="col-lg-9 col-md-8">
              <div class="form-group mb-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <a
                href="#"
                class="btn btn-primary shadow d-block btn-colord btn-theme"
              >
                <span>subscribe</span>
              </a>
            </div>
          </form> */}
        </div>
      </div>
      <div class="footer-widgets">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="widget">
                <img src="assets/img/fox-logo.png" class="img-fluid" alt="" />
                <p>Building a sustainable green future.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="widget">
                <h6><span></span>Quick Links</h6>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  {/* <li>
                    <a href="#">Services</a>
                  </li> */}
                  <li>
                    <a href="#">Career</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              {/* <div class="widget">
                <h6>Social Media</h6>
                <ul>
                  <li>
                    <a href="#">Facbook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="widget">
                <h6><span></span>Quick Contact</h6>
                <ul>
                  <li>
                    <span>Email : </span>
                    <a href="mailto:info@o2club.org"></a>info@o2club.org
                  </li>
                  <li>
                    <span>Address : </span> 100 Market Street, San Francisco CA,
                    USA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-50"></div>
      <div class="copyright">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <p>Copyright © 2022 <a href="#"><b>O2Club</b></a>. All Rights Reserved.</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Terms and Conditions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
