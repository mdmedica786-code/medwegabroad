import { useState, useEffect } from 'react'

export default function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) window.requestAnimationFrame(animate)
    }
    window.requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{prefix}{count}{suffix}</span>
}
