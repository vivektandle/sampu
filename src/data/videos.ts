import { MEDIA_ASSETS } from '@/src/assets/media';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnail: string;
  thumbnailAlt: string;
  youtubeId: string; // Replace with official Sambhram PU College YouTube Video ID
  isPlaceholderVideo: boolean;
}

export const videoGallery: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Campus Walkthrough & Academic Facilities Overview (Placeholder)',
    description:
      'A guided look at classrooms, green walkways, library spaces, and student-friendly learning zones. Configure with the official college YouTube video ID.',
    duration: '03:20',
    category: 'Campus Tour',
    thumbnail: MEDIA_ASSETS.heroCampusFacade,
    thumbnailAlt: 'Campus exterior thumbnail for walkthrough video',
    youtubeId: 'M7lc1UVf-VE', // Replace with verified Sambhram PU College YouTube embed ID
    isPlaceholderVideo: true,
  },
  {
    id: 'vid-2',
    title: 'Pre-University Science Laboratories & Practical Orientation (Placeholder)',
    description:
      'Overview of Physics, Chemistry, and Biology laboratory infrastructure and supervised practical sessions for I & II PUC.',
    duration: '04:15',
    category: 'Academics',
    thumbnail: MEDIA_ASSETS.heroScienceLab,
    thumbnailAlt: 'Science laboratory thumbnail for academic video',
    youtubeId: 'M7lc1UVf-VE', // YouTube Developers official sample embed ID — replace with college video
    isPlaceholderVideo: true,
  },
  {
    id: 'vid-3',
    title: 'Annual Cultural Day & Student Convocation Highlights (Placeholder)',
    description:
      'Reflections on cultural performances, student leadership, and campus community gatherings in the college auditorium.',
    duration: '05:05',
    category: 'Student Life',
    thumbnail: MEDIA_ASSETS.culturalAuditorium,
    thumbnailAlt: 'Auditorium ceremony thumbnail for student life video',
    youtubeId: 'M7lc1UVf-VE',
    isPlaceholderVideo: true,
  },
];
