import axios from 'axios'
// import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import WeatherCard from './components/WeatherCard'



function App() {
  // const [cityName, setCityName] = useState("");
  const [isLoading, setIisLoading] = useState(false);
  const inputRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() =>{
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( async (position)=>{
        console.log("position:", position)
        const response = await axios.get 
        (`http://api.weatherapi.com/v1/current.json?key=62ba1f4835a74125a99140600232612&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`)
        
        console.log("response:", response.data)

      });
      } else {
        console.log ("Geolocation is not supported by this browser.");
      }
    }, []);



  const getWeather = async(event) => {
    event.preventDefault();
    console.log(`getting weather of ${inputRef.current.value}...`)

    try {

        setIisLoading(true)

        const response = await axios.get (`http://api.weatherapi.com/v1/current.json?key=62ba1f4835a74125a99140600232612&q=${inputRef.current.value}&aqi=no`)
        console.log("response:", response.data)
        setIisLoading(false)
        
        setData([response.data, ...data])
        event.target.reset()
        console.log(data)
    } catch (e) {
      setIisLoading(false)
      console.log(e)
    }
  };

  const changeHandler = (event)=>{
    // setCityName(event.target.value)
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={getWeather}>
        <label htmlFor="cityName">City:</label>
        <input 
        type="text"
        id='cityName'
        maxLength={20}
        minLength={2}
        required
        onChange={changeHandler}
        ref={inputRef}/>
        <br />
        <button type='submit'>Get Weather</button>
      </form>
     <br />
     <br />
     <br />

     { isLoading ? <div>Loading...</div> : null }

     {data.length ? (
      data.map((eachWeatherData, index)=>(
        <WeatherCard key={index} data={eachWeatherData}/>
      ))  
     ) : (
    <div>No Data</div>
    )}  
    </div>
  );
}

export default App;
