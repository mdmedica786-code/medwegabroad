import { stats } from '../data/constants'

export default function AboutPage({ setPage }) {
  return (
    <div>
      <section className="pt-[140px] px-5 sm:px-12 pb-20 bg-gradient-to-br from-[#031B33] to-[#0A4A7A] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(206,159,67,0.03)_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none" />
        <div className="max-w-[800px] mx-auto relative z-10 animate-fade-in-up">
          <div className="font-montserrat text-[11px] font-bold text-brand-gold tracking-[4px] uppercase mb-3">About Us</div>
          <div className="font-montserrat text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Leading Your Way to a <span className="font-playfair italic text-brand-gold-light">Medical Career</span>
          </div>
          <div className="text-base text-white/60 leading-relaxed">
            MEDWEG is a trusted study abroad consultancy based in Faridabad, dedicated to helping Indian students achieve their dream of becoming doctors through affordable MBBS programs at globally recognized universities.
          </div>
        </div>
      </section>

      <div className="h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />

      <section className="py-16 px-5 sm:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="font-montserrat text-[11px] font-bold text-brand-orange tracking-[3px] uppercase mb-2.5">Our Mission</div>
            <div className="font-montserrat text-2xl font-extrabold text-brand-blue mb-3.5 leading-snug">
              Making Medical Education Accessible
            </div>
            <div className="text-[15px] text-[#5a6a8a] leading-relaxed">
              We believe every aspiring doctor deserves access to quality medical education, regardless of financial constraints. MEDWEG bridges the gap between Indian students and world-class medical universities abroad, providing end-to-end guidance that transforms dreams into reality.
            </div>
          </div>
          <div>
            <div className="font-montserrat text-[11px] font-bold text-brand-orange tracking-[3px] uppercase mb-2.5">Our Vision</div>
            <div className="font-montserrat text-2xl font-extrabold text-brand-blue mb-3.5 leading-snug">
              From Dream to Doctor
            </div>
            <div className="text-[15px] text-[#5a6a8a] leading-relaxed">
              To become India's most trusted name in overseas medical education consulting, known for transparency, affordability, and the highest student success rates in NMC licensing examinations.
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-12 bg-gray-50">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <div className="font-montserrat text-3xl font-extrabold text-brand-blue">
              Why Students <span className="text-brand-gold">Trust</span> MEDWEG
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="font-montserrat text-3xl font-black text-brand-orange mb-2">{item.stat}</div>
                <div className="font-montserrat text-sm font-bold text-brand-blue mb-1">{item.title}</div>
                <div className="text-[13px] text-[#7a8baa] leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <div className="font-montserrat text-3xl font-extrabold text-brand-blue">
              Visit Our <span className="text-brand-orange">Office</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-wrap gap-6 items-center justify-center">
            <div className="flex-1 min-w-[260px]">
              <div className="font-montserrat text-base font-bold text-brand-blue mb-3">MEDWEG Abroad Consultancy</div>
              <div className="text-sm text-[#5a6a8a] leading-relaxed">
                Khori Jamalpur, Dhauj<br />
                Faridabad – 121004<br />
                Haryana, India
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <a href="tel:+918796942407" className="text-sm text-brand-orange font-semibold">+91-87969 42407</a>
                <a href="mailto:medwegabroad@gmail.com" className="text-sm text-brand-orange font-semibold">medwegabroad@gmail.com</a>
              </div>
            </div>
            <div className="flex-1 min-w-[260px] h-[220px] bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.9!2d77.32!3d28.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFaridabad!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
