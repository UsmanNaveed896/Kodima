import React from "react";
import Img from "../../assets/Group.png";
import Img1 from "../../assets/image2.png";
import Img2 from "../../assets/image35.png";
import Img3 from "../../assets/mobileGroup.png";

const MakeDifference = () => {
  return (
    <div
      className="main pb-12 md:pb-0"
      style={{
        backgroundImage: `url(${Img2})`,
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center",
      }}
    >
      {/* FOR MOBILE */}
      <div className="block md:hidden">
        <img className=" w-full" src={Img3} alt="mobile" />
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 items-center md:p-0 px-6 py-1">
        <div className="col-span-3 hidden md:block ">
          <img className="" src={Img} alt="image" />
        </div>
        <div className="col-span-6 ">
          <div className="flex justify-center">
            <div>
              <h1 className="text-center md:text-5xl text-2xl font-bold text-white ">
                How You Can <br className="hidden md:block"></br> Make a
                Difference
              </h1>
              <div className="md:hidden flex justify-center mt-5">
                <img className="h-[400px] w-full" src={Img1} alt="mobile" />
              </div>
              <div className="flex gap-2 text-white items-end mt-5">
                <span className="font-bold text-[24px]">01</span>{" "}
                <p className="uppercase text-white text-[14px] mt-5">
                  <span className="font-semibold">VOLUNTEER:</span>{" "}
                  Volunteer:Join our team and be part of the change.
                </p>
              </div>
              <div className="flex gap-2 text-white items-center mt-5">
                <span className="font-bold text-[24px]">02</span>{" "}
                <p className="uppercase text-white text-[14px] mt-3">
                  <span className="font-bold">partner with us:</span>{" "}
                  Collaborate with us to create sustainable <br></br> community
                  projects.
                </p>
              </div>
              <div className="flex gap-2 text-white items-center mt-5">
                <span className="font-bold text-[24px]">03</span>{" "}
                <p className="uppercase text-white text-[14px] mt-3 font-normal">
                  <span className="font-bold">Donate:</span> Your support helps
                  us expand our reach and <br></br> impact more
                </p>
              </div>
              <div className="flex justify-center md:flex-row flex-col gap-4 mt-6">
                <button className="px-6 py-3 bg-transparent border border-white rounded-md text-sm font-semibold hover:border-2 text-white">
                  Join Us
                </button>
                <button className="px-6 py-3 border bg-white rounded-md text-sm font-semibold hover:border-orange-600 text-primary">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 hidden md:block ">
          <img className="rotate-180 hidden md:block " src={Img} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default MakeDifference;
