import { MEDIA_ASSETS } from '@/src/assets/media';

export const galleryCategories = [
  'All',
  'Campus',
  'Academic Activities',
  'Cultural Events',
  'Sports',
  'Annual Day',
  'Science Exhibitions',
  'Celebrations',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  image: string;
  alt: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  // Campus (3 images)
  {
    id: 'gal-campus-1',
    title: 'Sambhram Main Academic Campus',
    category: 'Campus',
    image: MEDIA_ASSETS.campusImage,
    alt: 'Main academic building and landscaped courtyard of Sambhram campus',
    caption: 'Main Campus — Spacious academic wings and sunlit central courtyard.',
  },
  {
    id: 'gal-campus-2',
    title: 'Academic Block & Green Walkways',
    category: 'Campus',
    image: MEDIA_ASSETS.heroCampusFacade,
    alt: 'Brick and glass college academic block and green walkways',
    caption: 'Campus Architecture — Ventilated academic wings opening onto shaded walkways.',
  },
  {
    id: 'gal-campus-3',
    title: 'Central Reference Library Hall',
    category: 'Campus',
    image: MEDIA_ASSETS.heroLibraryStudy,
    alt: 'Quiet college reading room with bookshelves and natural daylight',
    caption: 'Reading Hall — Dedicated study desks and Pre-University reference collections.',
  },

  // Academic Activities (3 images)
  {
    id: 'gal-acad-1',
    title: 'Commerce & Economics Seminar',
    category: 'Academic Activities',
    image: MEDIA_ASSETS.academicsCommerceClass,
    alt: 'Lecturer teaching economics concepts in Pre-University classroom',
    caption: 'Interactive classroom discussion in Economics and Accountancy.',
  },
  {
    id: 'gal-acad-2',
    title: 'Guided Reference Study Session',
    category: 'Academic Activities',
    image: MEDIA_ASSETS.heroLibraryStudy,
    alt: 'Students studying textbooks in the reference library',
    caption: 'Structured reading and concept revision in the college library.',
  },
  {
    id: 'gal-acad-3',
    title: 'Peer Academic Study Group',
    category: 'Academic Activities',
    image: MEDIA_ASSETS.campusStudentLife,
    alt: 'Pre-University students reviewing notes together on campus steps',
    caption: 'Collaborative peer study groups and faculty-guided doubt resolution.',
  },

  // Cultural Events (3 images)
  {
    id: 'gal-cult-1',
    title: 'Traditional Cultural Program',
    category: 'Cultural Events',
    image: MEDIA_ASSETS.culturalAuditorium,
    alt: 'Auditorium stage during formal cultural gathering',
    caption: 'Cultural Events — Celebrating heritage, music, and student talent.',
  },
  {
    id: 'gal-cult-2',
    title: 'Student Literary & Arts Gathering',
    category: 'Cultural Events',
    image: MEDIA_ASSETS.campusStudentLife,
    alt: 'Students collaborating ahead of cultural club showcase',
    caption: 'Student literary clubs, elocution, and cultural preparation on campus.',
  },
  {
    id: 'gal-cult-3',
    title: 'Campus Cultural Courtyard Assembly',
    category: 'Cultural Events',
    image: MEDIA_ASSETS.campusImage,
    alt: 'Campus courtyard setting for student cultural gatherings',
    caption: 'Outdoor cultural assemblies bringing I PUC and II PUC students together.',
  },

  // Sports (3 images)
  {
    id: 'gal-sport-1',
    title: 'Outdoor Basketball & Athletics Court',
    category: 'Sports',
    image: MEDIA_ASSETS.sportsCampusGround,
    alt: 'Students practicing basketball and athletics on campus court',
    caption: 'Campus Sports Ground — Supporting physical fitness and teamwork.',
  },
  {
    id: 'gal-sport-2',
    title: 'Inter-Class Athletics Campus Ground',
    category: 'Sports',
    image: MEDIA_ASSETS.heroCampusFacade,
    alt: 'Open campus ground beside academic wings for student sports',
    caption: 'Track & Field — Encouraging regular physical activity alongside academics.',
  },
  {
    id: 'gal-sport-3',
    title: 'Team Sports & Fitness Training',
    category: 'Sports',
    image: MEDIA_ASSETS.campusStudentLife,
    alt: 'Pre-University students gathered after campus sports practice',
    caption: 'Team spirit and co-curricular athletic participation across streams.',
  },

  // Annual Day (3 images)
  {
    id: 'gal-annual-1',
    title: 'Annual Academic Convocation',
    category: 'Annual Day',
    image: MEDIA_ASSETS.culturalAuditorium,
    alt: 'Students and faculty gathered in college auditorium for annual day ceremony',
    caption: 'Annual Day — Bringing students, faculty, and families together.',
  },
  {
    id: 'gal-annual-2',
    title: 'Merit Felicitation & Cultural Address',
    category: 'Annual Day',
    image: MEDIA_ASSETS.academicPortrait,
    alt: 'Faculty leadership preparing Annual Day academic address',
    caption: 'Recognizing consistent academic effort and student leadership.',
  },
  {
    id: 'gal-annual-3',
    title: 'Campus Annual Day Preparations',
    category: 'Annual Day',
    image: MEDIA_ASSETS.campusImage,
    alt: 'Main campus courtyard decorated for Annual Day gatherings',
    caption: 'Whole-campus collaboration welcoming parents and guests.',
  },

  // Science Exhibitions (3 images)
  {
    id: 'gal-sci-1',
    title: 'Chemistry & Physics Practical Exhibition',
    category: 'Science Exhibitions',
    image: MEDIA_ASSETS.heroScienceLab,
    alt: 'Students conducting titration and microscopy experiments in science lab',
    caption: 'Supervised laboratory demonstrations in Physics and Chemistry.',
  },
  {
    id: 'gal-sci-2',
    title: 'Applied Mathematics & Data Showcase',
    category: 'Science Exhibitions',
    image: MEDIA_ASSETS.academicsCommerceClass,
    alt: 'Analytical models presented during academic exhibition',
    caption: 'Student analytical projects and quantitative problem-solving posters.',
  },
  {
    id: 'gal-sci-3',
    title: 'Science Reference & Model Display',
    category: 'Science Exhibitions',
    image: MEDIA_ASSETS.heroLibraryStudy,
    alt: 'Reference materials curated for Science Exhibition participants',
    caption: 'Research preparation supporting Pre-University science inquiry.',
  },

  // Celebrations (3 images)
  {
    id: 'gal-celeb-1',
    title: 'Student Community Celebrations',
    category: 'Celebrations',
    image: MEDIA_ASSETS.campusStudentLife,
    alt: 'Pre-University students celebrating together in campus courtyard',
    caption: 'Campus Celebrations — Fostering camaraderie and a welcoming community.',
  },
  {
    id: 'gal-celeb-2',
    title: 'Auditorium Cultural Festivities',
    category: 'Celebrations',
    image: MEDIA_ASSETS.culturalAuditorium,
    alt: 'College auditorium lit for student cultural festivities',
    caption: 'Celebrating national days, Teachers’ Day, and seasonal campus festivals.',
  },
  {
    id: 'gal-celeb-3',
    title: 'Campus Heritage & Courtyard Festivity',
    category: 'Celebrations',
    image: MEDIA_ASSETS.campusImage,
    alt: 'Campus courtyard during institutional celebration day',
    caption: 'Shared moments of joy and pride across the Sambhram campus.',
  },
];
