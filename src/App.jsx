import './App.css'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import StateSection from './component/StateSection'
import ReadySection from './component/ReadySection'
import GetStartedSection from './component/GetStartedSection'
import PricingSection from './component/PricingSection'
import Tools from './component/Tools'
import Cart from './component/Cart'
import { useState } from 'react'

const getData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const dataPromise = getData();

function App() {
   const [activeTab, setActiveTab] = useState("product");
   const [carts, setCarts] = useState([]);
   console.log(carts);

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <StateSection></StateSection>

    {/* Tab..... */}
    <div>
            {/* Header */}
            <div className='text-center mb-12 mt-12'>
                <h2 className='text-4xl font-bold mb-3 text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-gray-500 max-w-2xl mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-box justify-center bg-white shadow-none">
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={() => setActiveTab("product")} defaultChecked/>
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart(2)" onClick={() => setActiveTab("cart")} />
            </div>
            
      </div>
    
    {/* <Tools dataPromise={dataPromise}></Tools> */}

    
    
    {activeTab === "product" && <Tools dataPromise={dataPromise} carts={carts} setCarts={setCarts}></Tools>}
    {activeTab === "cart" && <Cart carts={carts}></Cart>}


     {/* <Cart></Cart> */}
    <GetStartedSection></GetStartedSection>
    <PricingSection></PricingSection>
    <ReadySection></ReadySection>
    <Footer></Footer>
      
    </>
  )
}

export default App
