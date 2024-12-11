import React from "react";
import Img from "../../assets/image22.png";
import Img1 from "../../assets/image23.png";
import Logo from "../../assets/Frame.png";
const Header = () => {
  return (
    <nav
      className="flex justify-between items-center font-poppins"
      style={{
        background:
          "linear-gradient(143deg, rgba(20,192,203,1) 0%, rgba(0,51,69,1) 98%, rgba(0,58,76,1) 100%)",
      }}
    >
      {/* Left Section: Hamburger Menu */}
      <div className="text-white text-2xl cursor-pointer flex items-center">
        <img className="h-[60px] " src={Img} alt="header-log" />
        <div className="space-y-1">
          <span className="block w-4 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Center Section: Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Kadima Logo" className="h-8 mr-2" />
      </div>

      {/* Right Section: Donate Button */}
      <div className="flex items-center">
        <button className="bg-[#f95f2a] text-white px-4 py-2 rounded-lg hover:bg-orange-600 poppins text-[12px] font-semibold">
          Donate
        </button>
        <img className="h-[60px] " src={Img1} alt="header-log" />
      </div>
    </nav>
  );
};

export default Header;
