export default function SpecialOffer() = {
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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
          <p className="text-xl text-gray-600">Exclusive packages designed for your perfect vacation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    )
}