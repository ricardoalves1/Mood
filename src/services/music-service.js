import axios from 'axios'

export const getMusicByGenre = genre => {
  try {
    const headers = {
      'x-rapidapi-host': process.env.RAPID_API_HOST,
      'x-rapidapi-key': process.env.RAPID_API_KEY
    }

    const params = {
      listId: genre,
      pageSize: 18
    }

    return axios.get('https://shazam.p.rapidapi.com/charts/track', {
      headers,
      params
    })
  } catch (error) {
    return error
  }
}
