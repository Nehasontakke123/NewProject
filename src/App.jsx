import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import JewelleryCategory from "../src/components/jewelleryCategory";
import HomePage from './pages/HomePage';
import DiamondJewellery from './components/DiamondJewellery';
import GoldJewellery from './components/GoldJewellery';
import OurCollection from './components/OurCollection';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Navbar/>
      <JewelleryCategory/>
      <HomePage/>
      <DiamondJewellery/>
      <GoldJewellery/>
      <OurCollection/>
      <Footer/>
    </>
  )
}

export default App
