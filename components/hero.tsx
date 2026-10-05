import { ArrowRight, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="px-6 pt-10 md:pt-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-t-8 border-sbu-red bg-black px-6 py-16 text-white md:px-12 md:py-24">
        <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white/70">
          <span aria-hidden="true" className="h-0.5 w-8 bg-sbu-red" />
          Stony Brook Undergraduate Student Government
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight md:text-6xl">
          Events Management
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
          We maintain crowd control, handle ticketing and wristbanding for
          private events on-campus, and ensure exits are secure for the
          duration of the event.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#what-we-do"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sbu-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sbu-red-dark"
          >
            See what we do
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="mailto:usg_events_forms@stonybrook.edu"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}
