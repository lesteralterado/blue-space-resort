export default function TestimonialSlider() = {
    const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      text: "The most relaxing vacation we've ever had. The staff was incredible and the views were breathtaking.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Los Angeles, CA",
      text: "Perfect for our family getaway. The kids loved the beach activities and we enjoyed the spa treatments.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami, FL",
      text: "An unforgettable experience! The sunset dinners and water sports made our honeymoon magical.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
    
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600">Real experiences from our valued guests</p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentSlide}
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <img
                src={testimonials[currentSlide].avatar}
                alt={testimonials[currentSlide].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><rect width="150" height="150" fill="#e5e7eb"/><text x="75" y="75" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial" font-size="60">${testimonials[currentSlide].name[0]}</text></svg>`)}`;
                }}
              />
              <h3 className="text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h3>
              <p className="text-gray-600">{testimonials[currentSlide].location}</p>
            </div>
            <blockquote className="text-lg text-gray-700 italic max-w-2xl mx-auto mb-8">
              "{testimonials[currentSlide].text}"
            </blockquote>
          </motion.div>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
    )
}