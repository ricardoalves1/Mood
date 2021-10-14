const withImages = require('next-images')

module.exports = withImages({
  esModule: true
})

module.exports = {
  reactStrictMode: true,
  env: {
    RAPID_API_HOST: process.env.RAPID_API_HOST,
    RAPID_API_KEY: process.env.RAPID_API_KEY,
    OPEN_WEATHER_KEY: process.env.OPEN_WEATHER_KEY
  }
}
