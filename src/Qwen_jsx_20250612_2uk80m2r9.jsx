import React from 'react';

export default function App() {
  // Galéria képek listája
  const images = [
    "https://i.ibb.co/938kW7Ld/1-exterior-view.jpg",   // Exterior View
    "https://i.ibb.co/gbDfTVC8/2-living-room.jpg",   // Living Room
    "https://i.ibb.co/hxGP8hZh/3-kitchen.jpg",   // Kitchen
    "https://i.ibb.co/L48PkCH/4-bedroom.jpg",   // Bedroom
    "https://i.ibb.co/XZyCqHFY/5-bathroom.jpg",   // Bathroom
    "https://i.ibb.co/fz0qQ8Kk/6-pool-area.jpg",   // Pool Area
    "https://i.ibb.co/d0pwWFV3/7-terrace-night.jpg",   // Terrace at Night
    "https://i.ibb.co/Gf2fFKfb/8-indoor-outdoor-kitchen.jpg"   // Indoor-Outdoor Kitchen
  ];

  // Hero Section háttérkép
  const heroImageUrl = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/694268187.jpg?k=5c461c7870663482abaad22a25d739414c6d624163c6762904449f3aa2d65efc&o=";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600">Casa Blu Marbella</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-blue-500 transition">About</a> 
            <a href="#amenities" className="hover:text-blue-500 transition">Amenities</a>
            <a href="#gallery" className="hover:text-blue-500 transition">Gallery</a>
            <a href="#location" className="hover:text-blue-500 transition">Location</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 pb-12 bg-gradient-to-t from-white via-white/90 to-transparent">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white p-6 rounded-lg shadow-lg inline-block mx-auto border border-gray-200">
              <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">Welcome to Casa Blu</h2>
              <p className="text-gray-700 text-lg md:text-xl">Luxury holiday home in the heart of Marbella with private pool and sea views</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">About Casa Blu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Casa Blu Marbella is a recently renovated holiday home where guests can make the most of its outdoor swimming pool,
                free WiFi, water sports facilities, and garden. This modern holiday home offers air-conditioned accommodation with a balcony.
                The property provides barbecue facilities and on-site parking for a comfortable stay.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Private entrance & allergy-free environment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  4 spacious bedrooms and 4 bathrooms
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Fully equipped kitchen with dishwasher & oven
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Sea-view terrace & flat-screen TV
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Complimentary wine, champagne, chocolates & cookies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Outdoor Facilities</h3>
              <p>Enjoy our private swimming pool, garden, and barbecue area perfect for relaxing or entertaining.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Comfort & Convenience</h3>
              <p>Air conditioning, free WiFi, and on-site parking ensure a comfortable and hassle-free stay.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Activities</h3>
              <p>Try windsurfing, fishing, or explore nearby golf courses like La Cala Golf just 9 km away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Csak hoverre van effekt */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Photo Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:ring-2 hover:ring-blue-500 hover:scale-105"
              >
                <img src={src} alt={`Gallery image ${index + 1}`} className="w-full aspect-square object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Casa Blu Marbella is ideally located near some of the region's best attractions:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Playa de Artola - 1.1 km away
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  La Cala Golf - 9 km away
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Malaga Airport - 42 km away
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Find Us</h3>
              <div className="h-64 w-full rounded-lg overflow-hidden shadow-inner">
                <iframe
                  title="Google Map of Casa Blu"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=Urbanización%20Pueblo%20Andaluz%20160%2C%20Marbella&output=embed"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience Casa Blu?</h2>
          <p className="mb-6 text-lg">Book your luxury holiday home today!</p>
          <a 
            href="https://www.booking.com/hotel/es/casa-blu-marbella.hu.html?label=duc511jc-1DCAsoRkIRY2FzYS1ibHUtbWFyYmVsbGFIMVgDaGeIAQGYARHIARe4ARXYAQPoAQGIAgGoAgO4AvjHqsIGwAIB0gIkNTFhOWVlMWUtYjIwZC00MDBlLWJhZDYtNjc0NDE5YzQ0NDhk2AIE4AIB&sid=4ccb21b378a5269c4804581c730b5756&aid=390156&ucfs=1&arphpl=1&dest_id=-391076&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=5aba49ef3a1a05df&srepoch=1749724271&from=searchresults" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 no-underline transform hover:-translate-y-1 hover:shadow-xl"
          >
            Book Now on Booking.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Casa Blu Marbella. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed with love for unforgettable stays.</p>
        </div>
      </footer>
    </div>
  );
}