export const currentTime = () => {
  return new Date().toLocaleTimeString('pt-BR')
}

export const currentDateTime = () => {
  return new Date()
}

export const isDayOrNight = pastTime => {
  let time = pastTime || currentTime()

  const hour = time.substring(0, 2)
  return hour >= 6 && hour < 18 ? 'day' : 'night'
}
