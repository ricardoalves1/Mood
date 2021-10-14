import MusicList from 'components/MusicList'
import ImageWeather from 'components/ImageWeather'

import { Playlist } from 'styles/components/savedSongsStyle'

const SavedSongs = ({ songs, genre, city, dateTime, temperature }) => {
  const date = new Date(dateTime)

  const formatedDateTime = () => {
    return date.toLocaleDateString('pt-BR')
  }

  const getTime = () => {
    return date.toLocaleTimeString('pt-BR')
  }

  return (
    <Playlist>
      <div className="info">
        <div>
          <strong>{genre}</strong> - {`${city} ${formatedDateTime()}`}
        </div>
        <div className="image-weather">
          <span>{temperature}°C</span>
          <ImageWeather temperature={temperature} time={getTime()} />
        </div>
      </div>
      <MusicList songs={songs} />
    </Playlist>
  )
}

export default SavedSongs
