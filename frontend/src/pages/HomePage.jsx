import { useState, useEffect } from 'react'
import { MessageCircle, ArrowRight, ChevronRight, ChevronLeft, Phone, Instagram } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import { countries, whyChooseUs, testimonials } from '../data/constants'

function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section className="py-20 px-5 sm:px-12 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 font-montserrat text-[11px] font-bold text-brand-orange tracking-[4px] uppercase mb-2.5">
              <Instagram size={14} /> Follow Our Journey
            </div>
            <div className="font-montserrat text-3xl md:text-[40px] font-extrabold text-brand-blue leading-tight">
              Life at <span className="font-playfair italic text-brand-orange">Campus</span>
            </div>
          </div>
          <a
            href="https://instagram.com/medweg_abroad"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-montserrat text-xs font-bold py-2.5 px-6 rounded-full transition-transform hover:-translate-y-0.5"
          >
            @medweg_abroad
          </a>
        </div>
        <div className="w-full min-h-[350px]">
          <div className="elfsight-app-94086fe4-6fb0-4add-896b-80080a0b627a" data-elfsight-app-lazy></div>
        </div>
        <div className="mt-8 flex justify-center sm:hidden">
          <a
            href="https://instagram.com/medweg_abroad"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-montserrat text-xs font-bold py-2.5 px-6 rounded-full transition-transform hover:-translate-y-0.5"
          >
            Follow @medweg_abroad
          </a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage({ setPage, setSelectedCountry }) {
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToCountry = (slug) => {
    setSelectedCountry(slug)
    setPage("countries")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#031B33] via-[#0A4A7A] to-[#031B33] relative flex items-center justify-center overflow-hidden pt-24 pb-16 px-5 sm:px-12">
        <div className="absolute -top-30 -right-20 w-[500px] h-[500px] rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-30 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(206,159,67,0.05)_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none" />
        <div className="text-center relative z-10 max-w-[860px] w-full">
          <div className="font-caveat text-2xl md:text-3xl text-brand-orange-light mb-3 animate-fade-in-up">
            From Dream to Destination
          </div>
          <div className="font-montserrat text-6xl md:text-[116px] font-black tracking-tighter leading-none text-gradient-gold animate-fade-in-up [animation-delay:100ms]">
            MBBS
          </div>
          <div className="font-playfair text-4xl md:text-[80px] font-bold italic text-white leading-none -mt-1 md:-mt-4 animate-fade-in-up [animation-delay:200ms]">
            Abroad
          </div>
          <div className="font-sans text-sm md:text-lg text-white/70 mt-6 leading-relaxed animate-fade-in-up [animation-delay:300ms]">
            NMC &amp; WHO Recognized Universities
            <span className="inline-block w-1.5 h-1.5 bg-brand-gold rounded-full mx-3 align-middle" />
            Starting from <span className="text-brand-gold-light font-bold">₹15 Lakhs (Approx)</span>
          </div>
          <div className="inline-flex items-center gap-2.5 mt-4 px-5.5 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 animate-fade-in-up [animation-delay:350ms]">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse-glow" />
            <span className="font-montserrat text-xs font-bold text-[#e8d5a3] tracking-[2px]">ADMISSIONS OPEN 2026–27</span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-9 flex-wrap animate-fade-in-up [animation-delay:400ms]">
            <a
              href="https://wa.me/918796942407"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-br from-[#ce9f43] via-[#f5d880] to-[#b8860b] text-brand-blue font-montserrat text-sm font-extrabold tracking-wide shadow-[0_8px_30px_rgba(206,159,67,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(206,159,67,0.35)] transition-all"
            >
              <MessageCircle size={18} fill="currentColor" />Book Free Consultation
            </a>
            <button
              onClick={() => { setPage("apply"); window.scrollTo(0, 0) }}
              className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full border-2 border-white/25 text-white font-montserrat text-sm font-bold tracking-wide bg-white/5 backdrop-blur-md hover:border-white/50 hover:bg-white/10 transition-all"
            >
              Apply Now<ArrowRight size={16} />
            </button>
          </div>
          <div className="flex justify-center gap-7 mt-12 animate-fade-in-up [animation-delay:550ms]">
            {[{ f: "🇺🇿", n: "Uzbekistan" }, { f: "🇰🇿", n: "Kazakhstan" }, { f: "🇰🇬", n: "Kyrgyzstan" }, { f: "🇷🇺", n: "Russia" }].map((c) => (
              <div key={c.n} className="text-center">
                <div className="text-3xl leading-none">{c.f}</div>
                <div className="text-[10px] text-white/50 mt-1.5 font-medium tracking-wide">{c.n}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-float flex flex-col items-center gap-1.5">
          <span className="text-[9px] text-white/40 tracking-[3px] font-semibold">SCROLL</span>
          <ChevronRight size={18} className="text-white/40 rotate-90" />
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />

      {/* Stats Bar */}
      <section className="py-14 px-5 sm:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="font-montserrat text-4xl md:text-5xl font-black text-brand-blue leading-none">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-[#7a8baa] mt-2 tracking-wider uppercase">Students Placed</div>
          </div>
          <div className="p-3">
            <div className="font-montserrat text-4xl md:text-5xl font-black text-brand-blue leading-none">
              <AnimatedCounter end={4} />
            </div>
            <div className="text-xs font-semibold text-[#7a8baa] mt-2 tracking-wider uppercase">Countries</div>
          </div>
          <div className="p-3">
            <div className="font-montserrat text-4xl md:text-5xl font-black text-brand-blue leading-none">
              <AnimatedCounter end={15} prefix="₹" suffix="L" />
            </div>
            <div className="text-xs font-semibold text-[#7a8baa] mt-2 tracking-wider uppercase">Starting Fee</div>
          </div>
          <div className="p-3">
            <div className="font-montserrat text-4xl md:text-5xl font-black text-brand-blue leading-none">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-xs font-semibold text-[#7a8baa] mt-2 tracking-wider uppercase">NMC Approved</div>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-12 px-5 sm:px-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-brand-blue mb-4">
            Your Trusted Partner for MBBS Abroad
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Are you an ambitious Indian medical aspirant dreaming of becoming a successful doctor? Welcome to <strong>MEDWEG</strong>, India's most trusted and reliable educational consultancy for pursuing <strong>MBBS abroad</strong>. We specialize in securing guaranteed admissions for Indian students in top-ranked, <strong>NMC Approved</strong> and WHO-recognized medical universities across Uzbekistan, Kazakhstan, Kyrgyzstan, and Russia.
            <br /><br />
            At MEDWEG, we believe that high-quality medical education should be accessible and affordable. That is why we proudly operate on a strict <strong>"No Donation"</strong> and "No Hidden Charges" policy. With highly affordable fee structures starting from just ₹15 Lakhs, English-medium curriculums, world-class clinical infrastructure, and comprehensive FMGE/NEXT coaching support, studying MBBS abroad has never been safer or more achievable. From university selection and visa processing to flight bookings and hostel placements with Indian food, MEDWEG provides end-to-end support to ensure your journey from India to an international medical campus is completely seamless.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-5 sm:px-12 bg-brand-blue relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[80px] pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="font-montserrat text-[11px] font-bold text-brand-gold tracking-[4px] uppercase mb-2.5">Why Choose Us</div>
            <div className="font-montserrat text-3xl md:text-[40px] font-extrabold text-white leading-tight">
              Why <span className="text-brand-gold">MEDWEG</span>?
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white/5 border border-brand-gold/15 rounded-2xl p-8 pb-6 relative overflow-hidden transition-all duration-300 hover:border-brand-gold/40 hover:bg-white/10 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/35 to-transparent" />
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4.5">
                  {item.icon}
                </div>
                <div className="font-montserrat text-base font-bold text-white mb-2">{item.title}</div>
                <div className="text-sm text-[#c8d7ff]/60 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 px-5 sm:px-12 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-montserrat text-[11px] font-bold text-brand-orange tracking-[4px] uppercase mb-2.5">Study Destinations</div>
            <div className="font-montserrat text-3xl md:text-[40px] font-extrabold text-brand-blue leading-tight">
              Choose Your <span className="font-playfair italic text-brand-orange">Destination</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {countries.map((c) => (
              <div
                key={c.slug}
                onClick={() => goToCountry(c.slug)}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-orange relative overflow-hidden group"
              >
                <div className="text-5xl mb-4 leading-none">{c.flag}</div>
                <div className="font-montserrat text-lg font-extrabold text-brand-blue mb-1.5">{c.name}</div>
                <div className="text-[13px] text-[#7a8baa] leading-relaxed mb-3">{c.universities}</div>
                <div className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-4">
                  <span className="font-montserrat text-[13px] font-bold text-brand-orange">{c.fee}</span>
                </div>
                <div className="flex items-center gap-1 mt-2 font-montserrat text-xs font-semibold text-brand-orange tracking-wide group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Testimonials */}
      <section className="py-20 px-5 sm:px-12 bg-gray-50">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-montserrat text-[11px] font-bold text-brand-gold tracking-[4px] uppercase mb-2.5">Testimonials</div>
            <div className="font-montserrat text-3xl md:text-[40px] font-extrabold text-brand-blue leading-tight">
              What Our <span className="font-playfair italic text-brand-gold">Students</span> Say
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 relative border border-gray-100 min-h-[220px] shadow-sm">
            <div className="absolute top-5 left-8 font-playfair text-7xl text-brand-gold/15 leading-none">"</div>
            <div className="relative z-10">
              <div className="text-base md:text-lg text-[#3d4e70] leading-relaxed italic mb-6 min-h-[80px]">
                {testimonials[testimonialIdx].text}
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-light-blue flex items-center justify-center font-montserrat text-base font-bold text-brand-gold-light">
                  {testimonials[testimonialIdx].initials}
                </div>
                <div>
                  <div className="font-montserrat text-[15px] font-bold text-brand-blue">{testimonials[testimonialIdx].name}</div>
                  <div className="text-xs text-[#7a8baa] mt-0.5">{testimonials[testimonialIdx].university}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-7">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${i === testimonialIdx ? "bg-brand-orange" : "bg-brand-blue/15 hover:bg-brand-blue/30"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 rounded-full border border-[#dde2ea] flex items-center justify-center transition-all hover:border-brand-blue hover:bg-gray-100 text-brand-blue"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}
                  className="w-9 h-9 rounded-full border border-[#dde2ea] flex items-center justify-center transition-all hover:border-brand-blue hover:bg-gray-100 text-brand-blue"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-5 sm:px-12 bg-gradient-to-br from-brand-blue to-[#152448] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />
        <div className="absolute -top-15 -right-10 w-[300px] h-[300px] rounded-full bg-brand-orange/10 blur-[60px] pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <div className="font-montserrat text-3xl md:text-5xl font-black text-white leading-tight mb-2">
            Admissions Open <span className="text-brand-orange-light">2026–27</span>
          </div>
          <div className="font-playfair text-lg md:text-xl italic text-white/60 mb-8">
            Secure your seat at an NMC-approved university today
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:+918796942407"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-sm font-bold shadow-[0_6px_24px_rgba(233,81,36,0.3)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={18} />+91-87969 42407
            </a>
            <a
              href="https://wa.me/918796942407"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border-2 border-white/20 text-white font-montserrat text-sm font-bold transition-all hover:border-white/50 hover:bg-white/5"
            >
              <MessageCircle size={18} />WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
