import { services } from '../data/constants'

export default function ServicesPage({ setPage }) {
  return (
    <div>
      <section className="pt-[140px] px-5 sm:px-12 pb-20 bg-gradient-to-br from-[#031B33] to-[#0A4A7A] text-center animate-fade-in">
        <div className="font-montserrat text-[11px] font-bold text-brand-gold tracking-[4px] uppercase mb-3">What We Offer</div>
        <div className="font-montserrat text-3xl md:text-5xl font-black text-white leading-tight">
          Our <span className="font-playfair italic text-brand-gold-light">Services</span>
        </div>
      </section>

      <div className="h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />

      <section className="py-16 px-5 sm:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand-orange">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-orange-light/10 border border-brand-orange/10 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <div className="font-montserrat text-[17px] font-bold text-brand-blue mb-2">{item.title}</div>
              <div className="text-sm text-[#5a6a8a] leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-5 sm:px-12 bg-brand-blue text-center">
        <div className="font-montserrat text-2xl md:text-3xl font-extrabold text-white mb-5">Need Personalized Guidance?</div>
        <div className="flex justify-center gap-3 flex-wrap">
          <button onClick={() => { setPage("contact"); window.scrollTo(0, 0) }} className="bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-[13px] font-bold py-3 px-7 rounded-full tracking-wide">
            Contact Us
          </button>
          <a href="https://wa.me/918796942407" target="_blank" rel="noreferrer" className="border-2 border-white/20 text-white font-montserrat text-[13px] font-bold py-2.5 px-7 rounded-full tracking-wide">
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
