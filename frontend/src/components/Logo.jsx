export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className} scale-90 sm:scale-100 origin-left`}>
      <img
        src="/logo.png"
        alt="MEDWEG - Leading Your Way"
        className="h-[80px] w-auto object-contain drop-shadow-lg"
      />
    </div>
  )
}
