import Music from 'components/Music'

import { Grid } from 'styles/base'

const MusicList = ({ songs }) => {
  return (
    <Grid className="song-list">
      {songs.map(song => (
        <Music
          key={song.key}
          image={song.images?.coverart}
          song={song.title}
          singers={song.subtitle}
          url={song.url}
        />
      ))}
    </Grid>
  )
}

export default MusicList
