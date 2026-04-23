import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'border-b pb-1 text-[10px] tracking-[0.24em] text-[var(--color-text-muted)] transition',
    isActive
      ? 'border-[var(--color-text)] text-[var(--color-text)]'
      : 'border-transparent hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]',
  ].join(' ')

function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col px-5 pb-12 pt-8 sm:px-8 lg:px-12">
        <header className="mb-10">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-4">
            <NavLink
              to="/"
              className="justify-self-start text-[30px] leading-none tracking-[-0.03em] [font-family:var(--font-serif)]"
            >
              Damir Djumaniyazov
            </NavLink>

            <nav className="flex flex-wrap items-center justify-center gap-5 [font-family:var(--font-sans)] sm:gap-6">
              <NavLink to="/" className={navLinkClass} end>
                HOME
              </NavLink>
              <a
                href="/#portfolio"
                className="border-b border-transparent pb-1 text-[10px] tracking-[0.24em] text-[var(--color-text-muted)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
              >
                PORTFOLIO
              </a>
              <a
                href="/#about"
                className="border-b border-transparent pb-1 text-[10px] tracking-[0.24em] text-[var(--color-text-muted)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
              >
                ABOUT
              </a>
              <NavLink to="/contacts" className={navLinkClass}>
                CONTACT
              </NavLink>
            </nav>

            <a
              href="#"
              aria-label="Instagram"
              className="justify-self-end text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current">
                <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="4" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" />
                <circle cx="17.45" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
