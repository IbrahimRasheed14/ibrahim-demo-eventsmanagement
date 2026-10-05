import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { SiteHeader } from '@/components/site-header'
import { WhatWeDo } from '@/components/what-we-do'

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
        <Contact />
      </main>
      <footer className="border-t-4 border-sbu-red bg-black px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm text-white/70">
          Stony Brook Undergraduate Student Government Events Management
        </p>
      </footer>
    </div>
  )
}
