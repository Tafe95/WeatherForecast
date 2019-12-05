import log from './log'

const callApi = async (url, params) => {
  try {
    const response = await fetch(url)

    if (response.status === 200) {
      const parsedData = await response.json()
      return parsedData
    }
  } catch (error) {
    log('ERROR', error.message)
  }
}

export const getCurrentLocation = async () => {
  try {
    const url = 'http://ip-api.com/json'
    const locationData = await callApi(url)
    return locationData
  } catch (error) {
    log('ERROR', error.message)
  }
}

export const getWeatherForecast = async () => {
  try {
    const locationData = await getCurrentLocation()
    const { city, countryCode } = locationData

    const weatherApiLink = 'http://api.openweathermap.org/data/2.5/forecast'
    const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d'
    const url = `${weatherApiLink}?q=${city},${countryCode}&appid=${openWeatherApiKey}`

    const weatherData = await callApi(url)
    return weatherData
  } catch (error) {
    log('ERROR', error.message)
  }
}
