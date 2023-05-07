import React from 'react';
import snorkelling from './img/snorkelling.jpg';
import mountaineer from './img/mountaineer.jpg';
import rockclimbing from './img/rock-climbing.jpg';
import flyfish from './img/fly-fishing.jpg';
import glacier from './img/glacier.jpg';
import surfing from './img/surfing.jpg';

const Main = () => {
    return(
<>

          
<div className="album py-5 bg-darkest">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img  className="card-img-top" width="100%" height="225" src={snorkelling} alt="snorkelling BOI" />
            <div className="card-body">
              <p className="card-text">Explore remote untouched reefs and deserted islands!</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-dark text-light btn-md fw-bold btn-outline-secondary">Go Diving!</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img  className="card-img-top" width="100%" height="225" src={mountaineer} alt="snorkelling BOI" />
            <div className="card-body">
              <p className="card-text">Hike to the worlds most remote and rarely seen, secret spots.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-dark text-light btn-md fw-bold btn-outline-secondary">Go Hiking!</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img  className="card-img-top" width="100%" height="225" src={rockclimbing} alt="Mountaineering in NZ's Souther Alps" />
            <div className="card-body">
              <p className="card-text">Climb the worlds tallest peaks with the experienced guides</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-dark text-light btn-md fw-bold  btn-outline-secondary">Go Climbing!</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img  className="card-img-top" width="100%" height="225" src={flyfish} alt="Flyfishing" />
            <div className="card-body">
              <p className="card-text">Hunt and Fish in the most pristine and untouched areas with knowledgeable local guides!</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-dark text-light btn-md fw-bold btn-outline-secondary">Go Fishing!</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img  className="card-img-top" width="100%" height="225" src={glacier} alt="snorkelling BOI" />
            <div className="card-body">
              <p className="card-text">Venture deep into hidden caves! Explore Glaciers, ice-caves and crevasses.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-dark text-light btn-md fw-bold btn-outline-secondary">Go Caving!</button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img  className="card-img-top" width="100%" height="225" src={surfing} alt="snorkelling BOI" />
            <div className="card-body">
              <p className="card-text">Surf secret breaks and locals only spots! Be the only surfer in the water with barrels for days.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-dark text-light btn-md fw-bold btn-outline-secondary">Go Surfing!</button>
               
                </div>
              </div>
            </div>
          </div>
        </div>

        
        </div>
    </div>
</div>
<div className='row row-cols-3'>
    <div className='col-4 bg-darkest'></div>
    <div className='col-4 pb-5 bg-darkest'>
        <iframe title="chatbot"
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/0fad5879-1165-4a73-b3a5-059c610018d5">
        </iframe>
    </div>
    <div className='col-4 bg-darkest'></div>
</div>
</>  


      


    )
}
export default Main;