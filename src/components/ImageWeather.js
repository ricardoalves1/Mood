import Image from 'next/image'
import day1 from 'assets/day-1.png'
import day2 from 'assets/day-2.png'
import day3 from 'assets/day-3.png'
import day4 from 'assets/day-4.png'
import night1 from 'assets/night-1.png'
import night2 from 'assets/night-2.png'
import night3 from 'assets/night-3.png'
import night4 from 'assets/night-4.png'

import { isDayOrNight } from 'utils/time'

export default function imageWeather({ temperature, time }) {
  const schedule = isDayOrNight(time)
  let image

  if (temperature > 32) {
    image = schedule === 'day' ? day4 : night4
  } else if (temperature > 24) {
    image = schedule === 'day' ? day3 : night3
  } else if (temperature > 16) {
    image = schedule === 'day' ? day2 : night2
  } else {
    image = schedule === 'day' ? day1 : night1
  }

  return <Image src={image} alt="Clima atual da cidade" />
}
