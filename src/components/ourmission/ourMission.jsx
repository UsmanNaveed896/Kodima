import React from "react";

const OurMission = () => {
  return (
    <div className="relative ">
      <div className="relative h-[80vh] text-white">
        {/* Background video */}
        <video
          src="https://s3-figma-videos-production-sig.figma.com/video/894162429031933830/TEAM/edec/c8e0/-a387-4028-a2b5-f594d997340d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YpeVtv0pefTo0rf26elaV3RFt4hcRs~h2YBcLgC74YHMG2PWgQmCnOAErL2qou1uDmk9y6S7Xss8I55SwFBqRV0RZV6MA-hAREqWvvTh-ccq2Q13i1cxJUlwJQjJtKLed4YzHuEUV89oI4wIp2ApMUy6Lao6ZprhJ~ND3Zgqf8Mhz4rojVK~VdqkkTnnBglQTgHOXAFUOxZvmQ5cOEg5zWt6rxN03QF6YXbuXLNkd8849jWfw0dSxTJsDSYT50sdkQroGrUBWFDXYt8ZNunavJmVQyZhkX1WaXfWbn~JOrK7YMsXJgJydjJ~JuIoQS4Tsm1hvpEu5XGyWFkc0awxHQ__"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="your-video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for color and content */}
        <div className="absolute inset-0 bg-[#0d9dae] bg-opacity-80"></div>
        {/* Mission text content */}
        <div className="flex justify-center">
          <div className="container max-w-[900px]">
            <div className="flex justify-center">
              <div className="lines relative z-10 ">
                <div className="h-[94px] w-[5px] bg-[#85eaf6] "></div>
              </div>
              <div className="relative z-10 flex gap-32 top-[160px]">
                <h2 className="text-5xl font-bold mb-6">
                  Our <br></br> Mission
                </h2>
                <p className="text-2xl">
                  We are dedicated to empowering <br></br> underserved
                  communities across New <br></br> York City by providing access
                  to <br></br> education, resources, and opportunities.<br></br>
                  Our mission is to foster an inclusive city <br></br> where
                  every individual can thrive,<br></br> regardless of their
                  background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines  flex justify-end">
        <div className="w-[600px] h-[5px] bg-[#85eaf6] absolute top-12"></div>
      </div>
    </div>
  );
};

export default OurMission;
