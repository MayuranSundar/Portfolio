import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const ExperienceDetails = (props) => {
  return (
    <article className="experience__details">
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>{props.skill}</h4>
        <small className="text-light">{props.level}</small>
        </div>
    </article>
  )
}

export default ExperienceDetails