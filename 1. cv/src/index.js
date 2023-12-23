import React from 'react';
import reactDOM from 'react-dom'
import './index.css';
// import arshad from './arshad.jpg'

function CV() {
  return (
    <html lang="en">
      <head>
        <title> Responsive CV Using React</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div className="container">
          <div className="header">
            <div className="img-area"> 
              <img src={"arshad.jpg"} alt="Image"/>
            </div>
            <h1>Arshad Ali</h1>
            <h3>AI Chatbot & Voice UI Developer</h3>
          </div>

          <div className="main">
            <div className="left">
              <h2>Personal Information</h2>
              <p>
                <strong>Name:</strong> Arshad Ali
              </p>
              <p>
                <strong>Age:</strong> 32 Years
              </p>
              <p>
                <strong>Email:</strong>aalee9263@gmail.com
              </p>
              <p>
                <strong>Whatsapp:</strong>+92-327-7824990
              </p>
              <h2>Technical Skills</h2>
              <ul>
                <li>HTML/CSS</li>
                <li>JAVAScrpit</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Mongodb</li>
              </ul>
              <h2>Soft Skills</h2>
              <ul>
                {/* <li>Teaching</li> */}
                <li>Team Work</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Time management</li>
              </ul>
            </div>

            <div className="right">
              <h2>Education</h2>
              <h3>B.Sc in Mathematics</h3>
              <p>Islamia University of Bahawalpur - 2017</p>
              <h3>DAE in Mechanical Techonology</h3>
              <p>Swedish Institute of Technology - 2013</p>
              <h2>Work Experience</h2>
              <h3>Rockwell Corporation</h3>
              <p>
                <strong>Position:</strong> PA to Chairmen
              </p>
              <p>
                <strong>Duration:</strong> 2017-2018
              </p>
              <h3>Nadeem & Company</h3>
              <p>
                <strong>Position:</strong> Assistant Manager
              </p>
              <p>
                <strong>Duration:</strong> 2014-2016
              </p>
              <h3>Teaching</h3>
              <p>
                <strong>Position:</strong> Senior Science Teacher
              </p>
              <p>
                <strong>Duration:</strong> 2012-2013
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}


reactDOM.render(<CV/>, document.querySelector('#root'))
export default CV;