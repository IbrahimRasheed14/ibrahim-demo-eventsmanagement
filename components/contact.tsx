import { Mail } from 'lucide-react'

const EMAIL = 'usg_events_forms@stonybrook.edu'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 px-6 pb-20 md:pb-28"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 rounded-3xl bg-black/[0.04] p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <h2
            id="contact-heading"
            className="text-3xl font-bold text-black md:text-4xl"
          >
            Get in touch
          </h2>
          <p className="mt-3 text-black/65">Reach us by email at</p>
          <p className="mt-1 break-all text-lg font-semibold text-black">
            {EMAIL}
          </p>
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80"
        >
          <Mail className="size-4" aria-hidden="true" />
          Send an email
        </a>
      </div>
    </section>
  )
}
