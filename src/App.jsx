
import './App.css'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import StateSection from './component/StateSection'
import ReadySection from './component/ReadySection'
import GetStartedSection from './component/GetStartedSection'
import PricingSection from './component/PricingSection'
import Tools from './component/Tools'

const getData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const dataPromise = getData();

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <StateSection></StateSection>

    <Tools dataPromise={dataPromise}></Tools>


    
    <GetStartedSection></GetStartedSection>
    <PricingSection></PricingSection>
    <ReadySection></ReadySection>
    <Footer></Footer>
      
    </>
  )
}

export default App
