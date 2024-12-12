import React, { useState, useEffect } from 'react';
import { MobileHeader } from './components/MobileHeader';
import { BottomNav } from './components/BottomNav';
import { MobileProductCard } from './components/MobileProductCard';
import { MobileOfferCard } from './components/MobileOfferCard';
import { Popup } from './components/Popup';
import { products } from './data/products';
import { offers } from './data/offers';
import { reviews } from './data/reviews';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handlePopupSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <MobileHeader />

      <main className="px-4 py-4">
        {/* Hero Section */}
        <section className="mb-8 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">
            100% Authentic Beauty Products
          </h1>
          <p className="text-sm opacity-90 mb-4">
            Your trusted source for genuine premium cosmetics
          </p>
          <button 
            onClick={() => setShowPopup(true)}
            className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-medium"
          >
            Explore Now
          </button>
        </section>

        {/* Products Section */}
        <section id="products" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Original Products</h2>
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <MobileProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Offers Section */}
        <section id="offers" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Latest Offers</h2>
          <div className="space-y-4">
            {offers.map((offer) => (
              <MobileOfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
      
      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSubmit={handlePopupSubmit}
      />
    </div>
  );
}

export default App;