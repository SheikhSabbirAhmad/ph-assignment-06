import React from 'react';

const StateSection = () => {
    return (
            <div className="py-12 flex justify-center">
      
      <div className="w-full rounded-xl 
        bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
        text-white flex justify-between items-center px-10 py-8 shadow-lg">

        <div className="text-center flex-1">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-sm opacity-80 mt-2">Active Users</p>
        </div>

        <div className="h-12 w-[1px] bg-white/40"></div>

        <div className="text-center flex-1">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-sm opacity-80 mt-2">Premium Tools</p>
        </div>

        <div className="h-12 w-[1px] bg-white/40"></div>

        <div className="text-center flex-1">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-sm opacity-80 mt-2">Rating</p>
        </div>

      </div>

    </div>
    );
};

export default StateSection;