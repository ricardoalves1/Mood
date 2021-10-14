import axios from 'axios'

export const getWeatherByCity = city => {
  try {
    const params = {
      q: city,
      appid: process.env.OPEN_WEATHER_KEY,
      lang: 'pt_br'
    }

    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params
    })
  } catch (error) {
    return error
  }
}
