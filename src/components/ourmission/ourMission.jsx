import React from "react";
import Image from "../../assets/mobileGroup.png";
import Image1 from "../../assets/image2.png";

const OurMission = () => {
  return (
    <div className="relative bg-custom-gradient pb-12 md:pb-0">
      <img
        className="absolute z-10 block md:hidden"
        src={Image}
        alt="mobile-image"
      />
      <div className="relative md:h-[80vh] h-full text-white">
        {/* Background video */}
        <video
          src="https://s3-figma-videos-production-sig.figma.com/video/894162429031933830/TEAM/edec/c8e0/-a387-4028-a2b5-f594d997340d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YpeVtv0pefTo0rf26elaV3RFt4hcRs~h2YBcLgC74YHMG2PWgQmCnOAErL2qou1uDmk9y6S7Xss8I55SwFBqRV0RZV6MA-hAREqWvvTh-ccq2Q13i1cxJUlwJQjJtKLed4YzHuEUV89oI4wIp2ApMUy6Lao6ZprhJ~ND3Zgqf8Mhz4rojVK~VdqkkTnnBglQTgHOXAFUOxZvmQ5cOEg5zWt6rxN03QF6YXbuXLNkd8849jWfw0dSxTJsDSYT50sdkQroGrUBWFDXYt8ZNunavJmVQyZhkX1WaXfWbn~JOrK7YMsXJgJydjJ~JuIoQS4Tsm1hvpEu5XGyWFkc0awxHQ__"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          autoPlay
          loop
          muted
        >
          <source src="your-video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for color and content */}
        <div className="absolute inset-0 bg-[#0d9dae] bg-opacity-80 md:block hidden"></div>
        {/* Mission text content */}
        <div className="flex justify-center">
          <div className="container max-w-[900px]">
            <div className="flex justify-center">
              <div className="lines relative z-10 md:block hidden">
                <div className="h-[94px] w-[5px] bg-[#85eaf6] "></div>
              </div>
              <div className="md:relative static z-10 flex md:flex-row flex-col md:gap-32 gap-2 top-[160px] md:mt-0 mt-32">
                <h2 className="md:text-5xl text-2xl font-bold md:mb-6 md:text-start text-center md:mt-0 mt-5">
                  Our <br className="md:block hidden"></br> Mission
                </h2>
                <p className="md:text-2xl text-sm text-center md:text-start">
                  We are dedicated to empowering <br></br> underserved
                  communities across New <br></br> York City by providing access
                  to <br></br> education, resources, and opportunities.<br></br>
                  Our mission is to foster an inclusive city <br></br> where
                  every individual can thrive,<br></br> regardless of their
                  background.
                </p>
              </div>
            </div>

            {/* FOR MOBILE */}

            <div className="md:relative static md:hidden flex z-10 md:flex-row flex-col md:gap-32 gap-1 top-[20px] md:mt-0 mt-8">
              <h2 className="md:text-5xl text-2xl font-bold md:mb-6 md:text-start text-center md:mt-0 mt-5">
                Our <br className="md:block hidden"></br> Vision
              </h2>
              <p className="md:text-2xl text-sm text-center md:text-start px-12">
                A New York City where all residents, regardless of economic
                status, have the support, resources, and opportunities needed to
                live fulfilling and dignified lives. We envision a future where
                communities work together to uplift one another, and every
                person has the chance to achieve their full potential.
              </p>

              <img className="mt-5 px-6" src={Image1} alt="for Mobile" />
            </div>
          </div>
        </div>
      </div>
      <div className="lines justify-end md:flex hidden">
        <div className="w-[600px] h-[5px] bg-[#85eaf6] absolute top-12"></div>
      </div>
    </div>
  );
};

export default OurMission;
