import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineArrowRight, HiOutlineCheckCircle } from 'react-icons/hi'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-dark-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Area */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-[4/3] bg-dark-200 rounded-2xl border border-dark-300 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-neon text-3xl font-heading font-bold">G</span>
                    </div>
                    <p className="text-gray-600 text-sm">Green Yatırım</p>
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-dark-100 border border-dark-300 rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-neon text-glow">15+</div>
                <div className="text-gray-500 text-xs">Yıllık Deneyim</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection direction="right">
            <span className="text-neon text-sm font-semibold uppercase tracking-widest">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mt-3 mb-5">
              Güvenle Yatırım,{' '}
              <span className="text-neon">Değerle</span> Büyüme
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Green Yatırım olarak, sürdürülebilir ve çevre dostu gayrimenkul
              projelerinde lider konumdayız. Müşterilerimize en yüksek kalitede
              yaşam alanları ve akıllı yatırım fırsatları sunuyoruz.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Profesyonel yatırım danışmanlığı',
                'Çevre dostu ve sürdürülebilir projeler',
                'Şeffaf ve güvenilir iş süreçleri',
                '3000+ mutlu müşteri',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <HiOutlineCheckCircle className="text-neon shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-neon hover:text-neon-dim transition-colors font-medium"
            >
              Daha Fazla Bilgi
              <HiOutlineArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
