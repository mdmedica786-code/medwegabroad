import { Instagram, Facebook, Youtube } from 'lucide-react'
import Logo from './Logo'

export default function Footer({ setPage }) {
  const navigate = (pg) => {
    setPage(pg)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-brand-blue pt-16 px-5 sm:px-12 relative">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10">
        <div>
          <div className="mb-4 -ml-4">
            <Logo />
          </div>
          <div className="text-[13px] text-[#c8d7ff]/50 leading-relaxed">
            Your trusted partner for MBBS abroad admissions. NMC &amp; WHO recognized universities at affordable fees.
          </div>
        </div>
        <div>
          <div className="font-montserrat text-[13px] font-bold text-brand-gold tracking-[2px] uppercase mb-4">
            Quick Links
          </div>
          <div className="flex flex-col gap-2.5">
            {["home", "about", "countries", "services", "fees"].map((item) => (
              <span
                key={item}
                onClick={() => navigate(item)}
                className="text-[13px] text-[#c8d7ff]/60 cursor-pointer transition-colors hover:text-white capitalize"
              >
                {item === "fees" ? "Fee Structure" : item === "about" ? "About Us" : item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="font-montserrat text-[13px] font-bold text-brand-gold tracking-[2px] uppercase mb-4">
            Contact
          </div>
          <div className="flex flex-col gap-2.5">
            <a href="tel:+918796942407" className="text-[13px] text-[#c8d7ff]/60 transition-colors hover:text-white">
              +91-87969 42407
            </a>
            <a href="mailto:medwegabroad@gmail.com" className="text-[13px] text-[#c8d7ff]/60 transition-colors hover:text-white">
              medwegabroad@gmail.com
            </a>
            <span className="text-[13px] text-[#c8d7ff]/50">
              Khori Jamalpur, Dhauj<br />Faridabad – 121004
            </span>
          </div>
        </div>
        <div>
          <div className="font-montserrat text-[13px] font-bold text-brand-gold tracking-[2px] uppercase mb-4">
            Follow Us
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c8d7ff]/60 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c8d7ff]/60 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c8d7ff]/60 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center">
        <div className="text-xs text-[#c8d7ff]/35 tracking-wide">
          © 2026 MEDWEG. All Rights Reserved. | Leading Your Way
        </div>
      </div>
    </footer>
  )
}
