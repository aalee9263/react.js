import logo from './logo.svg';
import './App.css';

function App () {

const getWeather = (event) => {
  event.preventDefault();
  const cityName = document.querySelector("#cityName").value;
  console.log(`getting weather of ${cityName}....`)
};


  return (
    <div>
    <h1>Weather App</h1>


    <form onSubmit={getWeather}>
      <label htmlFor="cityName">City:</label>
      <input type="text" id="cityName" maxLength={20} minLength={2} required />
    </form>
    <br />
    <button type='submit'> Get Weather </button>
    </div>
  );
}

export default App;
