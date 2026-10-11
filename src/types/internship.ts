export interface Internship {
  id: string;
  title: string;
  organization: 'InAmigos Foundation';
  category: 
    | 'AI & Machine Learning'
    | 'Data & Analytics'
    | 'Web Development'
    | 'Prompt Engineering'
    | 'Content Writing'
    | 'Social Impact & NGO'
    | 'Digital Marketing'
    | 'Graphic Design';
  shortDescription: string;
  overview: string;
  responsibilities: string[];
  skills: string[];
  eligibility: string;
  duration: string; // e.g. "2 Weeks"
  workMode: 'Work From Home' | 'Hybrid' | 'On-Site';
  stipend: string | null; // e.g. "Unpaid (Certificate & LOR provided)"
  deadline: string | null;
  status: 'Applications Open' | 'Active Cohort' | 'Upcoming';
  sourcePlatform: 'Internshala';
  sourceUrl: string;
  applicationUrl: string | null; // Exact Internshala listing URL or null if link unavailable
  lastVerifiedAt: string; // ISO date string
  isFeatured?: boolean;
}

export type SortOption = 'relevance' | 'title-asc' | 'recently-verified';

export interface FilterState {
  searchQuery: string;
  category: string;
  workMode: string;
  duration: string;
  onlyBookmarked: boolean;
  sortBy: SortOption;
}
