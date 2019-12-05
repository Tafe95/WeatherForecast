export const convertKelvinToCelsius = (temperature) => {
  if (typeof temperature !== 'number') {
    return 0
  }
  return parseInt(temperature - 273.15, 10)
}

export const convertKelvinToFahrenheit = (temperature) => {
  if (typeof temperature !== 'number') {
    return 0
  }
  const convertedTemperature = (temperature - 273.15) * (9 / 5) + 32
  return parseInt(convertedTemperature, 10)
}

export const convertDate = (date) => {
  const parsedDate = new Date(date)

  return {
    fullDate: parsedDate.toDateString(),
    day: parsedDate.getDay(),
    month: parsedDate.getMonth(),
    hours: parsedDate.getHours(),
    minutes: parsedDate.getMinutes(),
  }
}

export const convertArrayToChunk = (array, size) => {
  const chunked_arr = []
  let copied = [...array]
  const numOfChild = Math.ceil(copied.length / size)
  for (let i = 0; i < numOfChild; i++) {
    chunked_arr.push(copied.splice(0, size))
  }

  return chunked_arr
} 