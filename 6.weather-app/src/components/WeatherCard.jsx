import './WeatherCard.css'

const WeatherCard = ({data}) => {
    return (
        <div className='WeatherCard'>
        {data?.location?.name}, {data?.location?.country}
        <div className='temp'> {data?.current?.temp_c} °C </div>
        <img src={data?.current?.condition?.icon} alt="icon" />
        <div className='weather'> {data?.current?.condition?.text} </div>
        <div className='wind'>Wind: {data?.current?.wind_kph} 
        KPH </div>
      </div>
  
    )
}

export default WeatherCard;