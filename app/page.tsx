'use client'

import { useState } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Oversized Cargo Jacket',
    price: '€89',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&h=750&q=80',
  },
  {
    id: 2,
    name: 'Wide Leg Track Pants',
    price: '€65',
    tag: null,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=600&h=750&q=80',
  },
  {
    id: 3,
    name: 'Logo Crop Hoodie',
    price: '€55',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=750&q=80',
  },
  {
    id: 4,
    name: 'Utility Vest',
    price: '€79',
    tag: null,
    image: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?auto=format&fit=crop&w=600&h=750&q=80',
  },
  {
    id: 5,
    name: 'Ribbed Tank Set',
    price: '€48',
    tag: 'Limited',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&h=750&q=80',
  },
]

export default function Home() {
  const [modalProduct, setModalProduct] = useState<string | null>(null)
  const [modalEmail, setModalEmail] = useState('')
  const [modalDone, setModalDone] = useState(false)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistDone, setWaitlistDone] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function handleModalSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!modalEmail) return
    setModalDone(true)
  }

  function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!waitlistEmail) return
    setWaitlistDone(true)
  }

  function closeModal() {
    setModalProduct(null)
    setModalEmail('')
    setModalDone(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: 'var(--font-body), Arial, sans-serif' }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="text-lg font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-heading), Arial, sans-serif' }}>
            Ellie Fashion
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#collection" className="hover:text-white transition-colors">Collection</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a>
          </div>
          <a
            href="#waitlist"
            className="hidden md:block text-xs font-medium tracking-widest uppercase px-5 py-2.5 border border-white/20 hover:bg-white hover:text-black transition-all duration-200"
          >
            Join Waitlist
          </a>
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm text-white/60">
            <a href="#collection" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Collection</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">About</a>
            <a href="#waitlist" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Waitlist</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80"
          alt="Ellie Fashion hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-4">New Collection — 2026</p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-6"
            style={{ fontFamily: 'var(--font-heading), Arial, sans-serif' }}
          >
            Street.<br />Sharp.<br />Ellie.
          </h1>
          <p className="text-white/60 text-lg max-w-md mb-10">
            Women&apos;s streetwear designed for the city. Limited drop — join the waitlist before it sells out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#collection"
              className="inline-block bg-white text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white/90 transition-colors"
            >
              View Collection
            </a>
            <a
              href="#waitlist"
              className="inline-block border border-white/30 text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:border-white transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Strip */}
      <div className="bg-white text-black py-3 overflow-hidden">
        <div className="flex gap-16 animate-none whitespace-nowrap px-6 text-xs font-semibold tracking-widest uppercase text-black/60">
          {['Free shipping over €80', 'Limited drops only', 'Women\'s streetwear', 'New collection 2026', 'Free shipping over €80', 'Limited drops only', 'Women\'s streetwear', 'New collection 2026'].map((t, i) => (
            <span key={i}>{t} &nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>

      {/* Collection */}
      <section id="collection" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-3">The Collection</p>
          <h2
            className="text-4xl md:text-5xl font-light tracking-tight"
            style={{ fontFamily: 'var(--font-heading), Arial, sans-serif' }}
          >
            5 Pieces. No Filler.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer" onClick={() => setModalProduct(p.name)}>
              <div className="relative overflow-hidden bg-[#111] aspect-[3/4] mb-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {p.tag && (
                  <div className="absolute top-3 left-3 bg-white text-black text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
                    {p.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80">
                  <button className="w-full bg-white text-black text-[10px] font-semibold tracking-widest uppercase py-2.5 hover:bg-white/90 transition-colors">
                    I Want This
                  </button>
                </div>
              </div>
              <p className="text-sm font-medium text-white/90 mb-1">{p.name}</p>
              <p className="text-sm text-white/40">{p.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">Want early access when we launch?</p>
          <a
            href="#waitlist"
            className="inline-block border border-white/20 text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 hover:border-white transition-colors"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6">About Ellie</p>
            <h2
              className="text-3xl md:text-4xl font-light leading-snug tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-heading), Arial, sans-serif' }}
            >
              Not fast fashion.<br />
              Not luxury.<br />
              Just clothes built<br />
              for how you move.
            </h2>
            <p className="text-white/50 leading-relaxed max-w-md">
              Ellie Fashion is a small-batch women&apos;s streetwear brand. We design each piece around real city life — oversized but structured, functional but sharp. No filler. No endless collections.
            </p>
          </div>
          <div className="relative aspect-[4/5] bg-[#111] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
              alt="About Ellie Fashion"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <div className="border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {[
            { value: '500+', label: 'on the waitlist' },
            { value: '5', label: 'pieces this drop' },
            { value: '100%', label: 'small batch' },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-3xl md:text-4xl font-light mb-2"
                style={{ fontFamily: 'var(--font-heading), Arial, sans-serif' }}
              >
                {s.value}
              </p>
              <p className="text-white/40 text-sm tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Waitlist */}
      <section id="waitlist" className="py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6">Limited Drop</p>
          <h2
            className="text-4xl md:text-5xl font-light tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-heading), Arial, sans-serif' }}
          >
            Be the first to shop.
          </h2>
          <p className="text-white/50 mb-12 text-lg">
            Join the waitlist. Get early access, first dibs, and launch pricing.
          </p>

          {waitlistDone ? (
            <div className="border border-white/10 bg-white/5 px-8 py-10">
              <p className="text-xl font-light mb-2" style={{ fontFamily: 'var(--font-heading)' }}>You&apos;re on the list.</p>
              <p className="text-white/50 text-sm">We&apos;ll email you when the drop goes live.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Join Now
              </button>
            </form>
          )}
          <p className="text-white/20 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-heading), Arial, sans-serif' }}
          >
            Ellie Fashion
          </span>
          <p className="text-white/30 text-xs text-center">
            Women&apos;s streetwear. Small batch. City-built.
          </p>
          <p className="text-white/20 text-xs">© 2026 Ellie Fashion</p>
        </div>
      </footer>

      {/* Product Modal */}
      {modalProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="bg-[#111] border border-white/10 w-full max-w-md p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {modalDone ? (
              <div className="text-center py-4">
                <p className="text-2xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  You&apos;re on the list.
                </p>
                <p className="text-white/50 text-sm mb-6">
                  We noted your interest in <span className="text-white">{modalProduct}</span>. We&apos;ll email you when it&apos;s live.
                </p>
                <button onClick={closeModal} className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors">
                  Continue Shopping →
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">You want this</p>
                <h3
                  className="text-2xl font-light mb-6"
                  style={{ fontFamily: 'var(--font-heading), Arial, sans-serif' }}
                >
                  {modalProduct}
                </h3>
                <p className="text-white/50 text-sm mb-8">
                  Leave your email and we&apos;ll notify you the moment this drops. First on the list, first to shop.
                </p>
                <form onSubmit={handleModalSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={modalEmail}
                    onChange={(e) => setModalEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black text-xs font-semibold tracking-widest uppercase py-4 hover:bg-white/90 transition-colors"
                  >
                    Notify Me
                  </button>
                </form>
                <p className="text-white/20 text-xs mt-4 text-center">No spam. Just the drop notification.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
