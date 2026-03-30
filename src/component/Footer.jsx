import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
              <footer className="bg-[#101727] border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-4xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
            </p>

          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div>
                <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
            </div>
           <div className='flex gap-2'>
                 <div className='w-11 h-11 flex items-center justify-center  bg-white rounded-full'>
                <a href="#"><AiFillInstagram className='text-2xl'></AiFillInstagram></a>
                </div> 

                 <div className='w-11 h-11 flex items-center justify-center  bg-white rounded-full'>
                <a href="#"><FaSquareFacebook className='text-2xl'></FaSquareFacebook></a>
                </div> 

                 <div className='w-11 h-11 flex items-center justify-center  bg-white rounded-full'>
                <a href="#"><FaXTwitter className='text-2xl'></FaXTwitter></a>
                </div>
           </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>

          <div>
             <ul className="space-y-4 text-zinc-400 flex gap-4">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;