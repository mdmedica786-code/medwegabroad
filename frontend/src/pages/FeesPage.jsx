import { countries, feeInclusions } from '../data/constants'

export default function FeesPage({ setPage }) {
  return (
    <div>
      <section className="pt-[140px] px-5 sm:px-12 pb-20 bg-gradient-to-br from-[#031B33] to-[#0A4A7A] text-center animate-fade-in">
        <div className="font-montserrat text-[11px] font-bold text-brand-gold tracking-[4px] uppercase mb-3">Transparent Pricing</div>
        <div className="font-montserrat text-3xl md:text-5xl font-black text-white leading-tight">
          Fee <span className="font-playfair italic text-brand-gold-light">Structure</span>
        </div>
      </section>

      <div className="h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />

      <section className="py-16 px-5 sm:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-brand-blue">
                  <th className="p-4 text-left font-montserrat text-[13px] font-bold text-brand-gold-light tracking-wide">Country</th>
                  <th className="p-4 text-left font-montserrat text-[13px] font-bold text-brand-gold-light tracking-wide">Fee Range</th>
                  <th className="p-4 text-left font-montserrat text-[13px] font-bold text-brand-gold-light tracking-wide">Duration</th>
                  <th className="p-4 text-left font-montserrat text-[13px] font-bold text-brand-gold-light tracking-wide">Living Cost</th>
                  <th className="p-4 text-left font-montserrat text-[13px] font-bold text-brand-gold-light tracking-wide">Medium</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((item, i) => (
                  <tr key={i} className="border-b border-gray-100 bg-white">
                    <td className="p-4 font-bold text-brand-blue text-sm">
                      <span className="mr-2">{item.flag}</span>{item.name}
                    </td>
                    <td className="p-4 font-montserrat font-bold text-brand-orange text-sm">{item.fee}</td>
                    <td className="p-4 text-[#5a6a8a] text-sm">{item.duration}</td>
                    <td className="p-4 text-[#5a6a8a] text-sm">{item.livingCost}</td>
                    <td className="p-4 text-[#5a6a8a] text-sm">{item.language}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <div className="font-montserrat text-xl font-extrabold text-brand-blue mb-5">What's Included</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {feeInclusions.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-light shrink-0" />
                  <span className="text-sm font-semibold text-brand-blue">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-br from-brand-orange/5 to-brand-orange-light/5 rounded-2xl p-8 border border-brand-orange/10 text-center">
            <div className="font-montserrat text-lg font-extrabold text-brand-blue mb-2">Need a Detailed Fee Breakdown?</div>
            <div className="text-sm text-[#5a6a8a] mb-5">Contact us for a personalized fee structure based on your preferred university</div>
            <a href="https://wa.me/918796942407" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-[13px] font-bold py-3 px-7 rounded-full tracking-wide">
              Get Fee Details on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
