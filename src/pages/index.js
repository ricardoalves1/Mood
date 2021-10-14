import Head from 'next/head'
import Link from 'next/link'

import { Header, Box } from 'styles/pages/homeStyle'
import { Container } from 'styles/base'

import WeatherInfoIcon from '../assets/weather.svg'
import FavoriteIcon from '../assets/playlist.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mood</title>
        <meta name="description" content="Mood" />
      </Head>

      <main>
        <Container>
          <Header>
            <span className="subtitle">Bem vindo ao</span>
            <h1 className="title">Mood</h1>
          </Header>

          <Box>
            <Link href="/weather">
              <div>
                <p>
                  Veja o <strong>clima</strong> na sua
                  <br /> cidade e qual a melhor <strong>música</strong>
                  <br /> para o momento
                </p>
                <WeatherInfoIcon />
              </div>
            </Link>
            <Link href="/saved">
              <div>
                <p>
                  Veja suas <strong>playlists</strong> salvas
                </p>
                <FavoriteIcon className="playlist-icon" />
              </div>
            </Link>
          </Box>
        </Container>
      </main>
    </div>
  )
}
