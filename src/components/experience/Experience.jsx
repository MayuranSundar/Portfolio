import React from 'react'
import './experience.css'
import ExperienceDetails from './ExperienceDetails'
import data from './ExperienceData'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Web Development</h3>
          <div className="experience__content">
            {data.web.map(({skill, level})=>{
                return(
                  <ExperienceDetails skill={skill} level={level} />
                )
            })}
          </div>

        </div>
        <div className="experience__backend">
          <h3>Other Technical Skills</h3>
          <div className="experience__content">
            {data.technical.map(({skill, level})=>{
                return(
                  <ExperienceDetails skill={skill} level={level} />
                )
            })} 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience