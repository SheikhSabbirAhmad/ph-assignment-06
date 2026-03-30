import React from 'react';

const ReadySection = () => {
    return (
        <div>
             <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h1>
        <p className="text-sm md:text-base text-gray-200 mb-8 max-w-xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>

        <div className="flex items-center justify-center gap-4 mb-4">
          <button className="btn btn-primary bg-white rounded-full text-[#4F39F6] hover:bg-green-300">
            Explore Products
          </button>
          <button className="btn btn-outline btn-primary rounded-full text-white px-5">
            View Pricing
          </button>
        </div>

        <p className="text-xs text-gray-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
        </div>
    );
};

export default ReadySection;