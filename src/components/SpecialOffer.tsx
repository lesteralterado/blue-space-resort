export default function SpecialOffer(): preact.JSX.Element {
    const offers = [
    {
      id: 1,
      title: "Romantic Getaway",
      description: "Perfect for couples seeking a peaceful retreat",
      price: "$299/night",
      features: ["Ocean view room", "Couples spa treatment", "Private dinner"]
    },
    {
      id: 2,
      title: "Family Fun Package",
      description: "Adventure and relaxation for the whole family",
      price: "$199/night",
      features: ["Family suite", "Kids club access", "Water sports"]
    },
    {
      id: 3,
      title: "Adventure Week",
      description: "Seven days of thrilling beach activities",
      price: "$149/night",
      features: ["Surfing lessons", "Snorkeling tours", "Beach volleyball"]
    }
  ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
          <p className="text-xl text-gray-600">Exclusive packages designed for your perfect vacation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, _index) => (
            <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:scale-103 transition-transform duration-200" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="text-2xl font-bold text-teal-600 mb-4">{offer.price}</div>
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-coral-500 rounded-full mr-3" style={{ backgroundColor: '#ff6b6b' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}