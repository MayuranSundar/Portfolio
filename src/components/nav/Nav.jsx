import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineAppstore} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {RiContactsLine} from 'react-icons/ri'
import {useEffect} from "react";

const Nav = () => {

  // To add active class dynamically to nav elements
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav a");

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
  }, []);

  return (
    <nav>
      <a href="/#" className='header active'><AiOutlineHome/></a>
      <a href="#about" className='about'><AiOutlineUser/></a>
      <a href="#experience" className='experience'><BiBook/> </a>
      <a href="#services" className='services'><RiContactsLine/></a>
      <a href="#portfolio" className='portfolio'><AiOutlineAppstore/></a>
      <a href="#contact" className='contact'> <AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav