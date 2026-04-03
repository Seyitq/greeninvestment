'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineArrowDown } from 'react-icons/hi'

const slides = [
  {
    id: 1,
    image: '/hero-1.jpg',
    label: 'Sürdürülebilir Projeler',
  },
  {
    id: 2,
    image: '/hero-2.png',
    label: 'Lüks Yaşam Alanları',
  },
  {
    id: 3,
    image: '/hero-3.png',
    label: 'Prime Lokasyonlar',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── SLIDER BACKGROUND ── */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Real photo */}
            <Image
              src={slides[current].image}
              alt={slides[current].label}
              fill
              className="object-cover"
              priority={current === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
        >
          <span className="text-white drop-shadow-lg">Geleceğe </span>
          <span className="text-neon" style={{ textShadow: '0 0 30px rgba(0,92,53,0.6)' }}>Değer</span>
          <br />
          <span className="text-white drop-shadow-lg">Katan </span>
          <span className="text-white/90 underline decoration-neon decoration-2 underline-offset-4">Yatırımlar</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
        >
          Sürdürülebilir, modern ve lüks gayrimenkul projelerinde güvenilir
          yatırım ortağınız. Hayallerinizi gerçeğe dönüştürüyoruz.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center gap-2 bg-neon text-white font-semibold px-8 py-4 rounded-lg hover:bg-neon-dim transition-all duration-300 hover:shadow-neon active:scale-95 text-base"
          >
            Projeleri Keşfet
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 active:scale-95 text-base"
          >
            Bize Ulaşın
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: '150+', label: 'Tamamlanan Proje' },
            { value: '₺2.5B+', label: 'Toplam Yatırım' },
            { value: '1500+', label: 'Mutlu Müşteri' },
            { value: '15+', label: 'Yıllık Deneyim' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
            >
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white/80 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── SLIDE DOTS ── */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/50"
        >
          <HiOutlineArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
