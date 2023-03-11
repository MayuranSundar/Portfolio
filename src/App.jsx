import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Background from './components/background/Background'
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Background />
      <Portfolio />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App