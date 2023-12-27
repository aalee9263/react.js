import { useState, useRef } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';
import WeatherCard from './components/WeatherCard'


function App () {

const [cityName, setCityName] = useState("");
const [isLoading, setIsLoading] = useState(false);
const inputRef = useRef(null);

const [data, setData] = useState([]);

const getWeather = async(event) => {
  event.preventDefault();
  // under mentio method of taking input is not prefered..
  // const cityName = document.querySelector("#cityName").value;
  // console.log(`getting weather of ${cityName}....`)  // another way is under mention....
  // console.log(`getting weather of ${cityName}....`)// anothery way is under mention of taking input value  
  console.log(`getting weather of ${inputRef.current.value}....`)
  
try { 
    setIsLoading(true) 
      
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=62ba1f4835a74125a99140600232612&q=${inputRef.current.value}&aqi=no`)

    console.log("response:", response.data)
    setIsLoading(false)
    
    //this is method (spread operator) if user previous card(data) also want to seen on screen. suppose he want to see different cities temperature
    // and under mention method is for store data in array ...data.
    setData([response.data, ...data]);
    //undermentiond code is for reset of form for renew entry from user
    event.target.reset();

    console.log(data)
    
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
};

const changeHandler = (event) => {
  setCityName(event.target.value)
  // console.log("changeHandler:", event.target.value)
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

    <br />
    <br />
    <br />


    {isLoading ? <div>Loading...</div> : null }

{/* /here is ternary operator if data is not shown on user screen then "No Data will display here" */}

    {data.length ? ( 

    data.map((eachWeatherData, index) =>(
        <WeatherCard key={index} data={eachWeatherData}/>
    ))
    ) : ( 
    <div>No Data</div>
    )}
    </div>
  );
}

export default App;
