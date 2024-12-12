import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Product } from '../types';

interface MobileProductCardProps {
  product: Product;
}

export function MobileProductCard({ product }: MobileProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="aspect-square relative">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Verified
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-pink-600">
            ${product.price.toFixed(2)}
          </span>
          <button className="flex items-center text-green-600 font-medium">
            View <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}