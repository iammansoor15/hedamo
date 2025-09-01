export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  nutrition: Nutrition;
  traceability: Traceability;
  reviews: Review[];
  images: string[];
  specifications: Specifications;
}

export interface Nutrition {
  servingSize?: string;
  calories?: number;
  totalFat?: string;
  sodium?: string;
  totalCarbs?: string;
  sugars?: string;
  protein?: string;
  caffeine?: string;
  vitamins?: string[];
  minerals?: string[];
  antioxidants?: string;
}

export interface Traceability {
  origin: string;
  harvestDate?: string;
  harvest?: string;
  altitude?: string;
  beekeeper?: string;
  farm?: string;
  artisan?: string;
  woolSource?: string;
  certifications: string[];
  processingDate?: string;
  roastDate?: string;
  productionTime?: string;
  batchNumber?: string;
  roaster?: string;
  dyeMethod?: string;
  sustainability: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Specifications {
  weight: string;
  container?: string;
  shelfLife?: string;
  storage?: string;
  color?: string;
  texture?: string;
  roastLevel?: string;
  grindOptions?: string;
  processingMethod?: string;
  flavorNotes?: string[];
  brewMethods?: string[];
  dimensions?: string;
  material?: string;
  careInstructions?: string;
  colors?: string[];
  pattern?: string;
}
