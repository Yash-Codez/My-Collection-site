import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing products! My skin has never looked better.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300',
    product: 'Radiance Serum',
    verifiedPurchase: true
  },
  {
    id: 2,
    name: 'Emily Davis',
    rating: 5,
    comment: 'The customer service is exceptional, and the products are top-notch!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
    product: 'Hydrating Cream',
    verifiedPurchase: true
  },
  {
    id: 3,
    name: 'Michael Chen',
    rating: 4,
    comment: 'Great natural ingredients, seeing real results.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
    product: 'Natural Face Wash',
    verifiedPurchase: true
  }
];