export default function ServiceFeatures() = {
    const services = [
    { icon: <Wifi className="w-8 h-8" />, title: "Free WiFi", description: "Stay connected with high-speed internet" },
    { icon: <Car className="w-8 h-8" />, title: "Valet Parking", description: "Complimentary valet service for all guests" },
    { icon: <Utensils className="w-8 h-8" />, title: "Fine Dining", description: "World-class cuisine and beach-side dining" },
    { icon: <Waves className="w-8 h-8" />, title: "Water Sports", description: "Snorkeling, surfing, and boat excursions" }
  ];
    
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resort Amenities</h2>
          <p className="text-xl text-gray-600">Everything you need for the perfect stay</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    )
}