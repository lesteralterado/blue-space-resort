import { motion } from 'framer-motion'

export default function HeroSection(): preact.JSX.Element {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBiY2Q0IiBzdG9wLW9wYWNpdHk9IjAuOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA2Yjc5YSIgc3RvcC1vcGFjaXR5PSIwLjYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI2JnKSIvPjx3YXZlcyBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiPjxwYXRoIGQ9Ik0wLDY0TDQ4LDk2Qzk2LDEyOCwxOTIsMTkyLDI4OCwxOTJDMzg0LDE5Miw0ODAsMTI4LDU3Niw5NkM2NzIsNjQsNzY4LDY0LDg2NCw4NkM5NjAsMTA3LDEwNTYsMTQ5LDExNTIsMTYwQzEyNDgsMTcxLDEzNDQsMTQ5LDE0NDAsMTE3QzE1MzYsODUsMTYzMiw0MywxNzI4LDU5QzE4MjQsNzUsMTkyMCwxNDksMTk2NiwxODZMMjAxMiwxOTJWMjU2SDBaIi8+PC93YXZlcz48L3N2Zz4=')`
        }}
      />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
  <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}>Paradise Awaits</motion.h1>

  <motion.p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-100" initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}>Discover your perfect escape at our luxury beach resort where crystal-clear waters meet endless relaxation</motion.p>

  <motion.button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#ff6b6b' }} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.32, ease: [0.2, 0.8, 0.2, 1] }} whileHover={{ scale: 1.06, transition: { type: 'spring', stiffness: 360, damping: 20 } }} whileTap={{ scale: 0.96 }}>Book Your Stay</motion.button>
      </div>
      
      {/* Simple decorative wave */}
      <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,48 C240,168 480,0 720,48 C960,96 1200,16 1440,64 L1440 120 L0 120 Z" fill="rgba(255,255,255,0.12)" />
      </svg>
    </section>
  )
}