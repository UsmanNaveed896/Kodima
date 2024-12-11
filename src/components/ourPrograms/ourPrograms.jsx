import React from "react";
import Img from "../../assets/image24.png";
import Img1 from "../../assets/image25.png";
import Img2 from "../../assets/image26.png";
import Img3 from "../../assets/image27.png";
import Img4 from "../../assets/image28.png";
import Img5 from "../../assets/image29.png";
import Img6 from "../../assets/image30.png";
import Img7 from "../../assets/image31.png";
import Img8 from "../../assets/image32.png";
import Img9 from "../../assets/image33.png";
import Img10 from "../../assets/image34.png";

import { FaGreaterThan } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const OurPrograms = () => {
  return (
    <div className="main bg-[#28292d] p-12">
      <div className="flex justify-center">
        <div className="container max-w-[1000px]">
          <div className="headings text-white">
            <h2 className="text-4xl font-bold">Our Programs</h2>
            <p className="text-[20px] mt-5">
              Decisioning platforms can help you make decisions faster <br></br>{" "}
              than ever before—and often with less effort—by giving you{" "}
              <br></br> access to all of your current data in one place so that
              it's <br></br> easy to find what you need when it's needed most!
            </p>
          </div>
          <div className="flex gap-2 mt-7 ">
            <div>
              <img src={Img} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Low Income Immigrants</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <img src={Img1} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Civic Engagement</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <img src={Img2} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Youth Empowerment</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-7 ">
            <div>
              <img src={Img3} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Health Care Program</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <img src={Img4} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Health Care Program</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <img src={Img5} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Muslim Coalition</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-7 ">
            <div>
              <img src={Img6} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Immigration</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <img src={Img7} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Education For ALL</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <img src={Img8} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Digital Literacy</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-7 ">
            <div>
              <img src={Img9} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Interfaith Harmony</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <img src={Img10} alt="image" />
              <div className="flex justify-between items-center px-4 pb-2 mt-[-30px] text-white">
                <p>Translation Services</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
