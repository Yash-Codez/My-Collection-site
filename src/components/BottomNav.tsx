import React from 'react';
import { Home, Tag, Star } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around">
        <a href="#products" className="flex flex-col items-center p-2">
          <Home size={20} className="text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Products</span>
        </a>
        <a href="#offers" className="flex flex-col items-center p-2">
          <Tag size={20} className="text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Offers</span>
        </a>
        <a href="#reviews" className="flex flex-col items-center p-2">
          <Star size={20} className="text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Reviews</span>
        </a>
      </div>
    </nav>
  );
}