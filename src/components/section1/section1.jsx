import React from "react";
import { FaPlay } from "react-icons/fa";
import Img from "../../assets/Frame76.png";
import Img1 from "../../assets/Frame77.png";
import Img2 from "../../assets/Frame78.png";
import Img3 from "../../assets/Frame79.png";
import Video from "../../assets/video.mp4";
import { IoCaretBackCircle, IoCaretForwardCircleSharp } from "react-icons/io5";

const Section1 = () => {
  return (
    <div className="overflow-hidden relative w-full h-screen  font-poppins">
      <video
        className="absolute inset-0 bg-black w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
      ></video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10  h-full  text-white px-4">
        <div className="flex justify-center">
          <div className="md:mt-32 mt-4 container max-w-[1000px]">
            <div className="flex justify-between items-center">
              <div className="mt-[10rem] md:mt-0">
                <h1 data-aos="zoom-in" className="text-[35px] md:text-[30px] font-bold tracking-wide md:text-start text-center">
                  Building a Thriving New <br></br> York City for Everyone
                </h1>
                <p data-aos="flip-up" className="mt-4 text-sm md:text-[16px] max-w-2xl leading-7 md:text-start text-center">
                  Empowering individuals, strengthening communities,{" "}
                  <br className="hidden md:block"></br> and creating
                  opportunities for a better future.
                </p>
                {/* Buttons */}
                <div data-aos="flip-up" className="flex space-x-4 mt-6 justify-center md:justify-normal">
                  <button className="px-6 py-3 bg-transparent border border-primary rounded-md text-sm font-semibold hover:bg-orange-500 text-primary">
                    Join Us
                  </button>
                  <button className="px-6 py-3 bg-primary rounded-md text-sm font-semibold hover:bg-orange-600">
                    Donate
                  </button>
                </div>

                {/* For Mobile Buttons */}
                <div className="flex space-x-2 mt-6 justify-center md:justify-normal  md:hidden">
                  <IoCaretBackCircle className="h-8 w-8 text-[#afafaf]" />
                  <IoCaretForwardCircleSharp className="h-8 w-8 text-[#afafaf]" />
                </div>
              </div>
              {/* Play Button */}
              <div className="mt-10 hidden md:block">
                <button data-aos="zoom-in" className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center hover:bg-orange-600">
                  <FaPlay className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div data-aos="slide-left" className="absolute bottom-0 right-0 py-4 hidden md:block">
        <h3 className="text-white text-sm font-normal text-start mb-4 ml-6">
          Up Next
        </h3>
        <div className="flex overflow-x-auto gap-4 px-6">
          <img
            src={Img}
            alt="Volunteer 1"
            className="w-56 h-36 rounded-md object-cover"
          />
          <img
            src={Img1}
            alt="Volunteer 2"
            className="w-56 h-36 rounded-md object-cover"
          />
          <img
            src={Img2}
            alt="Volunteer 3"
            className="w-56 h-36 rounded-md object-cover"
          />
          <img
            src={Img3}
            alt="Volunteer 4"
            className="w-56 h-36 rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
