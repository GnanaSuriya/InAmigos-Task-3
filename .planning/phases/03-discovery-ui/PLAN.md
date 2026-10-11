# Phase 3 Plan: Core Discovery & Listing Interface

## Objective
Build all interactive UI components for navigation, hero, search, filters, card grid, bookmarking, share drawer/toast, and full internship detail drawer/modal.

## Components to Build
1. `src/components/Navbar.tsx`:
   - Wordmark "InAmigos Internships" + subtle icon.
   - Links: "Explore Internships", "About", "How It Works".
   - "Explore Opportunities" CTA.
   - Saved bookmarks indicator badge.
   - Mobile responsive menu drawer.
2. `src/components/Hero.tsx`:
   - Eyebrow: "YOUR NEXT OPPORTUNITY STARTS HERE".
   - Heading: "Find your place at InAmigos.".
   - Supporting text: "Explore internship opportunities at InAmigos Foundation, discover roles that match your interests, and apply through Internshala.".
   - Primary button: "Explore Internships".
   - Secondary button: "How It Works".
   - Minimal geometric/editorial SVG visual representing learning, growth, and development.
   - Restrained trust statement: "One destination for InAmigos Foundation internship opportunities."
3. `src/components/SearchBar.tsx` & `FilterBar.tsx`:
   - Instant search input with placeholder "Search roles, skills, or keywords...".
   - Category filter pills, Work mode filter, Duration filter, Bookmarked toggle.
   - Sort dropdown ("Relevant matches", "Alphabetical", "Recently added").
   - Results count (e.g., "9 opportunities available").
   - Clear filters button.
4. `src/components/InternshipCard.tsx`:
   - Linear-style refined card.
   - Title, Organization ("InAmigos Foundation"), Category, Description, Skills tags, Work mode, Duration, Stipend, Deadline, Availability, Source indicator ("Internshala").
   - Actions: Bookmark toggle, Share button, "View Details", "Apply Now" (safe external link or disabled if unavailable).
5. `src/components/InternshipDetailModal.tsx`:
   - Complete modal/drawer with role overview, responsibilities checklist, eligibility, skills, logistics.
   - Redirection warning: "Applications are completed on Internshala. You will leave this website when you apply."
   - Primary "Apply on Internshala" button with exact URL.
6. `src/components/Toast.tsx`:
   - Lightweight accessible feedback for sharing links and bookmarking actions.
