import React, { useEffect, useState } from 'react'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Gallery />
          <Contact />
          <Footer/>
        </>
      )}
    </>
  )
}

export default App
