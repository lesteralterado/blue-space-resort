export default function ServiceFeatures(): preact.JSX.Element {
  const services = [
    { icon: 'wifi', title: 'Free WiFi', description: 'Stay connected with high-speed internet' },
    { icon: 'car', title: 'Valet Parking', description: 'Complimentary valet service for all guests' },
    { icon: 'utensils', title: 'Fine Dining', description: 'World-class cuisine and beach-side dining' },
    { icon: 'waves', title: 'Water Sports', description: 'Snorkeling, surfing, and boat excursions' }
  ];
    
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resort Amenities</h2>
          <p className="text-xl text-gray-600">Everything you need for the perfect stay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-4">
                {/* simple icon placeholders */}
                {service.icon === 'wifi' && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12.55a11 11 0 0114 0"/><path d="M8.5 15.03a7 7 0 016.99 0"/><path d="M12 18.5a3 3 0 013 0"/></svg>
                )}
                {service.icon === 'car' && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="6" rx="2"/><path d="M5 11V8a3 3 0 013-3h8a3 3 0 013 3v3"/></svg>
                )}
                {service.icon === 'utensils' && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 2v11"/><path d="M12 2v11"/><path d="M17 2v11"/><path d="M2 20h20"/></svg>
                )}
                {service.icon === 'waves' && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12c4 0 4-4 8-4s4 4 8 4 4-4 8-4"/></svg>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}