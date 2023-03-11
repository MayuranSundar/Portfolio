import React from 'react'
import './about.css'
import MeAnim from '../../assets/me-memoji-about.png'
import {AiOutlineAppstore} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {MdComputer} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAnim} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdComputer className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years software development </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Retail</h5>
              <small>5 years of customer service</small>
            </article>

            <article className="about__card">
              <AiOutlineAppstore className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>
          </div>

          <p>
            I am a computer science graduate working as a Analyst Software Engineer at Solirius.
            In my spare time I have also been developing a game on Unreal Engine 5 called <b>The Exit</b>.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About