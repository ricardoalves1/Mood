import Head from 'next/head'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon'

import { useState } from 'react'

import MusicList from 'components/MusicList'
import ImageWeather from 'components/ImageWeather'
import Loading from 'components/Loading'
import Notification from 'components/Notification'

import { Header, ListInfo } from 'styles/pages/weatherStyle'
import { Container, Button } from 'styles/base'

import { getMusicByGenre } from 'services/music-service'
import { getWeatherByCity } from 'services/weather-service'

import { getGenre, getGenreId } from 'utils/genres'
import { currentDateTime } from 'utils/time'

export default function Weather() {
  const [songs, setSongs] = useState([])
  const [genre, setGenre] = useState('')
  const [city, setCity] = useState('')
  const [temperature, setTemperature] = useState('')

  const [cityName, setCityName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const getCityFromInput = event => {
    const { value } = event.target
    if (!!value) {
      setCity(value)
    }
  }

  const getWeatherAndSongs = async () => {
    if (!city) return
    setIsLoading(true)

    try {
      const { data } = await getWeatherByCity(city)

      const temp = data.main.temp - 273.15
      const selectedGenre = getGenre(temp)
      const genreId = getGenreId(selectedGenre)

      const tracksByGenre = await getMusicByGenre(genreId)

      setGenre(selectedGenre)
      setTemperature(temp.toFixed(0))
      setSongs(tracksByGenre.data.tracks)
      setCityName(data.name)
      setCity(data.name)
    } catch (err) {
      setError(true)
      setMessage('Cidade não encontrada')
    } finally {
      setIsLoading(false)
    }
  }

  const saveSongs = () => {
    const savedSongs = JSON.parse(localStorage.getItem('songs')) || []
    const dateTime = currentDateTime()

    const newList = {
      city,
      dateTime,
      temperature,
      songs,
      genre
    }

    localStorage.setItem('songs', JSON.stringify([...savedSongs, newList]))
    setError(false)
    setMessage('Playlist salva!')
  }

  return (
    <div>
      <Head>
        <title>Mood</title>
        <meta name="description" content="Mood - Clima" />
      </Head>

      <main>
        <Container>
          <Header>
            <Link href="/">
              <h1 className="title">Mood</h1>
            </Link>

            <div className="label">Qual a sua cidade?</div>
            <div className="input">
              <input
                type="text"
                className="city"
                placeholder="Nome da cidade"
                onChange={getCityFromInput}
                onKeyDown={event => {
                  event.key === 'Enter' && getWeatherAndSongs()
                }}
              />
              <Button width="100px" onClick={getWeatherAndSongs}>
                <Icon>search</Icon>
              </Button>
            </div>

            {!!cityName && (
              <div className="weather-result">
                <div className="image-weather">
                  <ImageWeather temperature={temperature} />
                </div>
                <p>
                  {cityName} <strong>{temperature}°C</strong>
                </p>
              </div>
            )}
          </Header>

          {!!cityName && (
            <ListInfo>
              <div className="info">
                Agora está no clima de <strong>{genre}</strong>
              </div>
              <Button onClick={saveSongs}>Salvar Playlist</Button>

              <MusicList songs={songs} />
            </ListInfo>
          )}
        </Container>
      </main>

      <Loading isLoading={isLoading} />
      <Notification message={message} setMessage={setMessage} error={error} />
    </div>
  )
}
