import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import KeywordBar from './components/KeywordBar.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import ProductCategories from './components/ProductCategories.jsx'
import ImageGallery from './components/ImageGallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import LogoStrip from './components/LogoStrip.jsx'
import HealthySection from './components/HealthySection.jsx'
import HistoryTimeline from './components/HistoryTimeline.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Hero/>
    <FeatureSection/>
    <AboutSection/>
    <KeywordBar/>
    <ServicesSection/>
    <ProductCategories/>
    <ImageGallery/>
    <Testimonials/>
    <LogoStrip/>
    <HealthySection/>
    <HistoryTimeline/>
    <Footer/>
  </StrictMode>,
)
