import React from "react";
import Img from "../../assets/Group3.png";
import Img1 from "../../assets/Frame 2.png";
import Img2 from "../../assets/Frame 7.png";
import Img3 from "../../assets/Frame 8.png";
import Img4 from "../../assets/Frame 9.png";
import Img5 from "../../assets/Frame 10.png";

const Gallery = () => {
  return (
    <div className="main md:bg-primary bg-[#28292d] pb-12 overflow-hidden">
      <div className="md:flex hidden justify-end relative ">
        <img
          className="absolute z-0 h-[400px] opacity-50"
          src={Img}
          alt="abc"
        />
      </div>
      <div className="flex justify-center">
        <div className="container max-w-[1000px] relative z-9">
          <div className="flex justify-center mt-12">
            <div  data-aos="zoom-in">
              <h1 className="text-center text-5xl font-bold text-white ">
                Gallery
              </h1>
              <p className="py-4 text-white text-center md:text-start">
                That they cannot foresee the pain and trouble that are bound to
                ensue; and equal.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-16 md:gap-2 gap-6 md:flex-row flex-col">
            <div className="md:block flex justify-center">
              <img data-aos="flip-up" className="h-[400px] " src={Img1} alt="image" />
            </div>
            <div className="">
              <div className="flex md:gap-2 gap-6 flex-col md:flex-row">
                <div className="md:block flex justify-center">
                  <img
                  data-aos="flip-up"
                    className="md:h-[200px] h-[400px] w-[80%] md:w-full"
                    src={Img2}
                    alt="image"
                  />
                </div>
                <div className="md:block flex justify-center">
                  <img
                  data-aos="flip-up"
                    className="md:h-[200px] h-[400px] w-[80%] md:w-full"
                    src={Img3}
                    alt="image"
                  />
                </div>
              </div>
           
            <div className="flex md:gap-2 gap-6 flex-col md:flex-row mt-5 md:mt-0">
              <div className="md:block flex justify-center">
                <img
                data-aos="flip-up"
                  className="md:h-[200px] h-[400px] w-[80%] md:w-full"
                  src={Img4}
                  alt="image"
                />
              </div>
              <div className="md:block flex justify-center">
                <img
                data-aos="flip-up"
                  className="md:h-[200px] h-[400px] w-[80%] md:w-full"
                  src={Img5}
                  alt="image"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
