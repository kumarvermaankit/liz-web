import { useLocation, Link } from "react-router-dom";
const Header = ({
  setShowMembership,
  handleLogin,
  handleShowInvite,
  scrollY,
  ...props
}) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header

    
      class={`foxapp-header ${
        location.pathname !== "/" ? "background-withcolor" : ""
      }   ${scrollY > 900 ? "sticky" : ""}`}
    >
      <nav class="navbar navbar-expand-lg navbar-light" id="foxapp_menu">
        <div class="container">
          <Link to="/" class="navbar-brand">
            <img src="assets/img/fox-logo.png" class="img-fluid" alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_menu"
            aria-controls="main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_menu">
            <ul class="navbar-nav ml-auto py-3">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/about" class="dropdown-item anchor">
                    About us
                  </Link>
                  <Link to="/howitWorks" class="dropdown-item anchor">
                    How it works
                  </Link>
                  <Link to="/blockchain" class="dropdown-item anchor">
                    Blockchain
                  </Link>
                  <Link to="/carbonCredits" class="dropdown-item anchor">
                    Carbon Credits
                  </Link>
                  <Link to="/climateChange" class="dropdown-item anchor">
                    Climate Change
                  </Link>
                  <Link to="/emissions" class="dropdown-item anchor">
                    Emissions
                  </Link>
                  {/* <Link to="/team" class="dropdown-item anchor">
                    Team
                  </Link> */}
                </div>
              </li>
              <li class="nav-item button-mem">
                {localStorage.getItem("token-liz") ? (
                  <a
                    class="nav-link anchor"
                    href="#git_in_touch"
                    onClick={() => {
                      handleShowInvite();
                    }}
                  >
                    Profile
                  </a>
                ) : (
                  <a
                    class="nav-link anchor"
                    href="#git_in_touch"
                    onClick={() => {
                      handleLogin();
                      setShowMembership(true);
                    }}
                  >
                    Login
                  </a>
                )}
                {/* <a class="nav-link anchor" href="#git_in_touch">
                  Join
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
