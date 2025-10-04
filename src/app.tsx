import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SpecialOffer from './components/SpecialOffer'
import TestimonialSlider from './components/TestimonialSlider'
import ImageGallery from './components/ImageGallery'
import ServiceFeatures from './components/ServiceFeatures'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './app.css'

export function App(): preact.JSX.Element {

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <SpecialOffer />
        <TestimonialSlider />
        <ImageGallery />
        <ServiceFeatures />
        <Footer />
        <BackToTop />
        hello
      </div>
    </>
  )
}
