import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineAppstore} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {RiContactsLine} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav a");

  console.log(sections)
  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id"); 
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };

  return (
    // <nav>
    //   <a href="#" onClick={() => setActiveNav('#')} 
    //     className={activeNav==='#'?'active':''}>
    //     <AiOutlineHome/>
    //   </a>

    //   <a 
    //     href="#about" onClick={() => setActiveNav('about')} 
    //     className={activeNav==='about'?'active':''}>
    //       <AiOutlineUser/>
    //   </a>
    //   <a 
    //     href="#experience" onClick={() => setActiveNav('experience')} 
    //     className={activeNav==='experience'?'active':''}>
    //       <BiBook/>
    //   </a>
    //   <a 
    //     href="#services" onClick={() => setActiveNav('services')} 
    //     className={activeNav==='services'?'active':''}>
    //       <RiServiceLine/>
    //   </a>
    //   <a 
    //     href="#contact" onClick={() => setActiveNav('contact')} 
    //     className={activeNav==='contact'?'active':''}>
    //       <AiOutlineMessage/>
    //   </a>
    // </nav>

    <nav>
      <a href="#" className='header active'><AiOutlineHome/></a>
      <a href="#about" className='about'><AiOutlineUser/></a>
      <a href="#experience" className='experience'><BiBook/> </a>
      <a href="#services" className='services'><RiContactsLine/></a>
      <a href="#portfolio" className='portfolio'><AiOutlineAppstore/></a>
      <a href="#contact" className='contact'> <AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav