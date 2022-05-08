import React from 'react'
import {FaHtml5 ,FaCss3, FaReact, FaNodeJs} from 'react-icons/fa'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-25">
        <FaHtml5 />
        <p>HTML</p>
        </div>
        <div className="col-25">
        <FaCss3/>
        <p>CSS</p>
        </div>
        
        <div className="col-25">
        <FaReact/>
        <p>React</p>
        </div>
         <div className="col-25">
        <FaNodeJs/>
        <p>NodeJS</p>
        </div>
        <div className="col-25">

        <p>Tailwind</p>
        </div>
       <div className="col-25">

        <p>Javascript</p>
        </div>
        
      </div>
    </div>
  )
}

export default Skills