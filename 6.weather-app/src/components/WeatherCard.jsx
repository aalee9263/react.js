import './WeatherCard.css'

const WeatherCard = ({data}) => {
    return (
        <div>
        City Name:{data?.location?.name} <br /> {data?.location?.country}
        <br />
        Temp: {data?.current?.temp_c}
      </div>
  
    )
}

export default WeatherCard;