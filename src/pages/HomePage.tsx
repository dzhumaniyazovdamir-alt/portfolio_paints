import { useState } from 'react'
import GalleryModal from '../components/GalleryModal'
import { artworks, type Artwork } from '../data/artworks'

function HomePage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  return (
    <section className="space-y-8">
      <div className="grid gap-6 rounded-[32px] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,244,236,0.9))] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
            Онлайн-галерея художника
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Портфолио, где жизнь раскрывается через цвет, свет и настроение.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            Коллекция живописных работ, вдохновлённых прекрасными людьми, морем, лесами, горами и тихими полями.
            Нажмите на любую работу, чтобы рассмотреть её в увеличенном формате.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {artworks.map((artwork) => (
          <button
            key={artwork.id}
            type="button"
            onClick={() => setSelectedArtwork(artwork)}
            className="group overflow-hidden rounded-[28px] bg-[var(--color-surface)] text-left shadow-[0_18px_50px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]"
          >
            <div className="overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{artwork.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                {artwork.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <GalleryModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
    </section>
  )
}

export default HomePage
