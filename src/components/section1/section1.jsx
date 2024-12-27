import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Video from "../../assets/video.mp4";
import Video1 from "../../assets/video1.mp4";
import Video2 from "../../assets/video2.mp4";
import Video3 from "../../assets/video3.mp4";
import Video4 from "../../assets/video4.mp4";
import { IoCaretBackCircle, IoCaretForwardCircleSharp } from "react-icons/io5";

const Section1 = () => {
  const [currentVideo, setCurrentVideo] = useState(Video);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [Video, Video1, Video2, Video3, Video4];

  const handleVideoChange = (index) => {
    setCurrentVideo(videos[index]);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    handleVideoChange(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    handleVideoChange(nextIndex);
  };

  return (
    <div className="overflow-hidden relative w-full h-screen font-poppins">
      <video
        className="absolute inset-0 bg-black w-full h-full object-cover"
        src={currentVideo}
        autoPlay
        loop
        muted
      ></video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 h-full text-white px-4">
        <div className="flex justify-center">
          <div className="md:mt-32 mt-4 container max-w-[1000px]">
            <div className="flex justify-between items-center">
              <div className="mt-[10rem] md:mt-0">
                <h1
                  data-aos="zoom-in"
                  className="text-[35px] md:text-[30px] font-bold tracking-wide md:text-start text-center"
                >
                  Building a Thriving New <br></br> York City for Everyone
                </h1>
                <p
                  data-aos="flip-up"
                  className="mt-4 text-sm md:text-[16px] max-w-2xl leading-7 md:text-start text-center"
                >
                  Empowering individuals, strengthening communities, <br className="hidden md:block"></br> and creating
                  opportunities for a better future.
                </p>
                {/* Buttons */}
                <div
                  data-aos="flip-up"
                  className="flex space-x-4 mt-6 justify-center md:justify-normal"
                >
                  <button className="px-6 py-3 bg-transparent border border-primary rounded-md text-sm font-semibold hover:bg-orange-500 text-primary">
                    Join Us
                  </button>
                  <button className="px-6 py-3 bg-primary rounded-md text-sm font-semibold hover:bg-orange-600">
                    Donate
                  </button>
                </div>

                {/* For Mobile Buttons */}
            
                 <div className="flex space-x-2 mt-6 justify-center md:justify-normal md:hidden relative z-[999]">
                  <IoCaretBackCircle 
                    className="h-8 w-8 text-[#afafaf] cursor-pointer" 
                    onClick={handlePrev} 
                  />
                  <IoCaretForwardCircleSharp 
                    className="h-8 w-8 text-[#afafaf] cursor-pointer" 
                    onClick={handleNext} 
                  />
                </div>
              </div>
              {/* Play Button */}
              <div className="mt-10 hidden md:block">
                <button
                  data-aos="zoom-in"
                  className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center hover:bg-orange-600"
                >
                  <FaPlay className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Carousel Section */}
      <div
        data-aos="slide-left"
        className="absolute bottom-0 right-0 py-4 hidden md:block z-[999] w-[300px]"
      >
        <h3 className="text-white text-sm font-normal text-start mb-4 ml-6">
          Up Next
        </h3>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          className="px-6 z-44"
          onChange={handleVideoChange}
        >
          {videos.map((video, index) => (
            <div className="flex justify-end" key={index} onClick={() => handleVideoChange(index)}>
              <video className="w-56 h-36 rounded-md object-cover" src={video} muted />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Section1;