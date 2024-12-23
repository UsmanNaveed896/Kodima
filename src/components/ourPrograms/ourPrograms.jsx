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
import Img11 from "../../assets/1.png";
import Img12 from "../../assets/2.png";
import Img13 from "../../assets/3.png";

import { FaGreaterThan } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const OurPrograms = () => {
  return (
    <div className="main bg-[#28292d] md:p-12 p-6 overflow-hidden">
      <div className="flex justify-center">
        <div className="container max-w-[1000px]">
          <div data-aos="fade-right" className="headings text-white mt-12 md:mt-0">
            <h2 className="text-4xl font-bold text-center md:text-start">
              Our Programs
            </h2>
            <p className="md:text-[20px] text-[16px] mt-5 text-center md:text-start">
              Decisioning platforms can help you make decisions faster{" "}
              <br className="hidden md:block"></br> than ever before—and often
              with less effort—by giving you{" "}
              <br className="hidden md:block"></br> access to all of your
              current data in one place so that it's{" "}
              <br className="hidden md:block"></br> easy to find what you need
              when it's needed most!
            </p>
          </div>
          <div  data-aos="flip-up" className=" hidden md:flex gap-2 mt-7 ">
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

          <div  data-aos="flip-up" className=" hidden md:flex gap-2 mt-7 ">
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

          <div  data-aos="flip-up" className=" hidden md:flex gap-2 mt-7 ">
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

          <div  data-aos="flip-up" className=" hidden md:flex gap-2 mt-7 ">
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

          {/* FOR Mobile */}
          <div className="md:hidden block">
            <div className="flex flex-col gap-5 mt-12">
              <div>
                <img  data-aos="flip-up"  src={Img11} alt="mobile" />
              </div>
              <div  data-aos="zoom-in" className="text-white">
                <h1 className="text-center font-semibold">
                  Community Education:
                </h1>
                <p className="text-center mt-2">
                  Providing after-school support, adult literacy programs, and
                  skill-building workshops.
                </p>
                <h1 className="font-bold underline text-xl text-center mt-8">
                  Learn More
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-12">
              <div>
                <img data-aos="flip-up" src={Img12} alt="mobile" />
              </div>
              <div  data-aos="zoom-in" className="text-white">
                <h1 className="text-center font-semibold">
                  Health & Wellness:
                </h1>
                <p className="text-center mt-2">
                  Connecting communities with essential healthcare services,
                  mental wellness resources, and nutritious food.
                </p>
                <h1 className="font-bold underline text-xl text-center mt-8">
                  Learn More
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-12">
              <div>
                <img  data-aos="flip-up" src={Img13} alt="mobile" />
              </div>
              <div data-aos="zoom-in" className="text-white">
                <h1 className="text-center font-semibold">
                  Economic Empowerment:
                </h1>
                <p className="text-center mt-2">
                  Offering job training, financial literacy, and
                  entrepreneurship initiatives to promote self-sufficiency.
                </p>
                <h1 className="font-bold underline text-xl text-center mt-8">
                  Learn More
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
