import { Offer } from '../types';

export const offers: Offer[] = [
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