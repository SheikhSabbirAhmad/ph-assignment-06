import React from 'react';

const Cart = ({carts}) => {
    console.log(carts);
    return (
    
         <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-[#101727] mb-6">Your Cart</h2>

      <div className="space-y-4">
        {carts.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-xl">
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-[#101727]">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  ${item.price}
                </p>
              </div>
            </div>

            <button className="text-red-500 text-sm font-medium hover:underline hover:text-red-600 cursor-pointer">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Cart;