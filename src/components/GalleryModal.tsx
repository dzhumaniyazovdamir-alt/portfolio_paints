import type { Artwork } from '../data/artworks'

type GalleryModalProps = {
  artwork: Artwork | null
  onClose: () => void
}

function GalleryModal({ artwork, onClose }: GalleryModalProps) {
  if (!artwork) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(17,14,11,0.72)] p-4 backdrop-blur-[2px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden border border-[var(--color-border-soft)] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={artwork.title}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 border border-[var(--color-border-soft)] bg-white px-3 py-1.5 text-[10px] tracking-[0.22em] text-[var(--color-text-muted)] [font-family:var(--font-sans)] transition hover:text-[var(--color-text)]"
        >
          CLOSE
        </button>

        <div className="grid gap-0 md:max-h-[90vh] md:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.7fr)]">
          <div className="flex items-center justify-center bg-[#f4efe7] p-4 sm:p-6">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-h-[78vh] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-between overflow-y-auto border-t border-[var(--color-border-soft)] p-6 md:border-l md:border-t-0 md:p-8">
            <div>
              <p className="text-[10px] tracking-[0.26em] text-[var(--color-text-muted)] [font-family:var(--font-sans)]">
                SELECTED WORK
              </p>
              <h2 className="mt-4 text-3xl leading-tight tracking-[-0.03em] [font-family:var(--font-serif)] sm:text-4xl">
                {artwork.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
                {artwork.description}
              </p>
            </div>

            <p className="mt-8 border-t border-[var(--color-border-soft)] pt-5 text-sm leading-7 text-[var(--color-text-muted)]">
              Collage, paint, and found imagery arranged with a quiet editorial balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
