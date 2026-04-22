import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-4 py-2 text-sm font-medium transition duration-300',
    isActive
      ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent-soft)]'
      : 'text-[var(--color-text-muted)] hover:bg-white/70 hover:text-[var(--color-text)]',
  ].join(' ')

function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-10">
        <header className="sticky top-4 z-20 mb-8 rounded-[28px] border border-white/60 bg-white/75 px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
                Artist Portfolio
              </p>
              <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Природа в красках</h1>
            </div>

            <nav className="flex flex-wrap items-center gap-2">
              <NavLink to="/" className={navLinkClass} end>
                Главная
              </NavLink>
              <NavLink to="/contacts" className={navLinkClass}>
                Контакты
              </NavLink>
            </nav>
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
