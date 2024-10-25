import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'



function App() {
  return (
    <>
    <Hero/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default App
