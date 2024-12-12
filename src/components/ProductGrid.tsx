import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export function ProductGrid() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Original Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            Every product in our collection is guaranteed authentic and sourced directly from authorized distributors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}