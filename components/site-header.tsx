export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full bg-sbu-red text-xs font-bold tracking-wide text-white"
          >
            USG
          </span>
          <span className="text-sm font-semibold leading-tight text-black">
            Events Management
          </span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            <li>
              <a
                href="#what-we-do"
                className="rounded-full px-3 py-2 text-black/70 transition-colors hover:bg-sbu-red/5 hover:text-sbu-red"
              >
                What we do
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded-full bg-black px-4 py-2 font-medium text-white transition-colors hover:bg-black/80"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
