import React from "react";

import About from "./About";
import Rewards from "./Rewards";
import RewardsWork from "./RewardsWork";
import Download from "./Download";
import Request from "./Request";
import Award from "./Award";
import MembershipBenefits from "./MembershipBenefits";
import MembershipPlan from "./MembershipPlan";
import BlockChain from "./BlockChain";
import Achievements from "./Achievements";
import Frequently from "./Frequently";
import Map from "./Map";

export default function Home({ handleShow, setEmailData }) {
  return (
    <>
      <About handleShow={handleShow} />
      <Rewards />
      <RewardsWork />
      <Download />
      <Request
        setShowMembership={handleShow}
        setEmailData={(val) => setEmailData(val)}
      />
      <Award />
      <MembershipBenefits />
      <MembershipPlan setShowMembership={handleShow} />
      <BlockChain />
      <Achievements />
      <Frequently />
      <Map />
    </>
  );
}
