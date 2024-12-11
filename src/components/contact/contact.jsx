import React from "react";
import Img from "../../assets/Group.png";
import Img1 from "../../assets/Group1.png";
import Img2 from "../../assets/image36.png";
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
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-3">
          <img className=" " src={Img} alt="image" />
        </div>
        <div className="col-span-6 ">
          <div className=" ">
            <div>
              <h1 className="text-center text-5xl font-bold text-white ">
                Get in touch
              </h1>
              <p className="text-center text-white mt-3">
                It is a long established fact that a reader will be distracted
                by the <br></br> readable content of a page when looking at its
                layout. The point of <br></br> using Lorem Ipsum is that it has{" "}
              </p>
              <div className="form mt-8">
                <div className="flex gap-2">
                  <input
                    className="rounded border-[#e5e7eb] w-full p-2 bg-transparent border text-black bg-[#56bbdf] outline-none focus:outline-none"
                    placeholder="Full Name"
                  />
                  <input
                    className="rounded border-[#e5e7eb] w-full p-2 bg-transparent border text-black bg-[#56bbdf] outline-none focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <input
                  className="rounded mt-4 border-[#e5e7eb] w-full p-2 bg-transparent border text-black bg-[#56bbdf] outline-none focus:outline-none"
                  placeholder="Subject"
                />
                <textarea
                  className="rounded mt-4 border-[#e5e7eb] w-full p-2 bg-transparent border text-black bg-[#56bbdf] outline-none focus:outline-none"
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
        <div className="col-span-3">
          <img className="rotate-180" src={Img} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
