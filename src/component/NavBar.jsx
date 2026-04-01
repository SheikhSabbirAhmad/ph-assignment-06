import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = ({carts}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm py-2 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          <h2>DigiTools</h2>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-[#101727] font-semibold">
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
                <div className="relative cursor-pointer">
                    <FiShoppingCart size={24} />
                    <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                        {carts.length}
                    </span>
                </div>
        <h3 className='text-[#101727] font-semibold'>Login</h3>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4 rounded-full text-white">Get Started</a>
      </div>
    </div>
    );
};

export default NavBar;