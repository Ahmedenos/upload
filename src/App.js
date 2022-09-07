import React from 'react'
import {BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
// import Index from './Components/Index'
import Work from "./Components/Work/index"
import Portfolio from "./Components/Portfolio/index"
import SocialMedia from "./Components/SocialMedia/index"
import Footer from "./Components/Footer/index"
import Profile from "./Components/Profile/index"
import Home from "./Components/Home/index"
import About from "./Components/About/index"
export default function App() {
  return (
    
    
      <BrowserRouter>
      <Navbar />
      <Routes> 
        {/* <Route path ="/"  element={<Index />}/> */}
        <Route path ="/contact" element={<Contact />}/>
       </Routes>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />
   
      </BrowserRouter>
      
    
  )
}

