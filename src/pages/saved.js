import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import SavedSongs from 'components/SavedSongs'

import { CardInfo, Header } from 'styles/pages/savedStyle'
import { Container } from 'styles/base'

export default function Saved() {
  const [savedSongs, setSavedSongs] = useState([])

  useEffect(() => {
    setSavedSongs(JSON.parse(localStorage.getItem('songs')) || [])
  }, [])

  return (
    <div>
      <Head>
        <title>Mood</title>
        <meta name="description" content="Mood - Músicas Salvas" />
      </Head>

      <main>
        <Container>
          <Header>
            <Link href="/">
              <h1 className="title">Mood</h1>
            </Link>

            <div className="subtitle">Suas playlists salvas:</div>
          </Header>

          {!savedSongs.length && (
            <CardInfo>
              <p>Nenhuma música foi salva. Quer fazer isso agora?</p>
              <p>
                <a href="/weather">Clique aqui</a> e veja as playlists
                recomendadas agora para a sua cidade!!
              </p>
            </CardInfo>
          )}

          {savedSongs.map((saved, index) => {
            return (
              <SavedSongs
                key={index}
                songs={saved.songs}
                genre={saved.genre}
                city={saved.city}
                dateTime={saved.dateTime}
                temperature={saved.temperature}
              />
            )
          })}
        </Container>
      </main>
    </div>
  )
}
