
import { FaInstagram } from 'react-icons/fa'
import './App.css'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import StateSection from './component/StateSection'
import ReadySection from './component/ReadySection'
import GetStartedSection from './component/GetStartedSection'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <StateSection></StateSection>
    <GetStartedSection></GetStartedSection>
    <ReadySection></ReadySection>
    <Footer></Footer>
      
    </>
  )
}

export default App
