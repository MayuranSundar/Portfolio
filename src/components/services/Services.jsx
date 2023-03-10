import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Other Information</h5>
      <h2>Background</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Work Experience</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Hobbies</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services