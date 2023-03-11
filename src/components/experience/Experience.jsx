import React from 'react'
import './experience.css'
import ExperienceDetails from './ExperienceDetails'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Web Development</h3>
          <div className="experience__content">
            <ExperienceDetails skill="HTML" level="Intermediate"/>
            <ExperienceDetails skill="CSS" level="Intermediate"/>
            <ExperienceDetails skill="JavaScript" level="Competent"/>
            <ExperienceDetails skill="React" level="Competent"/>
            <ExperienceDetails skill="Ruby on Rails" level="Competent"/>
          </div>

        </div>
        <div className="experience__backend">
          <h3>Other Technical Skills</h3>
          <div className="experience__content">
            <ExperienceDetails skill="Python" level="Intermediate"/>
            <ExperienceDetails skill="Java" level="Competent"/>
            <ExperienceDetails skill="SQL" level="Competent"/>
            <ExperienceDetails skill="Unreal Engine 5" level="Beginner"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience