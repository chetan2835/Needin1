export type Category = 'All' | 'Service' | 'Achievements' | 'Awards' | 'Guests' | 'Events' | 'Press';

export type MediaType = 'image' | 'video';
export type VideoSource = 'youtube' | 'vimeo' | 'local';

export interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  mediaType: MediaType;
  src: string; // Image URL or Video URL/ID
  videoSource?: VideoSource; // Only for videos
  date?: string;
}

export const galleryCategories: Category[] = [
  'All',
  'Service',
  'Achievements',
  'Awards',
  'Guests',
  'Events',
  'Press',
];

export const galleryItems: GalleryItem[] = [
  // --- Service ---
  {
    id: '1',
    title: 'Express Parcel Delivery',
    category: 'Service',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop',
    date: 'Jan 2024',
  },
  {
    id: '2',
    title: 'Secure OTP Verification',
    category: 'Service',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1633265486064-084b953153c6?q=80&w=2070&auto=format&fit=crop',
    date: 'Feb 2024',
  },

  // --- Achievements ---
  {
    id: '3',
    title: '10,000+ Delliveries Completed',
    category: 'Achievements',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    date: 'March 2024',
  },
  {
    id: '4',
    title: 'Expansion to 5 New Cities',
    category: 'Achievements',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop',
    date: 'April 2024',
  },
   {
    id: '15',
    title: 'Start-up India Certificate',
    category: 'Achievements',
    mediaType: 'image',
    src: 'https://drive.google.com/file/d/142zO1G3yA_2nGpCUpyGtE86w2T1vkhwf/view?usp=sharinghttps://drive.google.com/file/d/142zO1G3yA_2nGpCUpyGtE86w2T1vkhwf/view?usp=sharing',
    date: 'January 2026',
  },

  // --- Awards ---
  {
    id: '5',
    title: 'Best Logistics Startup 2024',
    category: 'Awards',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop',
    date: 'May 2024',
  },
  {
    id: '6',
    title: 'Innovation in Tech Award',
    category: 'Awards',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1935&auto=format&fit=crop',
    date: 'June 2024',
  },

  // --- Guests ---
  {
    id: '7',
    title: 'Visit from Tech Minister',
    category: 'Guests',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop',
    date: 'July 2024',
  },
  {
    id: '8',
    title: 'Industry Leaders Summit',
    category: 'Guests',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1515169067750-d51a73b0512c?q=80&w=2070&auto=format&fit=crop',
    date: 'Aug 2024',
  },

  // --- Events ---
  {
    id: '9',
    title: 'Product Launch Event',
    category: 'Events',
    mediaType: 'video',
    src: 'LXb3EKWsInQ', // Dummy YouTube ID (4K Nature)
    videoSource: 'youtube',
    date: 'Sept 2024',
  },
  {
    id: '10',
    title: 'Annual Team Meetup',
    category: 'Events',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop',
    date: 'Oct 2024',
  },

  // --- Press ---
  {
    id: '11',
    title: 'Featured in TechCrunch',
    category: 'Press',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
    date: 'Nov 2024',
  },
  {
    id: '12',
    title: 'Forbes Rising Stars',
    category: 'Press',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2071&auto=format&fit=crop',
    date: 'Dec 2024',
  },
  
  // --- Extra Items for Load More ---
  {
    id: '13',
    title: 'Community Outreach',
    category: 'Events',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop',
    date: 'Jan 2025',
  },
    {
    id: '14',
    title: 'New Hub Opening',
    category: 'Service',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d425?q=80&w=2000&auto=format&fit=crop',
    date: 'Feb 2025',
  },
];
