import React from 'react'
import './background.css'
import BackgroundInfo from './BackgroundInfo'
import data from './BackgroundData'

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
            {data.education.map(({info})=>{
                  return(
                    <BackgroundInfo info={info} />
                  )
              })}
          </ul>
        </article>

        <article className="background__col">
          <div className="background__head">
            <h3>Work Experience</h3>
          </div>

          <ul className="background__list">
            {data.workExp.map(({info})=>{
                  return(
                    <BackgroundInfo info={info} />
                  )
            })}
          </ul>
        </article>

        <article className="background__col">
          <div className="background__head">
            <h3>Hobbies</h3>
          </div>

          <ul className="background__list">
            {data.hobbies.map(({info})=>{
                  return(
                    <BackgroundInfo info={info} />
                  )
            })}
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Background