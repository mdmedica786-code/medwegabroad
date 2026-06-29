import { useState } from 'react'
import { Phone, Mail, MessageCircle, MapPin, Instagram, CheckCircle2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your Name, Email, and Phone Number.")
      return
    }
    setLoading(true)
    try {
      const templateParams = {
        subject: "New Contact Request from Website!",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        message: formData.message,
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setSubmitted(true)
    } catch (err) {
      console.error("Submission error:", err)
      alert("There was a network error. Please check your EmailJS configuration or contact us on WhatsApp.")
    }
    setLoading(false)
  }

  return (
    <div>
      <section className="pt-[140px] px-5 sm:px-12 pb-20 bg-gradient-to-br from-[#031B33] to-[#0A4A7A] text-center animate-fade-in">
        <div className="font-montserrat text-[11px] font-bold text-brand-gold tracking-[4px] uppercase mb-3">Get In Touch</div>
        <div className="font-montserrat text-3xl md:text-5xl font-black text-white leading-tight">
          Contact <span className="font-playfair italic text-brand-gold-light">Us</span>
        </div>
      </section>

      <div className="h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />

      <section className="py-16 px-5 sm:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="font-montserrat text-2xl font-extrabold text-brand-blue mb-6">Send a Message</div>
            
            {submitted ? (
              <div className="bg-brand-orange/5 border border-brand-orange/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-brand-orange" />
                </div>
                <div className="font-montserrat text-xl font-bold text-brand-blue mb-2">Message Sent!</div>
                <div className="text-sm text-[#5a6a8a]">Thank you for reaching out. Our team will get back to you shortly.</div>
                <button onClick={() => setSubmitted(false)} className="mt-6 border-2 border-[#dde2ea] text-[#5a6a8a] font-montserrat text-sm font-bold py-2 px-6 rounded-full">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Country of Interest</label>
                  <select name="country" value={formData.country} onChange={handleChange} className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue cursor-pointer">
                    <option value="">Select a country</option>
                    <option value="Uzbekistan">🇺🇿 Uzbekistan</option>
                    <option value="Kazakhstan">🇰🇿 Kazakhstan</option>
                    <option value="Kyrgyzstan">🇰🇬 Kyrgyzstan</option>
                    <option value="Russia">🇷🇺 Russia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your requirements..." className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm resize-y bg-white text-brand-blue font-sans" />
                </div>
                <button type="submit" disabled={loading} className="bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-sm font-bold py-3.5 px-7 rounded-full text-center tracking-wide shadow-[0_4px_15px_rgba(233,81,36,0.3)] mt-1 transition-all hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(233,81,36,0.4)] disabled:opacity-70">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
          <div>
            <div className="font-montserrat text-2xl font-extrabold text-brand-blue mb-6">Contact Information</div>
            <div className="flex flex-col gap-5">
              <a href="tel:+918796942407" className="flex items-center gap-3.5 no-underline p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-brand-orange hover:bg-brand-orange/5">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#7a8baa] uppercase tracking-wide mb-0.5">Phone</div>
                  <div className="text-[15px] font-bold text-brand-blue">+91-87969 42407</div>
                </div>
              </a>
              <a href="mailto:medwegabroad@gmail.com" className="flex items-center gap-3.5 no-underline p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-brand-orange hover:bg-brand-orange/5">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#7a8baa] uppercase tracking-wide mb-0.5">Email</div>
                  <div className="text-[15px] font-bold text-brand-blue">medwegabroad@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/918796942407" target="_blank" rel="noreferrer" className="flex items-center gap-3.5 no-underline p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-[#25d366] hover:bg-[#25d366]/5">
                <div className="w-11 h-11 rounded-xl bg-[#25d366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-[#25d366]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#7a8baa] uppercase tracking-wide mb-0.5">WhatsApp</div>
                  <div className="text-[15px] font-bold text-brand-blue">Chat with us</div>
                </div>
              </a>
              <div className="flex items-start gap-3.5 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#7a8baa] uppercase tracking-wide mb-0.5">Office</div>
                  <div className="text-sm font-semibold text-brand-blue leading-relaxed">
                    Khori Jamalpur, Dhauj<br />Faridabad – 121004
                  </div>
                </div>
              </div>
              <a href="https://instagram.com/medweg_abroad" target="_blank" rel="noreferrer" className="flex items-center gap-3.5 no-underline p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-brand-orange">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 flex items-center justify-center shrink-0">
                  <Instagram size={20} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#7a8baa] uppercase tracking-wide mb-0.5">Instagram</div>
                  <div className="text-[15px] font-bold text-brand-blue">@medweg_abroad</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-10 px-5 sm:px-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-montserrat text-2xl font-extrabold text-brand-blue mb-6 text-center">Visit Our Office</div>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.6501919629222!2d77.28992209273974!3d28.330543137648657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbde3c76c277%3A0x35227718bc56f9b4!2sJK%20CLINIC!5e0!3m2!1sen!2sus!4v1782720243502!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center mt-4 text-sm text-[#5a6a8a] font-medium">
            JK Clinic, Khori Jamalpur, Dhauj, Faridabad - 121004
          </div>
        </div>
      </section>
    </div>
  )
}
