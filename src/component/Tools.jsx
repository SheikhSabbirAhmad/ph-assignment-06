import React from 'react';
import { use } from 'react';

const Tools = ({dataPromise}) => {
    const tools = use(dataPromise)
    console.log(tools)
    return (
        <div className="">

            <div className='py-20 max-w-7xl mx-auto px-4'>

            {/* Header */}
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold mb-3 text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-gray-500 max-w-2xl mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {tools.map(tool => (
                    <div key={tool.id} className="bg-white rounded-2xl shadow-md p-6 relative hover:shadow-xl transition">

                        {/* Tag */}
                        <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
                            ${tool.tagType === 'popular' && 'bg-purple-100 text-purple-600'}
                            ${tool.tagType === 'new' && 'bg-green-100 text-green-600'}
                            ${tool.tagType === 'best-seller' && 'bg-orange-100 text-orange-600'}
                        `}>
                            {tool.tag}
                        </span>

                        {/* Icon */}
                        <div className="text-4xl mb-4 w-18 h-18 flex items-center justify-center  bg-gray-100 rounded-full">{tool.icon}</div>

                        {/* Title */}
                        <h2 className="text-[#101727] text-xl font-bold mb-2">{tool.name}</h2>

                        {/* Description */}
                        <p className="text-gray-500 text-sm mb-4">
                            {tool.description}
                        </p>

                        {/* Price */}
                        <h3 className="text-2xl font-bold mb-4">
                            ${tool.price}
                            <span className="text-gray-400 text-sm font-normal">
                                /{tool.period}
                            </span>
                        </h3>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                            {tool.features.map((feature, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                                    <span className="text-green-500">✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button className="btn w-full py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold hover:opacity-90 transition">
                            Buy Now
                        </button>

                    </div>
                ))}
            </div>
        </div>
        </div>
        
    );
};

export default Tools;