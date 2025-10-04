
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ServicePage from './pages/ServicePage';
import IndustryPage from './pages/IndustryPage';
import WorkPage from './pages/WorkPage';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';


function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/service/:serviceType" element={<ServicePage />} />
    <Route path="/industry" element={<IndustryPage />} />
    <Route path="/work" element={<WorkPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/blog" element={<BlogPage />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
