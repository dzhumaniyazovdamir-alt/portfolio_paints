import morningImage from '../assets/pictures/morning.jpg'
import streetImage from '../assets/pictures/street.jpg'
import winterImage from '../assets/pictures/winter.jpg'
import lakeImage from '../assets/pictures/lake.jpg'
import portraitImage from '../assets/pictures/portrait.jpg'
import forestImage from '../assets/pictures/forest.jpg'
import street1Image from '../assets/pictures/street1.jpg'

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
  {
    id: 3,
    title: 'Зимний лес',
    image: winterImage,
    description: '',
  },
  {
    id: 4,
    title: 'Горное озеро',
    image: lakeImage,
    description: '',
  },
  {
    id: 5,
    title: 'Портрет в тени',
    image: portraitImage,
    description: '',
  },
  {
    id: 6,
    title: 'Лес',
    image: forestImage,
    description: '',
  },
  {
    id: 7,
    title: 'Улица в дождь',
    image: street1Image,
    description: '', 
  }
]
