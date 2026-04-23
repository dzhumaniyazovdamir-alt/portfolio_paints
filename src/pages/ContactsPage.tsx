function ContactsPage() {
  return (
    <section className="mx-auto grid max-w-[1080px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="border border-[var(--color-border-soft)] bg-white p-8 sm:p-10">
        <p className="text-[10px] tracking-[0.25em] text-[var(--color-text-muted)] [font-family:var(--font-sans)]">
          CONTACT
        </p>
        <h2 className="mt-5 text-4xl leading-tight tracking-[-0.035em] [font-family:var(--font-serif)] sm:text-5xl">
          Available for commissions, writing projects, and exhibition collaborations.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
          If you would like to discuss a new body of work, request a private viewing, or talk through a custom project,
          feel free to reach out.
        </p>
      </div>

      <div className="grid gap-px border border-[var(--color-border-soft)] bg-[var(--color-border-soft)]">
        <div className="bg-white p-6 sm:p-7">
          <p className="text-[10px] tracking-[0.25em] text-[var(--color-text-muted)] [font-family:var(--font-sans)]">
            EMAIL
          </p>
          <a
            href="mailto:artist@portfolio.com"
            className="mt-3 block text-xl leading-snug [font-family:var(--font-serif)] transition hover:text-[var(--color-text-muted)]"
          >
            artist@portfolio.com
          </a>
        </div>

        <div className="bg-white p-6 sm:p-7">
          <p className="text-[10px] tracking-[0.25em] text-[var(--color-text-muted)] [font-family:var(--font-sans)]">
            PHONE
          </p>
          <a
            href="tel:+79990000000"
            className="mt-3 block text-xl leading-snug [font-family:var(--font-serif)] transition hover:text-[var(--color-text-muted)]"
          >
            +7 (999) 000-00-00
          </a>
        </div>

        <div className="bg-white p-6 sm:p-7">
          <p className="text-[10px] tracking-[0.25em] text-[var(--color-text-muted)] [font-family:var(--font-sans)]">
            STUDIO
          </p>
          <p className="mt-3 text-xl leading-snug [font-family:var(--font-serif)]">
            Albuquerque, New Mexico
          </p>
        </div>

        <div className="bg-white p-6 sm:p-7">
          <p className="text-[10px] tracking-[0.25em] text-[var(--color-text-muted)] [font-family:var(--font-sans)]">
            SOCIAL
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs tracking-[0.2em] [font-family:var(--font-sans)]">
            <a className="border border-[var(--color-border-soft)] px-4 py-2 transition hover:border-[var(--color-border-strong)]" href="#">
              INSTAGRAM
            </a>
            <a className="border border-[var(--color-border-soft)] px-4 py-2 transition hover:border-[var(--color-border-strong)]" href="#">
              BEHANCE
            </a>
            <a className="border border-[var(--color-border-soft)] px-4 py-2 transition hover:border-[var(--color-border-strong)]" href="#">
              TELEGRAM
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsPage
