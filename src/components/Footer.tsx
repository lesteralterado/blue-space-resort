export default function Footer() = {
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
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Beach Paradise, Tropical Island</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
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