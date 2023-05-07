import React from 'react';
import logo from './img/logo-small.png';
const Navbar = () => {
    return(
<header>
  <div className="collapse bg-darkest" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About Mission Possible</h4>
          <h5 className="text-light">We work with thousands of experienced and passionate, guides, instructors, and hosts from all over the globe,
           they want to share their love of the outdoors with you and show you the unseen sights, 
           the hidden gems, the hardest to reach most incredible places on the planet</h5>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Menu</h4>
          <ul className="list-unstyled">
            <li><a href="https://main--mission-possible-dummy-frontend.netlify.app/" className="text-white">FAQ</a></li>
            <li><a href="https://main--mission-possible-dummy-frontend.netlify.app/" className="text-white">Contact Us</a></li>
            <li><a href="https://main--mission-possible-dummy-frontend.netlify.app/" className="text-white">Sign Up</a></li>
            <li><a href="https://main--mission-possible-dummy-frontend.netlify.app/" className="text-white">Log In</a></li>
            <li><a href="https://main--mission-possible-dummy-frontend.netlify.app/" className="text-white">Become A Guide</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar navbar-expand-md navbar-dark bg-darkest shadow-sm">
    <div className="container">
      <a href="https://main--mission-possible-dummy-frontend.netlify.app/" className="navbar-brand d-flex align-items-center">
        <img className="rounded-circle nav-logo"  src={logo} alt="logo" />
        <strong className="px-5">Mission Possible</strong></a>
        <div class="navbarr-links">
          <ul>
            <li><a href="https://main--mission-possible-dummy-frontend.netlify.app/">FAQ</a></li>
            <li><a href="https://main--mission-possible-dummy-frontend.netlify.app/">About</a></li>
            <li><a href="https://main--mission-possible-dummy-frontend.netlify.app/">Contact</a></li>
            <li><a className='btn-light text-light' href = "https://main--mission-possible-dummy-frontend.netlify.app/ ">Log In</a></li>
          </ul>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>


    )
}
export default Navbar;