export const getGenre = temperature => {
  if (temperature > 32) {
    return 'Rock'
  } else if (temperature > 24) {
    return 'Pop'
  } else if (temperature > 16) {
    return 'Eletrônica'
  } else {
    return 'Alternativa'
  }
}

export const getGenreId = genre => {
  const genresId = {
    Rock: 'genre-global-chart-7',
    Pop: 'genre-global-chart-1',
    Eletrônica: 'genre-global-chart-4',
    Alternativa: 'genre-global-chart-6'
  }

  return genresId[genre] || ''
}
