import { Metadata } from 'next'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineCheckCircle, HiOutlineLightBulb, HiOutlineHeart, HiOutlineGlobe } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Green Yatırım hakkında. Sürdürülebilir ve lüks gayrimenkul projelerinde 15 yıllık deneyimimizle yanınızdayız.',
}

const values = [
  {
    icon: HiOutlineLightBulb,
    title: 'Yenilikçilik',
    description: 'Akıllı ev sistemleri ve sürdürülebilir mimari ile sektöre yön veriyoruz.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Müşteri Odaklılık',
    description: 'Her müşterimizin benzersiz ihtiyaçlarına özel çözümler üretiyoruz.',
  },
  {
    icon: HiOutlineCheckCircle,
    title: 'Şeffaflık',
    description: 'Tüm süreçlerimizde açık ve dürüst iletişim ilkemizdir.',
  },
  {
    icon: HiOutlineGlobe,
    title: 'Sürdürülebilirlik',
    description: 'Çevreye duyarlı, enerji verimli projelerle geleceği inşa ediyoruz.',
  },
]

const milestones = [
  { year: '2011', text: 'Green Yatırım kuruldu' },
  { year: '2014', text: 'İlk büyük konut projesi tamamlandı' },
  { year: '2017', text: '50\'nci proje teslimi' },
  { year: '2020', text: 'Sürdürülebilir bina sertifikası alındı' },
  { year: '2023', text: '100\'üncü proje ve 2000. mutlu müşteri' },
  { year: '2026', text: 'Uluslararası genişleme başladı' },
]

export default function HakkimizdaPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-neon text-sm font-semibold uppercase tracking-widest">
                Hakkımızda
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mt-3 mb-6 leading-tight">
                Geleceği{' '}
                <span className="text-neon">Yeşil</span>,{' '}
                Yaşamı{' '}
                <span className="text-gold">Değerli</span>{' '}
                Kılıyoruz
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                2011 yılından bu yana, Green Yatırım olarak sürdürülebilir gayrimenkul
                sektöründe öncü olmayı hedefliyoruz. Çevreye duyarlı, modern tasarımlı
                ve yüksek yatırım getirili projelerle müşterilerimize değer katıyoruz.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Her projemizde kalite, güven ve yenilikçiliği ön planda tutarak,
                yaşam alanlarını sadece bir ev değil, bir yatırım fırsatına
                dönüştürüyoruz. Deneyimli ekibimiz, müşterilerimize alış sürecinden
                teslimatına kadar her aşamada yanlarında.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/hero-2.png"
                    alt="Green Yatırım"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats cards */}
                <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-xl p-4 shadow-xl">
                  <div className="text-2xl font-bold text-neon text-glow">150+</div>
                  <div className="text-gray-500 text-xs">Proje</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white border border-gray-200 rounded-xl p-4 shadow-xl">
                  <div className="text-2xl font-bold text-gold text-glow-gold">1500+</div>
                  <div className="text-gray-500 text-xs">Müşteri</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Değerlerimiz
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mt-3">
              Bizi Biz Yapan <span className="text-gold">Değerler</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-dark p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-neon/10 text-neon border border-neon/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-gray-800 font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <AnimatedSection className="text-center mb-14">
            <span className="text-neon text-sm font-semibold uppercase tracking-widest">
              Yolculuğumuz
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mt-3">
              Kilometre <span className="text-neon">Taşları</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300" />

            {milestones.map((milestone, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                className={`relative flex items-center gap-6 mb-10 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                  <div className="card-dark p-4 inline-block">
                    <span className="text-neon font-bold text-lg">{milestone.year}</span>
                    <p className="text-gray-600 text-sm mt-1">{milestone.text}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-neon z-10" />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
