import React from 'react';
import { Tag, Clock, Percent } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Spring Beauty Sale',
    discount: '30% OFF',
    description: 'On all skincare products',
    validUntil: '2024-04-30',
    code: 'SPRING30'
  },
  {
    id: 2,
    title: 'New Customer Special',
    discount: '20% OFF',
    description: 'First purchase discount',
    validUntil: '2024-12-31',
    code: 'WELCOME20'
  },
  {
    id: 3,
    title: 'Bundle & Save',
    discount: 'Buy 2 Get 1',
    description: 'On selected makeup items',
    validUntil: '2024-05-15',
    code: 'BUNDLE3'
  }
];

export function Offers() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Latest Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-pink-100 hover:border-pink-300 transition duration-200"
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4">
                <h3 className="text-xl font-bold text-white">{offer.title}</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl font-bold text-pink-600">
                    {offer.discount}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  {offer.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    Valid until: {offer.validUntil}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag size={16} className="mr-2" />
                    Code: <span className="font-mono ml-2">{offer.code}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-200 flex items-center justify-center">
                  <Percent size={16} className="mr-2" />
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}