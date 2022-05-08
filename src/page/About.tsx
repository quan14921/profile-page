import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-22">
      <p className="text-start fs-3 fw-bolder">I would like to introduce myself a little bit</p>
      <p className="text-start">My name is Trần Hồng Quân</p>
      <p className="text-start lh-1">I started learning how to code in August 2020</p>
      <p className="text-start lh-1">I love coding and the challenge of learning something new every day. My goal is to pursue a career in front-end development.</p>
      </div>
      <div className="col-21">
      <p className="text-start fs-3 fw-bolder">Education</p>
      <p className="text-start">2020-2023</p>
      <p className="text-start fw-bolder font-monospace">Thiết Kế Website - Cao Đăng FPT Polytechnic</p>
      </div>
    </div>
</div>
  )
}

export default About