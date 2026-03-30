import React from 'react';
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png"
import rocketImg from "../assets/rocket.png"

const GetStartedSection = () => {
    return (
        <div>
             <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#101727] mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382] mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm text-center">
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              01
            </span>

            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
                <img src={userImg} alt="user" className="w-10 h-10" />
            </div>

            <h3 className="font-semibold text-lg mb-2 text-[#101727]">Create Account</h3>
            <p className="text-[#627382] text-sm">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm text-center">
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              02
            </span>

              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
                <img src={packageImg} alt="user" className="w-10 h-10" />
            </div>

            <h3 className="font-semibold text-lg mb-2 text-[#101727]">Choose Products</h3>
            <p className="text-[#627382] text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm text-center">
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              03
            </span>

              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
                <img src={rocketImg} alt="user" className="w-10 h-10" />
            </div>

            <h3 className="font-semibold text-lg mb-2 text-[#101727]">Start Creating</h3>
            <p className="text-[#627382] text-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default GetStartedSection;