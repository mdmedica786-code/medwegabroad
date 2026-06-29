import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "Home", pg: "home" },
    { label: "About", pg: "about" },
    { label: "Countries", pg: "countries" },
    { label: "Services", pg: "services" },
    { label: "Fees", pg: "fees" },
    { label: "Blog", pg: "blog" },
    { label: "Contact", pg: "contact" },
  ]

  const navigate = (pg) => {
    setPage(pg)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1000] h-[80px] flex items-center justify-between px-4 md:px-12 transition-all duration-300 ${scrolled ? "bg-brand-blue/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-3"}`}>
        <div className="flex items-center gap-2 cursor-pointer mt-1" onClick={() => navigate("home")}>
          <Logo />
        </div>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <span
              key={item.pg}
              onClick={() => navigate(item.pg)}
              className={`font-montserrat text-[13px] font-semibold cursor-pointer tracking-wide py-1.5 border-b-2 transition-all duration-200 hover:text-brand-orange-light ${page === item.pg ? "text-brand-orange-light border-brand-orange-light" : "text-white/85 border-transparent"}`}
            >
              {item.label}
            </span>
          ))}
        </div>
        <div className="hidden md:flex items-center">
          <div
            onClick={() => navigate("apply")}
            className="bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-xs font-bold py-2.5 px-6 rounded-full cursor-pointer tracking-widest shadow-[0_4px_15px_rgba(233,81,36,0.3)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(233,81,36,0.4)]"
          >
            APPLY NOW
          </div>
        </div>
        <div className="md:hidden cursor-pointer p-2 flex items-center justify-center text-white" onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[1001] bg-[#031B33]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-7 animate-fade-in">
          <div className="absolute top-5 right-5 p-2 cursor-pointer text-white" onClick={() => setMobileOpen(false)}>
            <X size={32} />
          </div>
          {navItems.map((item) => (
            <span
              key={item.pg}
              onClick={() => navigate(item.pg)}
              className={`font-montserrat text-lg font-bold cursor-pointer tracking-widest ${page === item.pg ? "text-brand-orange-light" : "text-white"}`}
            >
              {item.label}
            </span>
          ))}
          <div
            onClick={() => navigate("apply")}
            className="bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-sm font-bold py-3.5 px-10 rounded-full cursor-pointer tracking-widest mt-3"
          >
            APPLY NOW
          </div>
        </div>
      )}
    </>
  )
}
