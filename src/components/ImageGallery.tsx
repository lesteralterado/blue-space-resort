export default function ImageGallery(): preact.JSX.Element {
    const images = [
    { id: 1, src: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#0d9488"/><text x="200" y="150" text-anchor="middle" fill="white" font-family="Arial" font-size="16">Beach View</text></svg>')}`, alt: "Beach View" },
    { id: 2, src: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#0891b2"/><text x="200" y="200" text-anchor="middle" fill="white" font-family="Arial" font-size="16">Pool Area</text></svg>')}`, alt: "Pool Area" },
    { id: 3, src: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><rect width="400" height="250" fill="#06b6d4"/><text x="200" y="125" text-anchor="middle" fill="white" font-family="Arial" font-size="16">Restaurant</text></svg>')}`, alt: "Restaurant" },
    { id: 4, src: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350"><rect width="400" height="350" fill="#0e7490"/><text x="200" y="175" text-anchor="middle" fill="white" font-family="Arial" font-size="16">Spa</text></svg>')}`, alt: "Spa" },
    { id: 5, src: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#155e75"/><text x="200" y="150" text-anchor="middle" fill="white" font-family="Arial" font-size="16">Sunset View</text></svg>')}`, alt: "Sunset View" },
    { id: 6, src: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><rect width="400" height="320" fill="#164e63"/><text x="200" y="160" text-anchor="middle" fill="white" font-family="Arial" font-size="16">Activities</text></svg>')}`, alt: "Activities" }
  ];
    
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">Experience the beauty of our resort</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, _index) => (
            <div key={image.id} className="break-inside-avoid hover:scale-102 transition-transform duration-300" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-lg shadow-md transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}