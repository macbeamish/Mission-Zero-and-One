import React from 'react';
import hero from './img/camp-hero.png'
const Hero = () => {
    return(
        <section className="py-5 text-center hero">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold text-light hero-content">Prepare for the Adventure of a Lifetime!</h1>
            <p className="lead text-light">Our Mission is to connect you with expert guides to take you to the worlds most remote and spectacular places</p>
            <p>
              <input className="rounded searchbar text-black" placeholder='Find your next adventure!'></input>
              <a href="#" className="btn search-button  btn-dark btn-secondary my-2">Go!</a>
            </p>
          </div>
        </div>
      </section>
    )
}
export default Hero;