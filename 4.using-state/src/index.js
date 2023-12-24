import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'



const Home = () => {
  const [isLit, setLit] = useState(true);

  // const changeState = () => {
  //   setLit(!isLit) one another way as mentioned in line no 16.
  //   <button onClick={()=> setLit(!isLit)}>Change State</button>
  // }

  // return <div className={(isLit) ? "room lit" : "room dark"}>  
  return <div className={`room ${(isLit) ? "lit" : "dark"}`}>  
    <p>Light is {(isLit) ? "On" : "Off"}</p>
    {/* <button onClick={()=> setLit(!isLit)}>Change State</button> one anoother way is under mentioned */}
    <button onClick={()=> setLit(!isLit)}>
      
      Turn {(isLit) ? "Off" : "On"}
      
      </button>
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#root'))