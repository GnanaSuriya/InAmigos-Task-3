export type ToolCategory =
  | 'AI Assistants'
  | 'Coding & Development'
  | 'Writing & Content'
  | 'Image Generation & Design'
  | 'Video & Animation'
  | 'Audio & Music'
  | 'Research & Education'
  | 'Productivity & Automation'
  | 'Business & Marketing'
  | 'Data Analysis';

export type PricingType = 
  | 'Free' 
  | 'Freemium' 
  | 'Paid' 
  | 'Free Trial' 
  | 'Pricing varies';

export interface AITool {
  id: string;
  name: string;
  slug: string;
  description: string;
  overview: string;
  officialUrl: string; // Must be absolute verified HTTPS URL
  category: ToolCategory;
  tags: string[];
  useCases: string[];
  pricingType: PricingType;
  pricingDetails?: string;
  features: string[];
  isFeatured: boolean;
  collections: string[]; // e.g. ['students', 'developers', 'free-freemium']
  lastVerifiedAt: string; // ISO date format YYYY-MM-DD
  capabilities?: string[];
  searchKeywords?: string[];
  matchReason?: string;
  matchScore?: number;
}

export type SortOption = 'featured' | 'name-asc' | 'recently-verified';

export interface FilterState {
  searchQuery: string;
  category: string;
  pricingType: string;
  collection: string;
  onlyFavorites: boolean;
  sortBy: SortOption;
}

export interface CuratedCollection {
  id: string;
  title: string;
  description: string;
  badge: string;
}
