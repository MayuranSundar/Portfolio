import React from 'react'
import './background.css'
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
             <BackgroundInfo info="First in BSc Computer Science from University of Surrey"/>
             <BackgroundInfo info="A Levels - Maths, Business Studies, Information Technology"/>
          </ul>
        </article>

        <article className="background__col">
          <div className="background__head">
            <h3>Work Experience</h3>
          </div>

          <ul className="background__list">
            <BackgroundInfo info="5 years’ experience as a Knowhow technician in Currys"/>
            <BackgroundInfo info="Admin and IT work at Day-To-Day Account"/>
            <BackgroundInfo info="Bookkeeping Assistant at Mayfair Associates London"/>
            <BackgroundInfo info="Private maths tutor"/>
          </ul>
        </article>

        <article className="background__col">
          <div className="background__head">
            <h3>Hobbies</h3>
          </div>

          <ul className="background__list">
            <BackgroundInfo info="Game development"/>
            <BackgroundInfo info="Gym"/>
            <BackgroundInfo info="Gaming"/>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Background