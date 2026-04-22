import morningImage from '../assets/pictures/morning.jpg'
import streetImage from '../assets/pictures/street.jpg'

export type Artwork = {
  id: number
  title: string
  image: string
  description: string
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Улицы Праги',
    image: streetImage,
    description: '',
  },
  {
    id: 2,
    title: 'Рассвет',
    image: morningImage,
    description: '',
  },
]
