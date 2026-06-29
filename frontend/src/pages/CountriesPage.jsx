import { ArrowRight, ChevronLeft } from 'lucide-react'
import { countries } from '../data/constants'

export default function CountriesPage({ setPage, selectedCountry, setSelectedCountry }) {
  const countryData = selectedCountry ? countries.find(c => c.slug === selectedCountry) : null

  return (
    <div>
      <section className="pt-[140px] px-5 sm:px-12 pb-20 bg-gradient-to-br from-[#031B33] to-[#0A4A7A] text-center animate-fade-in">
        <div className="font-montserrat text-[11px] font-bold text-brand-gold tracking-[4px] uppercase mb-3">Study Destinations</div>
        <div className="font-montserrat text-3xl md:text-5xl font-black text-white leading-tight">
          MBBS Abroad <span className="font-playfair italic text-brand-gold-light">Destinations</span>
        </div>
      </section>

      <div className="h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />

      {countryData ? (
        <section className="py-12 px-5 sm:px-12 bg-white animate-fade-in">
          <div className="max-w-[900px] mx-auto">
            <div onClick={() => setSelectedCountry(null)} className="inline-flex items-center gap-1.5 font-montserrat text-[13px] font-semibold text-brand-orange cursor-pointer mb-8 transition-all hover:gap-2.5">
              <ChevronLeft size={16} /> Back to All Countries
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl leading-none">{countryData.flag}</div>
              <div>
                <div className="font-montserrat text-3xl md:text-4xl font-black text-brand-blue">MBBS in {countryData.name}</div>
                <div className="text-sm text-[#7a8baa] mt-1">{countryData.recognition}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-[11px] text-[#7a8baa] font-semibold uppercase tracking-wide mb-1.5">Total Fee</div>
                <div className="font-montserrat text-lg font-extrabold text-brand-orange">{countryData.fee}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-[11px] text-[#7a8baa] font-semibold uppercase tracking-wide mb-1.5">Duration</div>
                <div className="font-montserrat text-lg font-extrabold text-brand-blue">{countryData.duration}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-[11px] text-[#7a8baa] font-semibold uppercase tracking-wide mb-1.5">Living Cost</div>
                <div className="font-montserrat text-lg font-extrabold text-brand-blue">{countryData.livingCost}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-[11px] text-[#7a8baa] font-semibold uppercase tracking-wide mb-1.5">Medium</div>
                <div className="font-montserrat text-lg font-extrabold text-brand-blue">{countryData.language}</div>
              </div>
            </div>

            <div className="mb-10">
              <div className="font-montserrat text-xl font-extrabold text-brand-blue mb-4">Partner Universities</div>
              <div className="flex flex-col gap-2.5">
                {countryData.topUnis.map((uni) => (
                  <div key={uni} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-light shrink-0" />
                    <div className="text-[15px] font-semibold text-brand-blue">{uni}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-[#152448] rounded-2xl p-8 text-center">
              <div className="font-montserrat text-xl font-extrabold text-white mb-2">Ready to Study in {countryData.name}?</div>
              <div className="text-sm text-white/60 mb-5">Get free counseling and start your application today</div>
              <div className="flex justify-center gap-3 flex-wrap">
                <button onClick={() => { setPage("apply"); window.scrollTo(0, 0) }} className="bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-[13px] font-bold py-3 px-7 rounded-full tracking-wide">
                  Apply Now
                </button>
                <a href="https://wa.me/918796942407" target="_blank" rel="noreferrer" className="border-2 border-white/20 text-white font-montserrat text-[13px] font-bold py-2.5 px-7 rounded-full tracking-wide">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 px-5 sm:px-12 bg-white animate-fade-in">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((c) => (
              <div key={c.slug} onClick={() => setSelectedCountry(c.slug)} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm cursor-pointer transition-all hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-orange group">
                <div className="text-5xl mb-4 leading-none">{c.flag}</div>
                <div className="font-montserrat text-2xl font-extrabold text-brand-blue mb-2">{c.name}</div>
                <div className="text-sm text-[#5a6a8a] leading-relaxed mb-4">{c.desc}</div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-[11px] text-[#7a8baa] font-semibold uppercase tracking-wide mb-1">Fee Range</div>
                    <div className="font-montserrat text-sm font-bold text-brand-orange">{c.fee}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-[11px] text-[#7a8baa] font-semibold uppercase tracking-wide mb-1">Duration</div>
                    <div className="font-montserrat text-sm font-bold text-brand-blue">{c.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-montserrat text-[13px] font-bold text-brand-orange group-hover:gap-2.5 transition-all">
                  View Details <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
