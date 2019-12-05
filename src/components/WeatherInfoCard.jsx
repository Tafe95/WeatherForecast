import React from 'react'
import { convertDate, convertKelvinToCelsius } from '../utils/convertors'

export default function WeatherInfoCard(props) {
  const { hoursForecastList, setWeatherInfo } = props
  const cardDate = convertDate(hoursForecastList[0].dt_txt)

  return (
    <div className="weather-info-card">
      <div className="weather-info-card-head">
        <span>{cardDate.fullDate}</span>
      </div>
      {hoursForecastList.map(hourForecastItem => {
        const itemDate = convertDate(hourForecastItem.dt_txt)
        const temperature = convertKelvinToCelsius(hourForecastItem.main.temp)
        return (
          <div
            key={hourForecastItem.dt}
            className="weather-info-card-item"
            onClick={() =>
              setWeatherInfo({
                ...hourForecastItem.main,
                windSpeed: hourForecastItem.wind.speed
              })
            }
          >
            <div>
              <span>{itemDate.hours}:00</span>
            </div>
            <div>
              <span>{temperature}°C</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
