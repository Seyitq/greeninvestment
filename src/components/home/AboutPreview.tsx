import Link from 'next/link'
import Image from 'next/image'
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/hero-1.jpg"
                  alt="Green Yatırım"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 right-2 md:right-6 bg-dark-100 border border-dark-300 rounded-xl p-4 shadow-xl">
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
                '1500+ mutlu müşteri',
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
