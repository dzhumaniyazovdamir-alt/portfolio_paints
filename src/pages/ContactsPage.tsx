function ContactsPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[32px] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
          Контакты
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">Связаться с художником</h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-text-muted)]">
          Открыта к персональным заказам, участию в выставках, коллаборациям с галереями и
          интерьерными проектами.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-[28px] bg-[var(--color-surface)] p-6 shadow-lg">
          <p className="text-sm font-medium text-[var(--color-text-muted)]">Email</p>
          <a
            href="mailto:artist@portfolio.com"
            className="mt-3 block text-lg font-semibold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
          >
            artist@portfolio.com
          </a>
        </div>

        <div className="rounded-[28px] bg-[var(--color-surface)] p-6 shadow-lg">
          <p className="text-sm font-medium text-[var(--color-text-muted)]">Телефон</p>
          <a
            href="tel:+79990000000"
            className="mt-3 block text-lg font-semibold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
          >
            +7 (999) 000-00-00
          </a>
        </div>

        <div className="rounded-[28px] bg-[var(--color-surface)] p-6 shadow-lg sm:col-span-2">
          <p className="text-sm font-medium text-[var(--color-text-muted)]">Адрес студии</p>
          <p className="mt-3 text-lg font-semibold text-[var(--color-text)]">
            Москва, Арт-пространство «Свет и воздух», ул. Мастерская, 12
          </p>
        </div>

        <div className="rounded-[28px] bg-[var(--color-surface-alt)] p-6 shadow-lg sm:col-span-2">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Социальные сети
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
            <a className="rounded-full bg-white px-4 py-2 transition hover:bg-[var(--color-accent)] hover:text-white" href="#">
              Instagram
            </a>
            <a className="rounded-full bg-white px-4 py-2 transition hover:bg-[var(--color-accent)] hover:text-white" href="#">
              Behance
            </a>
            <a className="rounded-full bg-white px-4 py-2 transition hover:bg-[var(--color-accent)] hover:text-white" href="#">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsPage
