import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import MeAnim from '../../assets/me-memoji.png'
import './header.css'


const Header = () => {
  return (
    <section id='header'>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Mayuran Sundar</h1>
          <h5 className="text-light">Software Engineer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={MeAnim} alt="Me" />
          </div>

          <a href="#about" className='scroll__down'>Scroll Down</a>

        </div>
      </header>
    </section>
  )
}

export default Header