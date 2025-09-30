import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
 import NavigationBar from '../components/NavigationBar' 
/* import HeroSection from '../components/HeroSection/HeroSection.jsx' */
import Footer from '../components/Footer'
import './Root.css'

export const Root = () => {
  return (
    <div className="root-layout">
       <NavigationBar /> 
      {/* <HeroSection /> */}
      
      <main className="main-content">
        <br/>
        <Outlet />
        <ScrollRestoration />
      </main>
      
      <Footer />
    </div>
  )
}
