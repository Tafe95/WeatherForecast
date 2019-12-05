import React from 'react'
import {
  convertKelvinToCelsius,
  convertKelvinToFahrenheit
} from '../utils/convertors'

export default function WeatherInfoCard(props) {
  const { location, currentWeatherInfo } = props
  const celsiusTemperature = convertKelvinToCelsius(currentWeatherInfo.temp)
  const fahrenheitTemperature = convertKelvinToFahrenheit(
    currentWeatherInfo.temp
  )

  return (
    <div className="main-header">
      <div className="main-header-container">
        <div>
          Current Location:{' '}
          <span className="main-header-value">
            {location.country}, {location.city}
          </span>
        </div>
        <div>
          <span>
            lat: <span className="main-header-value">{location.coord.lat}</span>
          </span>
          <span>
            , lon:{' '}
            <span className="main-header-value">{location.coord.lon},</span>
          </span>
        </div>
      </div>
      <div className="main-header-container">
        <span className="main-header-value">Additional Info</span>
        <div>
          <span>
            Temperature:{' '}
            <span className="main-header-value">{celsiusTemperature}°C/</span>
          </span>
          <span className="main-header-value">{fahrenheitTemperature}°F</span>
        </div>
        <div>
          <span>
            Humidity:{' '}
            <span className="main-header-value">
              {currentWeatherInfo.humidity || 0}%
            </span>
          </span>
        </div>
        <div>
          <span>
            Wind:{' '}
            <span className="main-header-value">
              {currentWeatherInfo.windSpeed || 0} km/h
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
