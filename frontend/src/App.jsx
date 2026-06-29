import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CountriesPage from './pages/CountriesPage'
import ServicesPage from './pages/ServicesPage'
import FeesPage from './pages/FeesPage'
import ContactPage from './pages/ContactPage'
import ApplyPage from './pages/ApplyPage'
import BlogPage from './pages/BlogPage'
import AdminPage from './pages/AdminPage'

export default function App() {
  const [page, setPage] = useState("home")
  const [selectedCountry, setSelectedCountry] = useState(null)

  return (
    <div className="font-sans antialiased text-gray-900 selection:bg-brand-orange/20 selection:text-brand-blue overflow-x-hidden">
      {page !== "admin" && <Navbar page={page} setPage={setPage} />}
      
      <main className="min-h-screen">
        {page === "home" && <HomePage setPage={setPage} setSelectedCountry={setSelectedCountry} />}
        {page === "about" && <AboutPage setPage={setPage} />}
        {page === "countries" && <CountriesPage setPage={setPage} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />}
        {page === "services" && <ServicesPage setPage={setPage} />}
        {page === "fees" && <FeesPage setPage={setPage} />}
        {page === "contact" && <ContactPage setPage={setPage} />}
        {page === "apply" && <ApplyPage setPage={setPage} />}
        {page === "blog" && <BlogPage />}
        {page === "admin" && <AdminPage />}
      </main>

      {page !== "admin" && <Footer setPage={setPage} />}
      {page !== "admin" && <WhatsAppFAB />}
    </div>
  )
}
