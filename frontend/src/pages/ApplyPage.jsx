import { useState } from 'react'
import { CheckCircle2, MessageCircle, ArrowRight, ChevronLeft, Loader2, Menu, X } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ApplyPage({ setPage }) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    academicScore: "",
    neetScore: "",
    preferredCountry: "",
    budget: "",
    session: "",
    source: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const steps = [
    { num: 1, label: "Personal" },
    { num: 2, label: "Academic" },
    { num: 3, label: "Additional" }
  ]

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your Name, Email, and Phone Number.")
      setStep(1)
      return
    }
    setLoading(true)
    try {
      const templateParams = {
        subject: "New MBBS Admission Application from Website!",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        academicScore: formData.academicScore,
        neetScore: formData.neetScore,
        preferredCountry: formData.preferredCountry,
        budget: formData.budget,
        session: formData.session,
        source: formData.source,
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
        <div className="font-montserrat text-[11px] font-bold text-brand-gold tracking-[4px] uppercase mb-3">Start Your Journey</div>
        <div className="font-montserrat text-3xl md:text-5xl font-black text-white leading-tight">
          Apply <span className="font-playfair italic text-brand-gold-light">Now</span>
        </div>
      </section>

      <div className="h-[3px] bg-gradient-to-r from-[#FFE62B] via-[#F89922] to-[#E95124]" />

      {submitted ? (
        <section className="py-20 px-5 sm:px-12 bg-white">
          <div className="max-w-[540px] mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={36} className="text-brand-orange" />
            </div>
            <div className="font-montserrat text-3xl font-black text-brand-blue mb-3">Application Submitted!</div>
            <div className="text-[15px] text-[#5a6a8a] leading-relaxed mb-7">
              Thank you for your interest in studying MBBS abroad with MEDWEG. Our counselor will contact you within 24 hours to discuss the next steps.
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://wa.me/918796942407" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25d366] text-white font-montserrat text-[13px] font-bold py-3 px-6 rounded-full no-underline">
                <MessageCircle size={18} fill="currentColor" /> Chat on WhatsApp
              </a>
              <button onClick={() => setPage("home")} className="border-2 border-[#dde2ea] text-brand-blue font-montserrat text-[13px] font-bold py-2.5 px-6 rounded-full">
                Back to Home
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 px-5 sm:px-12 bg-white">
          <div className="max-w-[640px] mx-auto">
            <div className="flex items-center justify-center mb-10">
              {steps.map((s, k) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-9 h-9 rounded-full font-montserrat text-sm font-bold flex items-center justify-center transition-all ${step >= s.num ? "bg-gradient-to-br from-brand-orange to-brand-orange-light text-white" : "bg-[#eef0f4] text-[#7a8baa]"}`}>
                      {s.num}
                    </div>
                    <div className={`text-[10px] font-semibold tracking-wide uppercase whitespace-nowrap ${step >= s.num ? "text-brand-orange" : "text-[#7a8baa]"}`}>
                      {s.label}
                    </div>
                  </div>
                  {k < steps.length - 1 && (
                    <div className={`w-10 h-[2px] mx-1 mb-5 ${step > s.num ? "bg-brand-orange" : "bg-[#dde2ea]"}`} />
                  )}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="animate-fade-in">
                <div className="font-montserrat text-xl font-extrabold text-brand-blue mb-6">Personal Details</div>
                <div className="flex flex-col gap-4">
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
                    <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Your city" className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue" />
                  </div>
                </div>
                <div className="flex justify-end mt-7">
                  <button onClick={() => setStep(2)} className="flex items-center gap-2 bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-sm font-bold py-3 px-8 rounded-full tracking-wide hover:-translate-y-px transition-transform">
                    Next <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <div className="font-montserrat text-xl font-extrabold text-brand-blue mb-6">Academic Details</div>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">12th Percentage / CGPA *</label>
                    <input type="text" name="academicScore" value={formData.academicScore} onChange={handleChange} placeholder="e.g. 85% or 8.5 CGPA" className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">NEET Score</label>
                    <input type="text" name="neetScore" value={formData.neetScore} onChange={handleChange} placeholder="Your NEET score (if applicable)" className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Preferred Country *</label>
                    <select name="preferredCountry" value={formData.preferredCountry} onChange={handleChange} className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue cursor-pointer">
                      <option value="">Select preferred country</option>
                      <option value="Uzbekistan">🇺🇿 Uzbekistan</option>
                      <option value="Kazakhstan">🇰🇿 Kazakhstan</option>
                      <option value="Kyrgyzstan">🇰🇬 Kyrgyzstan</option>
                      <option value="Russia">🇷🇺 Russia</option>
                      <option value="Not sure">Not sure — need guidance</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between mt-7">
                  <button onClick={() => setStep(1)} className="flex items-center gap-1.5 border-2 border-[#dde2ea] text-[#5a6a8a] font-montserrat text-sm font-bold py-2.5 px-6 rounded-full hover:border-brand-blue hover:text-brand-blue transition-colors">
                    <ChevronLeft size={16} /> Back
                  </button>
                  <button onClick={() => setStep(3)} className="flex items-center gap-2 bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-sm font-bold py-3 px-8 rounded-full tracking-wide hover:-translate-y-px transition-transform">
                    Next <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <div className="font-montserrat text-xl font-extrabold text-brand-blue mb-6">Additional Information</div>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue cursor-pointer">
                      <option value="">Select budget range</option>
                      <option value="₹15–20 Lakhs">₹15–20 Lakhs (Approx)</option>
                      <option value="₹20–25 Lakhs">₹20–25 Lakhs (Approx)</option>
                      <option value="₹25–30 Lakhs">₹25–30 Lakhs (Approx)</option>
                      <option value="₹30+ Lakhs">₹30+ Lakhs (Approx)</option>
                      <option value="Need guidance">Need guidance on budget</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Preferred Admission Session</label>
                    <select name="session" value={formData.session} onChange={handleChange} className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue cursor-pointer">
                      <option value="">Select session</option>
                      <option value="September 2026">September 2026</option>
                      <option value="January 2027">January 2027</option>
                      <option value="September 2027">September 2027</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">How did you hear about us?</label>
                    <select name="source" value={formData.source} onChange={handleChange} className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white text-brand-blue cursor-pointer">
                      <option value="">Select an option</option>
                      <option value="Instagram">Instagram</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Friend/Family">Friend/Family</option>
                      <option value="Billboard">Billboard</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#5a6a8a] mb-1.5">Any Questions or Comments</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Anything else you'd like us to know..." className="w-full p-3 border-1.5 border-[#dde2ea] rounded-xl text-sm resize-y bg-white text-brand-blue font-sans" />
                  </div>
                </div>
                <div className="flex justify-between mt-7">
                  <button onClick={() => setStep(2)} disabled={loading} className="flex items-center gap-1.5 border-2 border-[#dde2ea] text-[#5a6a8a] font-montserrat text-sm font-bold py-2.5 px-6 rounded-full hover:border-brand-blue hover:text-brand-blue transition-colors disabled:opacity-50">
                    <ChevronLeft size={16} /> Back
                  </button>
                  <button onClick={handleSubmit} disabled={loading} className="flex items-center gap-2 bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-sm font-bold py-3 px-8 rounded-full tracking-wide hover:-translate-y-px transition-transform disabled:opacity-70">
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
