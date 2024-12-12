import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

interface AuthenticityBadgeProps {
  features: string[];
}

export function AuthenticityBadge({ features }: AuthenticityBadgeProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-center mb-2">
        <Shield className="text-green-600 mr-2" size={20} />
        <h4 className="text-green-800 font-semibold">Authenticity Guaranteed</h4>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-green-700">
            <CheckCircle className="text-green-500 mr-2" size={16} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}