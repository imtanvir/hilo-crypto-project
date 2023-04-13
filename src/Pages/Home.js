import React from "react";
import CoFounderTalk from "../Components/HomePage/CoFounderTalk";
import EasyToBuy from "../Components/HomePage/EasyToBuy";
import GameReffaralReward from "../Components/HomePage/GameReffaralReward";
import HiloTokens from "../Components/HomePage/HiloTokens";
import PremiumBenifits from "../Components/HomePage/PremiumBenifits";
import PurchaseBonus from "../Components/HomePage/PurchaseBonus";
import SmartContract from "../Components/HomePage/SmartContract";
import StakingSection from "../Components/HomePage/StakingSection";
import UpperHero from "../Components/HomePage/UpperHero";
import VipInvestorsBenifits from "../Components/HomePage/VipInvestorsBenifits";
import WhatIsHiloGame from "../Components/HomePage/WhatIsHiloGame";
import WhitepaperSection from "../Components/HomePage/WhitepaperSection";
import WhyHiloSection from "../Components/HomePage/WhyHiloSection";
import Footer from "../Components/Shared/Footer";
import DrawerComp from "../Components/Shared/DrawerComp";
import { Container } from "react-bootstrap";
import Roadmap from "../Components/HomePage/Roadmap";
import Tokenomics from "../Components/HomePage/Tokenomics";
import Proceeds from "../Components/HomePage/Proceed";
import '../index.css'
const Home = () => {
  return (
    <>
      <DrawerComp className="tanvir">
        <div className="home-div">
          {/* <Container> */}

          <UpperHero />
          <HiloTokens />
          <WhatIsHiloGame />
          <GameReffaralReward />
          <WhyHiloSection />
          <PremiumBenifits />
          <VipInvestorsBenifits />
          <Tokenomics></Tokenomics>
          <Proceeds />
          <StakingSection />
          <PurchaseBonus />
          <WhitepaperSection />
          <EasyToBuy />
          <Roadmap></Roadmap>
          <CoFounderTalk />
          <SmartContract />
          <Footer />
          {/* </Container> */}
        </div>
      </DrawerComp>
    </>
  );
};

export default Home;
