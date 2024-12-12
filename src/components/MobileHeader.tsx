import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ShieldCheck className="h-6 w-6 text-green-600" />
            <span className="ml-2 text-lg font-bold text-gray-900">My Collection</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col py-2">
              <a 
                href="#products" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 active:bg-gray-100"
              >
                Products
              </a>
              <a 
                href="#offers" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 active:bg-gray-100"
              >
                Offers
              </a>
              <a 
                href="#reviews" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 active:bg-gray-100"
              >
                Reviews
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}