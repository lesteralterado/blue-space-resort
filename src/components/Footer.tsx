export default function Footer(): preact.JSX.Element {
  return (
        <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-400">Ocean Resort</h3>
            <p className="text-gray-300">Your perfect beach getaway destination with luxury accommodations and world-class amenities.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                <span>123 Beach Paradise, Tropical Island</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92V21a1 1 0 01-1.11 1 19 19 0 01-8.63-3.07 19 19 0 01-6-6A19 19 0 012 3.11 1 1 0 013 2h4.09a1 1 0 01.95.68c.2.66.5 1.3.86 1.9a1 1 0 01-.24 1.09L7.91 7.91a15 15 0 006 6l1.24-1.24a1 1 0 011.09-.24c.6.36 1.24.66 1.9.86a1 1 0 01.68.95V21z"/></svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Reservations</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Special Offers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Activities</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Spa Services</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ocean Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}