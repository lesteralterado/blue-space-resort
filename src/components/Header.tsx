export default function Header() = {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
    )
}