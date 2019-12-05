import React from 'react'
import { getWeatherForecast, getCurrentLocation } from '../utils/callApi'
import Header from './Header'
import WeatherCardsList from './WeatherCardsList'

import './index.css'

export default class Main extends React.PureComponent {
  state = {
    location: {
      country: '',
      city: '',
      coord: {}
    },
    weatherForecastsList: [],
    currentWeatherInfo: {}
  }

  async componentDidMount() {
    const currentLocation = await getCurrentLocation()
    const weatherData = await getWeatherForecast()

    if (weatherData && currentLocation) {
      this.setState({
        weatherForecastsList: weatherData.list,
        location: {
          country: currentLocation.country,
          city: currentLocation.city,
          coord: {
            lat: currentLocation.lat,
            lon: currentLocation.lon
          }
        }
      })
    }
  }

  setWeatherInfo = weatherInfo => {
    this.setState({
      currentWeatherInfo: weatherInfo
    })
  }

  render() {
    const { location, weatherForecastsList, currentWeatherInfo } = this.state

    return (
      <div>
        <Header location={location} currentWeatherInfo={currentWeatherInfo} />
        <WeatherCardsList
          weatherForecastsList={weatherForecastsList}
          setWeatherInfo={this.setWeatherInfo}
        />
      </div>
    )
  }
}
