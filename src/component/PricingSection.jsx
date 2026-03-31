import React from 'react';

const PricingSection = () => {
    return (
        <div>
            <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#101727] mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#627382] mb-12">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-6 text-left shadow-sm hover:-translate-y-2 transition duration-300">
        <h3 className="text-lg font-semibold mb-1 text-[#101727]">Starter</h3>
            <p className="text-[#627382] text-sm mb-4">
              Perfect for getting started
            </p>

            <h2 className="text-3xl font-bold mb-4">
              $0 <span className="text-sm text-gray-500">/Month</span>
            </h2>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>✓ Access to 10 free tools</li>
              <li>✓ Basic templates</li>
              <li>✓ Community support</li>
              <li>✓ 1 project per month</li>
            </ul><br /><br />

            <button className="btn w-full py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl p-6 text-left text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md hover:-translate-y-2 transition duration-300">
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-100 text-xs px-3 py-1 rounded-full text-yellow-800">
              Most Popular
            </span>

            <h3 className="text-lg font-semibold mb-1 text-white">Pro</h3>
            <p className="text-sm mb-4 opacity-90">
              Best for professionals
            </p>

            <h2 className="text-3xl font-bold mb-4">
              $29 <span className="text-sm opacity-80">/Month</span>
            </h2>

            <ul className="text-sm space-y-2 mb-6">
              <li>✓ Access to all premium tools</li>
              <li>✓ Unlimited templates</li>
              <li>✓ Priority support</li>
              <li>✓ Unlimited projects</li>
              <li>✓ Cloud sync</li>
              <li>✓ Advanced analytics</li>
            </ul>

            <button className="btn w-full py-2 rounded-full bg-white text-purple-600 font-medium">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-6 text-left shadow-sm hover:-translate-y-2 transition duration-300">
            <h3 className="text-lg font-semibold mb-1 text-[#101727]">Enterprise</h3>
            <p className="text-[#627382] text-sm mb-4">
              For teams and businesses
            </p>

            <h2 className="text-3xl font-bold mb-4">
              $99 <span className="text-sm text-gray-500">/Month</span>
            </h2>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>✓ Everything in Pro</li>
              <li>✓ Team collaboration</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
              <li>✓ SLA guarantee</li>
              <li>✓ Custom branding</li>
            </ul>

            <button className="btn w-full py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default PricingSection;