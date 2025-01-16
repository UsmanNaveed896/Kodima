import { useEffect, useState } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animations should only happen once
      offset: 200, // Trigger animations earlier or later (in px)
    });
  }, []);
  return (
    <>
      <div className="flex justify-center mt-16">
        <div>
          <h1 className="text-4xl font-bold text-red-600 uppercase text-center bg-gray-100 p-4 border-t-4 border-red-700 shadow-lg rounded-md">
            No Website? Please Clear Developer Dues!
          </h1>
        </div>
        {/* <Header />
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
        <Footer/> */}
      </div>
    </>
  );
}

export default App;
