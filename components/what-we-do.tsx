import { DoorOpen, Ticket, Users } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Crowd Control',
    description: 'We maintain crowd control at private events on-campus.',
  },
  {
    icon: Ticket,
    title: 'Ticketing & Wristbanding',
    description:
      'We handle ticketing and wristbanding for private events on-campus.',
  },
  {
    icon: DoorOpen,
    title: 'Secure Exits',
    description: 'We ensure exits are secure for the duration of the event.',
  },
]

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="scroll-mt-20 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="what-we-do-heading"
          className="text-3xl font-bold text-black md:text-4xl"
        >
          What we do
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-black/10 bg-white p-7 transition-colors hover:border-black/30"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-black text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-black">{title}</h3>
              <p className="mt-2 leading-relaxed text-black/65">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
