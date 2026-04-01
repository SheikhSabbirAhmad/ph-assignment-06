import React from 'react';

const Cart = ({carts, setCarts}) => {
    
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([])
  }

  const handleDelete = (item) => {
    const filteredArray = carts.filter(c => c.id !== item.id);
    setCarts(filteredArray)
  }
    return (
    
         <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-[#101727] mb-6">Your Cart</h2>

      {
        carts.length === 0 ? <p className='text-center text-4xl font-bold pt-20'>Cart is empty!!</p> : 
        <>
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

            <button onClick={() => handleDelete(item)} className="text-red-500 text-sm font-medium hover:underline hover:text-red-600 cursor-pointer">
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-between text-xl bg-gray-200 rounded-xl p-5 mt-5'>
        <p>Total:</p>
        <p className='text-black font-bold'>$ {totalPrice}</p>
      </div>

      {/* Button */}
      <div>
        <button onClick={handlePayment} className='btn w-full mt-5 rounded-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xl'>Proceed To Checkout</button>
      </div>
        </>
      }

 
    </div>
    );
};

export default Cart;