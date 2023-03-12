import React from 'react'
import './portfolio.css'
import data from './PortfolioData'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, demoAvailable, isPortfolio})=>{
            return(
              <article key={id} className="portfolio__item">
              
                <div className="portfolio__item-image">
                  <img src={image} alt="Portfolio 1" />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target='' rel='noopener noreferrer' className='btn'>Github</a>
                  {demoAvailable && 
                    <a href={demo} target={isPortfolio? '':'_blank'} rel='noopener noreferrer' className='btn btn-primary'>
                      Live Demo
                    </a>
                  }
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio