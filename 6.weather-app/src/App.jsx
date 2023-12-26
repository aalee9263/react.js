import { useState, useRef } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

function App () {

const [cityName, setCityName] = useState("");
const inputRef = useRef(null);


const getWeather = async(event) => {
  event.preventDefault();
  // under mentio method of taking input is not prefered..
  // const cityName = document.querySelector("#cityName").value;
  // console.log(`getting weather of ${cityName}....`)  // another way is under mention....
  // console.log(`getting weather of ${cityName}....`)// anothery way is under mention of taking inut value  
  console.log(`getting weather of ${inputRef.current.value}....`)
  
try {  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=62ba1f4835a74125a99140600232612&q=${inputRef.current.value}&aqi=no`)

     console.log("response:", response.data)
    } catch (e) {

    }
};

const changeHandler = (event) => {
  setCityName(event.target.value)
  console.log("changeHandler:", event.target.value)
}


  return (
    <div>
    <h1>Weather App</h1>
    <form onSubmit={getWeather}>
      <label htmlFor="cityName">City:</label>
      <input 
        type="text" 
        id="cityName" 
        maxLength={20} 
        minLength={2} 
        required 
        onChange={changeHandler} 
        ref={inputRef}
        />
    <br />
    <button type="submit"> Get Weather </button>
    </form>
    </div>
  );
}

export default App;
