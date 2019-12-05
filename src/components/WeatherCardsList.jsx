import React from 'react'
import { convertArrayToChunk } from '../utils/convertors'
import WeatherInfoCard from './WeatherInfoCard'

const HOURS_PER_DAY = 3 //openweathermap.org API provides 5-days/3 hour forecast
const DAY_HOURS = 24

export default function WeatherCardsList(props) {
  const { weatherForecastsList, setWeatherInfo } = props
  const weatherForecastsChunk = convertArrayToChunk(
    weatherForecastsList,
    DAY_HOURS / HOURS_PER_DAY
  )

  return (
    <div className="weather-cards-list">
      {weatherForecastsChunk.map((hoursForecastList, index) => (
        <WeatherInfoCard
          key={index.toString()}
          hoursForecastList={hoursForecastList}
          setWeatherInfo={setWeatherInfo}
        />
      ))}
    </div>
  )
}
