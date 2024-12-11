import { useState } from "react";
import Header from "./components/header/header";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import OurMission from "./components/ourmission/ourMission";
import OurVision from "./components/ourVision/ourVision";
import OurPrograms from "./components/ourPrograms/ourPrograms";
import MakeDifference from "./components/makeDifference/makeDifference";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/contact";
import Information from "./components/information/information";
import DonateNow from "./components/donateNow/donateNow";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Section1 />
        <Section2/>
        <Section3/>
        <OurMission/>
        <OurVision/>
        <OurPrograms/>
        <MakeDifference/>
        <Gallery/>
        <Contact/>
        <Information/>
        <DonateNow/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
