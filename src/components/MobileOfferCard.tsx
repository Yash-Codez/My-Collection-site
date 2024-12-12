import React from 'react';
import { Tag, Clock } from 'lucide-react';

interface MobileOfferCardProps {
  offer: {
    title: string;
    discount: string;
    description: string;
    validUntil: string;
    code: string;
  };
}

export function MobileOfferCard({ offer }: MobileOfferCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-pink-500">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900">{offer.title}</h3>
        <span className="text-pink-600 font-bold">{offer.discount}</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{offer.description}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center">
          <Clock size={14} className="mr-1" />
          {offer.validUntil}
        </div>
        <div className="flex items-center">
          <Tag size={14} className="mr-1" />
          {offer.code}
        </div>
      </div>
    </div>
  );
}