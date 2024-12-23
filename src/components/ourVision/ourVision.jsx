import React from "react";

const OurVision = () => {
  return (
    <div className="relative hidden md:block overflow-hidden ">
      <div className="relative h-[80vh] text-white">
        {/* Background video */}
        <video
          src="https://s3-figma-videos-production-sig.figma.com/video/894162429031933830/TEAM/9795/9913/-a7e9-42ba-8a4b-5bdc2c164f3c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rx7CKJGtvY1k4wcPKid-8pWDY1wWh7B3Y7jJC-oLg6RIVN~gh1guhoadBXxMn~1ZgJ6ahta6xOx5zbmy5l3ho~FY9PwzWVfueQzQfwzuOY-G-0VFE9vvMlH56NhXMrw0qN-99meJcXKs6C4Y58-IUADERRV8ecGmDNkSlkJPfMoOFXu58eoEaA6NDF3w2YSGc3CO7nJY9-nScVJ0cq4G75eGbWNeukgkU4exBw6hji9UvvZi4-ZByFBMX9gvHqVVZeOhSz1CzQ7lKd8OCWKt3Dnu6kTLo1HJ7HTnj~933Ob2ADqviLaxBNZmvoMGZye8mRECMs1mNxaG5GJz0SPshw__"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="your-video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for color and content */}
        <div  className="absolute inset-0 bg-primary bg-opacity-80"></div>
        {/* Mission text content */}
        <div className="flex justify-center">
          <div className="container max-w-[900px]">
            <div className="flex justify-center">
              <div data-aos="zoom-in" className="relative z-10 flex gap-32 top-[160px]">
                <p className="text-2xl">
                  A New York City where all residents,<br></br> regardless of economic
                  status, have the <br></br> support, resources, and opportunities <br></br> needed
                  to live  fulfilling and dignified lives.<br></br> We envision a future
                  where communities <br></br> work together to uplift one another, and <br></br>
                  every person has the chance to achieve <br></br> their full potential.
                </p>
                <h2 className="text-5xl font-bold mb-6">
                  Our <br></br> Vision
                </h2>
              </div>
              <div className="lines relative z-10 ">
                <div data-aos="fade-down" className="h-[94px] w-[5px] bg-[#ffcbba] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines  flex justify-start">
        <div data-aos="fade-right" className="w-[600px] h-[5px] bg-[#ffcbba] absolute top-12"></div>
      </div>
    </div>
  );
};

export default OurVision;
