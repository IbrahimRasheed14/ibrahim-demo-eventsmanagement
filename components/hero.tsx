import { ArrowRight, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="px-6 pt-10 md:pt-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-black px-6 py-16 text-white md:px-12 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-white/60">
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/85"
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
