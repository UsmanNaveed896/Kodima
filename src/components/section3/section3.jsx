import React from "react";
import Img from "../../assets/Group.png";
import Img2 from "../../assets/image2.png";
import Img3 from "../../assets/image3.png";
import { FaBox, FaGreaterThan, FaRegThumbsUp } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className=" bg-[#28292d] flex">
      {/* Decorative Pattern */}
      <div className="  w-1/3">
        <img src={Img} alt="Decorative Pattern" className="h-[720px]" />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-evenly lg:items-start gap-6">
        {/* Image Section */}
        <div className="relative ">
          <div className="relative z-0 top-[160px] left-[-154px]">
            <img
              src={Img2}
              alt="Volunteers"
              className="rounded-lg shadow-lg h-[400px]"
            />
          
          </div>
          <div className="absolute bottom-0 left-[-30px] top-[330px] transform translate-x-10 translate-y-10 z-10">
            <img
              src={Img3}
              alt="Volunteers"
              className="rounded-lg shadow-lg h-[250px] "
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-white space-y-6 mt-32">
          <h2 className="text-4xl font-bold">Who We Are</h2>
          <p className="text-[16px]">
            Our non-profit is committed to serving the people of New York City
            by addressing systemic challenges and providing sustainable
            solutions. We work in collaboration with local organizations, city
            leaders, and passionate volunteers to create a lasting impact.
          </p>

          {/* Stats Section */}
          <div className="">
            <div className="flex items-center space-x-4">
              <div className=" border rounded-full p-4 border-gray-400">
                <FaRegThumbsUp className="h-5 w-5" />
              </div>
              <div>
                <div className="text-4xl font-bold">875+</div>
                <div className="text-[14px] text-[#abb2c3]">Projects Done</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-5">
              <div className=" border rounded-full p-4 border-gray-400">
                <FaBox className="h-5 w-5" />
              </div>
              <div>
                <div className="text-4xl font-bold">320+</div>
                <div className="text-[14px] text-[#abb2c3]">
                  Products Created
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Pattern Right */}
      {/* <div className="absolute top-0 right-0 h-full w-1/3">
        <img
          src="decorative-pattern-right.png"
          alt="Decorative Pattern"
          className="h-full w-full object-cover"
        />
      </div> */}
    </div>
  );
};

export default Section3;
