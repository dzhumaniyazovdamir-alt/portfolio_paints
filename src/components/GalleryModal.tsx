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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-[var(--color-surface)] shadow-2xl max-h-[90vh]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={artwork.title}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/85 px-3 py-2 text-sm font-medium text-slate-900 shadow-lg transition hover:bg-white"
        >
          Закрыть
        </button>

        <div className="grid gap-0 md:max-h-[90vh] md:grid-cols-[1.4fr_0.9fr]">
          <div className="flex items-center justify-center bg-slate-100 p-4 sm:p-6">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-h-[60vh] w-full rounded-[20px] object-contain md:max-h-[82vh]"
            />
          </div>

          <div className="flex flex-col justify-between overflow-y-auto p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Картина
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--color-text)]">
                {artwork.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                {artwork.description}
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-[var(--color-surface-alt)] p-5 text-sm leading-6 text-[var(--color-text-muted)]">
              Каждая работа вдохновлена природными состояниями: светом, воздухом, тишиной и
              движением. Галерея адаптирована для комфортного просмотра на любом устройстве.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
