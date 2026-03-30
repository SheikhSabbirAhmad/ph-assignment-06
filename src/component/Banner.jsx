import React from 'react';
import BannerImage from "../assets/banner.png";
import { CiPlay1 } from 'react-icons/ci';
import { FaRegDotCircle } from 'react-icons/fa';

const Banner = () => {
    return (
<div>
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left*/}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  text-sm font-medium px-5 py-2 rounded-full">
            <FaRegDotCircle></FaRegDotCircle><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-[#627382] max-w-lg">
           Access premium AI tools, design assets, templates, and productivity
           software—all in one place. Start creating faster today. Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              Explore Products
            </button>

            <button className="btn btn-outline btn-primary rounded-full">
                <CiPlay1></CiPlay1> Watch Demo
            </button>
          </div>
        </div>


        {/* Right*/}

            <div className="flex justify-center lg:justify-end">
          <div>
            <img
              className="h-130 w-auto object-contain drop-shadow-lg rounded-xl"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
</div>
    );
};

export default Banner;