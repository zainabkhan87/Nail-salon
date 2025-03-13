
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Main from  './components/Main'
import About from './components/About'
import Shop from './components/Shop'
import Headspa from './components/Headspa'
import Reviews from './components/Reviews'
import Appointment from './components/Appointment'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Navbar/>
      <Slider />
      <Main />
      <About />
      <Shop />
      <Headspa />
      <Reviews />
      <Appointment />
      <Footer />
    </>
  )
}

export default App
