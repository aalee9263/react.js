import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App () {

const [cityName, setCityName] = state("")

const getWeather = (event) => {
  event.preventDefault();
  // under mentio method of taking input is not prefered..
  // const cityName = document.querySelector("#cityName").value;
  // console.log(`getting weather of ${cityName}....`)  // another way is under mention....
};

const changeHandler = (event) => {
  setCityName(event.targe.value)
}


  return (
    <div>
    <h1>Weather App</h1>


    <form onSubmit={getWeather}>
      <label htmlFor="cityName">City:</label>
      <input type="text" id="cityName" maxLength={20} minLength={2} required 
      onChange={changeHandler}/>
    </form>
    <br />
    <button type='submit'> Get Weather </button>
    </div>
  );
}

export default App;
