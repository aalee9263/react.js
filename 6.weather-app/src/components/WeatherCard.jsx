import './WeatherCard.css'

const WeatherCard = ({data}) => {
    return (
        <div className='WeatherCard'>
        {data?.location?.name} <br /> {data?.location?.country}
        <br />
        <div className='temp'> {data?.current?.temp_c} °C </div>
        <br />
        <div className='weather'> {data?.current?.condition?.text} </div>
        <br />
        <div className='wind'>Wind: {data?.current?.wind_kph} 
        KPH </div>
        <br />
      </div>
  
    )
}

export default WeatherCard;