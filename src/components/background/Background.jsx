import React from 'react'
import './background.css'
import {BsCheck2All} from 'react-icons/bs'
import BackgroundInfo from './BackgroundInfo'

const Background = () => {
  return (
    <section id='background'>
      <h5>Other Information</h5>
      <h2>Background</h2>
      <div className="container background__container">
        <article className="background__col">
          <div className="background__head">
            <h3>Education</h3>
          </div>

          <ul className="background__list">
             <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
             <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
             <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
             <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
          </ul>
        </article>

        <article className="background__col">
          <div className="background__head">
            <h3>Work Experience</h3>
          </div>

          <ul className="background__list">
            <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
            <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
            <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
            <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
          </ul>
        </article>

        <article className="background__col">
          <div className="background__head">
            <h3>Hobbies</h3>
          </div>

          <ul className="background__list">
            <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
            <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
            <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>
            <BackgroundInfo info="Te ipsum dolor sit amet consectetur elit."/>  
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Background