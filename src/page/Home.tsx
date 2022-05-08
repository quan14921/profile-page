import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-2">
        <h1>I'm Web<br />Developer</h1>
        <p className='font-monospace'>I Love Building Beautiful Web Experience </p>
         <a className="btn btn-warning" href="#scrollspyHeading2" role="button">About Me</a> <a className="btn btn-warning" href="#scrollspyHeading4" role="button">Portfolio</a>

      </div>
      <div className="col-2">
        <img src="./738891_0979167565_Quan - Copy.jpg" />
      </div>
    </div>
</div>
  )
}

export default Home