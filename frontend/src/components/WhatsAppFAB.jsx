import { MessageCircle } from 'lucide-react'

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/918796942407"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[998] w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)]"
    >
      <MessageCircle size={28} />
    </a>
  )
}
