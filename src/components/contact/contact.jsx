import React from "react";
import Img from "../../assets/Group.png";
import Img1 from "../../assets/Group1.png";
import Img2 from "../../assets/image36.png";
import Img3 from "../../assets/image2.png";

const Contact = () => {
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
              <h1 className="text-center md:text-5xl text-4xl font-bold text-white ">
                Get in touch
              </h1>
              <p className="text-center text-white mt-3">
                It is a long established fact that a reader will be distracted
                by the <br className="hidden md:block"></br> readable content of
                a page when looking at its layout. The point of{" "}
                <br className="hidden md:block"></br> using Lorem Ipsum is that
                it has{" "}
              </p>
              <div className="md:hidden flex justify-center mt-5">
                <img className="h-[400px] w-full" src={Img3} alt="mobile" />
              </div>
              <div className="form mt-8">
                <div className="flex gap-2 md:flex-row flex-col">
                  <input
                    className="rounded border-[#e5e7eb] w-full p-2 bg-transparent border text-black bg-[#fff] opacity-60 outline-none focus:outline-none"
                    placeholder="Full Name"
                  />
                  <input
                    className="rounded border-[#e5e7eb] w-full p-2 bg-transparent border text-black bg-[#fff] opacity-60 outline-none focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <input
                  className="rounded mt-4 border-[#e5e7eb] w-full p-2 bg-transparent border text-black bg-[#fff] opacity-60 outline-none focus:outline-none"
                  placeholder="Subject"
                />
                <textarea
                  className="rounded mt-4 border-[#e5e7eb] w-full p-2 bg-transparent border text-black bg-[#fff] opacity-60 outline-none focus:outline-none"
                  placeholder="Subject"
                  rows={4}
                ></textarea>

                <div className="mt-4">
                  <button className="w-full py-3 border bg-white rounded-md text-sm font-semibold hover:border-orange-600 text-primary">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:block hidden">
          <img className="rotate-180" src={Img} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
