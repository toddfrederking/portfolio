import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Thackery from './Thackery.jpg';
import Tenred from './Tenred.jpg';
import spacekid from './spacekid.jpg';
import cvhand from './cvhand.png';
import blog from './blog.png';
import typewriter from './typewriter.jpg';
import travel from './travel.jpg';
import nasaworm from './nasaworm.png';
import hoodgoods from './hoodgoods.jpg';
import flexbox from './flexbox.png';
import dice from './dice.jpg';
import bluesky from './bluesky.jpg';
import fb from './fb.png';
import linkedin from './linkedin.png';
// import './assets/css/fonts.css';

class App extends Component {


  render() {

//     const backgroundImage = {
//   width: "100%",
//   height: "100%",
//   backgroundColor: 'blue'
// };

    return (
      <div className="App" >

      <header className="blurred-header">
        <div className="Backgroundtop">
          </div>


    <div className="photo-box">



      <img className="photo" src={spacekid} alt="spacekid"/>

      <div className="text-box">
        <p>
          Todd Frederking
        </p>
        <p>
          512.800.0304
        </p>
        <p>
          toddfrederking@gmail.com
        </p>
      </div>
    </div>

  </header>
  <div className = "containerFluid">
  <div class="row">
      <div class="col-xs-12 summary-box">
        <h1>The Astronaut</h1>
        <p>
          After 15 years in Real Estate, I recently took a Technical Sales position with DellEMC and I am currently attending Austin Coding Academy. With a solid background in data center technologies, upon completion, I will be fluent in HTML, CSS, JavaScript, node.js and react.
          I am most interested in pursuing client facing pre-sales positions or post-sales integration opportunities with a cutting edge organization specialisng in SaaS.
        </p>
      </div>
    </div>

  </div>

  <div className="row">
        <div className="col-xs-12 skills-box">
          <h1>The Work</h1>
        </div>
      </div>



      <div className="container-fluid">

      <div className="row row-2">
        <div className="col-xs-12 col-md-4 left">
          <div>
            <a href="https://toddfrederking.github.io/web-workbook/01week/resume/index.html" target="_blank"><img className="cv" src={cvhand}/></a>
          </div>

        </div>
        <div className="col-xs-12 col-md-4 middle">
          <a href="https://toddfrederking.github.io/web-workbook/02week/blog/" target="_blank"><img className="blog" src={blog} /></a>
        </div>
        <div className="col-xs-12 col-md-4 right">
          <a href="https://toddfrederking.github.io/web-workbook/02week/bio/index.html" target="_blank"><img className="typewriter" src={typewriter} /></a>
        </div>
      </div>







      <div className="row row-3">
              <div className="col-xs-12 col-md-4 left1">
                <div className="cv">
                  <a href="https://toddfrederking.github.io/web-workbook/03week/airplane/" target="_blank"><img className="travel"  src={travel}/></a>
                </div>

              </div>

              <div className="col-xs-12 col-md-4 middle1">
                <a href="https://toddfrederking.github.io/web-workbook/04week/nasa/" target="_blank"><img className="nasa" src={nasaworm} /></a>
              </div>
              <div className="col-xs-12 col-md-4 right1">
                <a href="https://toddfrederking.github.io/checkpoint1/index.html" target="_blank"><img className="hoodgoods" src={hoodgoods} /></a>
              </div>
            </div>



            <div className="row row-4">
        <div className="col-xs-12 col-md-4 left1">
          <div className="cv">
            <a href="https://toddfrederking.github.io/web-workbook/04week/welcome-to-our-site//" target="_blank"><img className="flexbox"  src={flexbox}/></a>
          </div>

        </div>

        <div className="col-xs-12 col-md-4 middle1">
          <a href="https://toddfrederking.github.io/web-workbook/06week/dice/index.html" target="_blank"><img className="dice" src={dice} /></a>
        </div>
        <div className="col-xs-12 col-md-4 right2">
          <a href="https://toddfrederking.github.io/web-workbook/05week/transitions-and-transformations/" target="_blank"><img className="blueskies" src={bluesky} /></a>
          <div className="animation">


            <a href="https://toddfrederking.github.io/web-workbook/05week/transitions-and-transformations/" target="_blank">
            Animation
          </a>
          </div>
        </div>
      </div>




      <div className="row socials">
        <div className="col-12 social-text">
          <h1>The Socials</h1>
        </div>
        <div className="col-xs-6 fb">
          <a href="https://www.facebook.com/todd.frederking" target="_blank">
          <img className="fbimage" src={fb} /></a>
        </div>
        <div className="col-xs-6 linkedin">
          <a href="https://www.linkedin.com/in/toddfrederking/" target="_blank">
          <img className="linkedinimage" src={linkedin} /></a>
        </div>

      </div>

        </div>













      </div>
    );
  }
}

export default App;

// backgroundImage: "url(" + { Thackery } + ")"
