import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import "./index.css"


const Home = () => {

  const  [isLit, setLit] = useState(true);
  const [temp, setTemp] = useState(72);


  // start here function of temp inc and dec with button
  const sub = () => {

    // setTemp(temp -1); //72 

    setTemp((prev)=>{
      // my logic here
      return prev -1;
    })

    // setTemp((prev)=>{
    //   // my logic here
    //   return prev -1;
    // })
    // console.log("sub:", temp)
  }

  const add = () => {

    setTemp((prev)=>{
      // my logic here
      return prev +1;
    })
  } 
  console.log("add:", temp)

  // // start here function of Light
  // const changeState = () => {
  //   setLit(!isLit)
  // }

return <div className={`room ${(isLit) ? "lit" : "dark"}`}>
  <p>
    <button onClick={sub}>-</button>
    {temp}
    <button onClick={add}>+</button>
  </p>

  <br/>
<br/>

<p>Light is {(isLit) ? "On" : "Off"}</p>
<button onClick={()=> {setLit(!isLit)}}>
  Turn {(isLit) ? "On" : "Off"}</button>




</div>

}



ReactDOM.render(<Home/>, document.querySelector("#root"));
