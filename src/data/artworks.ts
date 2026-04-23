import morningImage from '../assets/pictures/morning.jpg'
import streetImage from '../assets/pictures/street.jpg'
import winterImage from '../assets/pictures/winter.jpg'
import lakeImage from '../assets/pictures/lake.jpg'
import portraitImage from '../assets/pictures/portrait.jpg'
import forestImage from '../assets/pictures/forest.png'
import street1Image from '../assets/pictures/street1.png'

export type Artwork = {
  id: number
  title: string
  image: string
  description: string
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Fractured Memory',
    image: streetImage,
    description: 'A collage of mirrors, moonlight, and quiet theatrical tension.',
  },
  {
    id: 2,
    title: 'Dream Field',
    image: morningImage,
    description: 'A vivid composition where motion, color, and objects drift together.',
  },
  {
    id: 3,
    title: 'Night Balloons',
    image: winterImage,
    description: 'Floating forms and fragments set against a deep twilight blue.',
  },
  {
    id: 4,
    title: 'Sunset Ascent',
    image: lakeImage,
    description: 'A warm-toned sky carrying bright balloons over a painted horizon.',
  },
  {
    id: 5,
    title: 'Orbit',
    image: forestImage,
    description: 'Cosmic symbolism and handwritten fragments suspended in the dark.',
  },
  {
    id: 6,
    title: 'Red Bloom',
    image: street1Image,
    description: 'A dense surrealist scene filled with petals, figures, and motion.',
  },
  {
    id: 7,
    title: 'Portrait With Garden',
    image: portraitImage,
    description: 'A surreal portrait framed by flowers, architecture, and gold light.',
  },
]
