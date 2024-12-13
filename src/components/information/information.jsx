import React from "react";
import Img from "../../assets/Group3.png";
import Img1 from "../../assets/image37.png";

const Information = () => {
  return (
    <div className="main md:bg-primary bg-[#28292d] pb-12">
      <div className="flex justify-end relative">
        <img
          className="absolute z-0 h-[400px] opacity-50 md:flex hidden"
          src={Img}
          alt="abc"
        />
      </div>
      <div className="flex justify-center">
        <div className="container max-w-[1000px] relative z-9 px-6 md:px-0">
          <div className="flex justify-center mt-12">
            <div>
              <h1 className="text-center md:text-5xl text-4xl font-bold text-white ">
                Information is Beautiful
              </h1>
              <p className="py-4 text-white text-center">
                Lorem ipsum dolor sit amet consectetur. Nec ultricies consequat
                at vehicula aliquet tincidunt <br className="md:block hidden"></br> morbi. Ac facilisi cursus lorem
                vitae.Lorem ipsum dolor sit amet consectetur. Nec ultricies <br className="md:block hidden"></br>
                consequat at vehicula aliquet
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-16 gap-2">
            <div className="">
              <img className="" src={Img1} alt="image" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
