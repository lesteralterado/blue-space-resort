import { useState } from 'preact/hooks'

export default function Header(): preact.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-teal-600">Ocean Resort</div>
            
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Offers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Gallery</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Amenities</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a></li>
              </ul>
            </nav>

            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="bg-white w-64 h-full p-4" onClick={(e) => e.stopPropagation()}>
            <button className="mb-4" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">Close</button>
            <nav>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-700 hover:text-teal-600">Home</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600">Offers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600">Gallery</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600">Amenities</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
    )
}