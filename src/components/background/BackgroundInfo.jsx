import React from 'react'
import {BsCheck2All} from 'react-icons/bs'

const BackgroundInfo = (props) => {
  return (
    <li>
        <BsCheck2All className='background__list-icon'/>
        <p>{props.info}</p>
    </li>
  )
}

export default BackgroundInfo