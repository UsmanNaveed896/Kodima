import React from "react";
import Img from "../../assets/Group.png";
import Img1 from "../../assets/Group1.png";
import Img2 from "../../assets/image36.png";

const DonateNow = () => {
  return (
    <div
      className="main "
      style={{
        backgroundImage: `url(${Img2})`,
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center",
      }}
    >
      <div className="grid md:grid-cols-12 grid-cols-1 items-center md:p-0 p-6">
        <div className="col-span-3 md:block hidden">
          <img className=" " src={Img} alt="image" />
        </div>
        <div className="col-span-6 ">
          <div className=" ">
            <div>
              <h1 className="text-center text-5xl font-bold text-white ">
                Donate now
              </h1>
              <p className="text-center text-white mt-3">
                Lorem ipsum dolor sit amet consectetur. Nec ultricies consequat
                at vehicula <br></br> aliquet tincidunt morbi. Ac facilisi
                cursus lorem vitae.Lorem ipsum dolor sit amet <br></br>{" "}
                consectetur. Nec ultricies consequat at vehicula aliquet
              </p>
              <div className=" mt-8">
                <div className="flex gap-2 justify-center flex-wrap">
                  <div className="bg-white rounded-xl w-[150px] h-[200px] flex flex-col items-center justify-center">
                    <p className="text-4xl font-semibold text-primary">$10</p>
                    <div className="mt-16">
                      <button className="px-4 py-3 border bg-primary rounded-md text-xs font-semibold hover:border-white text-white">
                        Get Started
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl w-[150px] h-[200px] flex flex-col items-center justify-center">
                    <p className="text-4xl font-semibold text-primary">$10</p>
                    <div className="mt-16">
                      <button className="px-4 py-3 border bg-primary rounded-md text-xs font-semibold hover:border-white text-white">
                        Get Started
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl w-[150px] h-[200px] flex flex-col items-center justify-center">
                    <p className="text-4xl font-semibold text-primary">$10</p>
                    <div className="mt-16">
                      <button className="px-4 py-3 border bg-primary rounded-md text-xs font-semibold hover:border-white text-white">
                        Get Started
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl w-[150px] h-[200px] flex flex-col items-center justify-center">
                    <p className="text-4xl font-semibold text-primary">$10</p>
                    <div className="mt-16">
                      <button className="px-4 py-3 border bg-primary rounded-md text-xs font-semibold hover:border-white text-white">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2 w-full mt-5 ">
                  {/* Currency Symbol */}
                  <span className="text-gray-500 text-xl font-medium">$</span>

                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Other Amount"
                    className="flex-1 border-none outline-none text-gray-700 px-2 placeholder-gray-400"
                  />

                  {/* Currency Type */}
                  <span className="text-gray-500 text-sm font-medium px-1 md:px-0">USD</span>

                  {/* Donate Button */}
                  <button className="md:ml-4 ml-0 bg-primary hover:bg-orange-600 text-[14px] text-white font-medium md:px-6 py-2 px-4 rounded-lg">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 col-span-3 md:block hidden">
          <img className="rotate-180" src={Img} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
