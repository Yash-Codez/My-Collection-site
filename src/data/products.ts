import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'serum-001',
    name: 'Luxury Radiance Serum',
    brand: 'Estée Lauder',
    description: 'Authentic anti-aging serum with advanced night repair formula',
    authenticity: [
      'Holographic Security Seal',
      'Unique Serial Number',
      'Official Distribution Channel'
    ],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300',
    price: 75.00
  },
  {
    id: 'cream-001',
    name: 'Premium Hydrating Cream',
    brand: 'La Mer',
    description: 'Original moisture-rich cream with patented Miracle Broth™',
    authenticity: [
      'QR Authentication Code',
      'Tamper-Evident Packaging',
      'Authorized Retailer Certificate'
    ],
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=300',
    price: 95.00
  }
];