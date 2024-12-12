export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  authenticity: string[];
  image: string;
  price: number;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
  product: string;
  verifiedPurchase: boolean;
}

export interface Offer {
  id: number;
  title: string;
  discount: string;
  description: string;
  validUntil: string;
  code: string;
}