import React from 'react'
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Skills from './Skills'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='App'>
            <nav id="navbar-example2" className="navbar navbar-light px-3">
                <a className="navbar-brand" href="#">QuânTrần</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading3">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading4">Portfolio</a>
                    </li>
                </ul>
            </nav>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
                <p id="scrollspyHeading1" className='home' >< Home /></p>
                <div id="scrollspyHeading2" className='about'>
                    <h4 >About Me</h4>
                    <p><About /></p>
                </div>

                <div className='skill' id="scrollspyHeading3">
                    <h4 >Skills</h4>
                    <p ><Skills /></p>
                </div>
                <div id="scrollspyHeading4" className='Portfolio'>
                    <h4 >Portfolio</h4>
                    <p><Portfolio /></p>
                </div>

            </div>


        </div>


    )
}

export default Navbar