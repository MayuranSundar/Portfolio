import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <p className="footer__logo">Mayu</p>
      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mayuransundar/" target='_blank' rel='noopener noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/MayuranSundar" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mayuran Sundar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer