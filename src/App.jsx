
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ServicePage from './pages/ServicePage';


function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/service" element={<ServicePage />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
