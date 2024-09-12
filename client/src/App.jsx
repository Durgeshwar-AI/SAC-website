import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroBanner from './Components/HeroBanner'
import HeroText from './Components/HeroText'
import Features from './Components/Features'
import AboutSection from './Components/About'
import PortfolioSection from './Components/Portfolio'
import Team from './Components/Team'
import Testimonial from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <HeroText/>
      <Features/>
      <AboutSection/>
      <PortfolioSection/>
      <Team/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
