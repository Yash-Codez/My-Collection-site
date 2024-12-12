import React from 'react';
import { AuthenticityBadge } from './AuthenticityBadge';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="mb-4">
          <span className="text-2xl font-bold text-pink-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <AuthenticityBadge features={product.authenticity} />
        <button className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}