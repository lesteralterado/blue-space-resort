import { useState, useEffect } from 'preact/hooks'
import { motion } from 'framer-motion'

export default function BackToTop(): preact.JSX.Element {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      className={`fixed bottom-8 right-8 p-3 bg-teal-600 text-white rounded-full shadow-lg z-30 ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
  whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
  transition={{ duration: 0.35, ease: [0.22, 0.8, 0.2, 1] }}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M12 19V6" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </motion.button>
  )
}