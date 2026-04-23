import { useState } from 'react'
import GalleryModal from '../components/GalleryModal'
import { artworks, type Artwork } from '../data/artworks'

function HomePage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  return (
    <section className="pb-8">
      <div id="about" className="mx-auto max-w-[1020px] px-2 pb-10 pt-3 text-center sm:pb-12">
        <h2 className="text-[34px] leading-[1.24] tracking-[-0.035em] [font-family:var(--font-serif)] sm:text-[48px] lg:text-[58px]">
          Hello! I am Damir Djumaniyaov from Volgograd. I like to draw...
        </h2>
      </div>

      <div id="portfolio" className="columns-2 gap-4 sm:columns-3 sm:gap-5 xl:columns-4 xl:gap-6">
        {artworks.map((artwork) => (
          <button
            key={artwork.id}
            type="button"
            onClick={() => setSelectedArtwork(artwork)}
            className="group relative block w-full break-inside-avoid overflow-hidden text-left transition duration-500 hover:-translate-y-0.5 [margin:0_0_1rem] sm:[margin:0_0_1.25rem] xl:[margin:0_0_1.5rem]"
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full object-cover shadow-[0_16px_34px_rgba(32,24,18,0.08)] transition duration-700 group-hover:scale-[1.015] group-hover:shadow-[0_22px_42px_rgba(32,24,18,0.12)]"
            />
            <span className="sr-only">{artwork.title}</span>
          </button>
        ))}
      </div>

      <GalleryModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
    </section>
  )
}

export default HomePage
