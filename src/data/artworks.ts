export type Artwork = {
  id: number
  title: string
  image: string
  description: string
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Туманное утро',
    image: '/public/pictures/street.jpg',
    description: 'Нежный свет раннего утра среди гор и леса.',
  },
  {
    id: 2,
    title: 'Зеркальное озеро',
    image: '/public/pictures/morning.jpg',
    description: 'Спокойная водная гладь и мягкие отражения природы.',
  },
]
