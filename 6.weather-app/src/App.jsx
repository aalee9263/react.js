import logo from './logo.svg';
import './App.css';

function App () {
  return (
    <div>
    <h1>Weather App</h1>

    <form>
      <label htmlFor="cityName">City:</label>
      <input type="text" id="cityName" maxLength={20} minLength={2} />
    </form>
    </div>
  );
}

export default App;
