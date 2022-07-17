import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";

import MembershipModal from "./components/Home/modal/Membership";
import Invite from "./components/Home/modal/Invite";

import About from "./components/About";
import BlockChain from "./components/Pages/BlockChain";
import Carbon from "./components/Pages/Carbon";
import Climate from "./components/Pages/Climate";
import Emission from "./components/Pages/Emission";
import HowitWorks from "./components/Pages/HowitWorks";
import Team from "./components/Pages/Team";

function App(props) {
  const [showMembership, setShowMembership] = useState(false);
  const [login, setLogin] = useState(false);
  const [invite, setInvite] = useState(false);
  const [emailData, setEmailData] = useState("");

  const [scrollY, setScrollY] = useState(0);
  const handleCloseInvite = () => {
    setInvite(false);
  };
  const handleShowInvite = () => setInvite(true);
  const handleClose = () => {
    setShowMembership(false);
    setLogin(false);
  };
  const handleShow = () => setShowMembership(true);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  console.log(props);

  return (
    <Router>
      <ScrollToTop />
      <Header
        setShowMembership={handleShow}
        handleLogin={() => {
          setLogin(true);
        }}
        handleShowInvite={handleShowInvite}
        scrollY={scrollY}
      />
      <Switch>
        <Route exact path="/">
          <Home
            handleShow={handleShow}
            setEmailData={(val) => setEmailData(val)}
          />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/blockchain">
          <BlockChain />
        </Route>
        <Route path="/carbonCredits">
          <Carbon />
        </Route>
        <Route path="/climateChange">
          <Climate />
        </Route>
        <Route path="/emissions">
          <Emission />
        </Route>
        <Route path="/howitWorks">
          <HowitWorks />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
      </Switch>
      <Footer />

      <MembershipModal
        show={showMembership}
        login={login}
        handleClose={handleClose}
        emailData={emailData}
      />

      <Invite show={invite} handleClose={handleCloseInvite} />
    </Router>
  );
}

export default App;
