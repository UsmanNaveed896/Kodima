import React from "react";
import Img from "../../assets/Group3.png";
import Img1 from "../../assets/Frame 2.png";
import Img2 from "../../assets/Frame 7.png";
import Img3 from "../../assets/Frame 8.png";
import Img4 from "../../assets/Frame 9.png";
import Img5 from "../../assets/Frame 10.png";

const Gallery = () => {
  return (
    <div className="main bg-primary pb-12">
      <div className="flex justify-end relative">
        <img className="absolute z-0 h-[400px] opacity-50" src={Img} alt="abc" />
      </div>
      <div className="flex justify-center">
        <div className="container max-w-[1000px] relative z-9">
          <div className="flex justify-center mt-12">
            <div>
              <h1 className="text-center text-5xl font-bold text-white ">
                Gallery
              </h1>
              <p className="py-4 text-white">That they cannot foresee the pain and trouble that are bound to ensue; and equal.</p>
            </div>
          </div>
          <div className="flex justify-center mt-16 gap-2">
            <div className="">
              <img className="h-[400px] " src={Img1} alt="image" />
            </div>
            <div className="">
              <div className="flex gap-2">
                <img className="h-[200px]" src={Img2} alt="image" />
                <img className="h-[200px]" src={Img3} alt="image" />
              </div>
              <div className="flex gap-2">
                <img className="h-[200px]" src={Img4} alt="image" />
                <img className="h-[200px]" src={Img5} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
