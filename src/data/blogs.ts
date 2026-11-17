import { MEDIA_ASSETS } from '@/src/assets/media';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  author: string;
  readTime: string;
  featuredImage: string;
  imageAlt: string;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-the-right-pre-university-stream-after-sslc',
    title: 'Choosing the Right Pre-University Stream After SSLC / Class 10',
    category: 'Academic Guidance',
    publishedDate: 'Editorial Guide (Editable)',
    author: 'Academic Counselling Desk (Placeholder)',
    readTime: '4 min read',
    featuredImage: MEDIA_ASSETS.campusStudentLife,
    imageAlt: 'Pre-University students discussing study plans on campus steps',
    excerpt:
      'A practical framework for Class 10 students and parents in Karnataka to evaluate Science and Commerce combinations based on aptitude and higher-education goals.',
    content: [
      'Transitioning from Class 10 into Pre-University education is one of the first major academic decisions a student makes. In Karnataka, the two-year Pre-University Course (I PUC and II PUC) bridges general schooling with specialized university degrees and professional pathways.',
      'Before selecting a stream, students should evaluate their genuine curiosity in core subjects rather than choosing based solely on peer trends. A student considering Science combinations such as PCMB or PCMC should enjoy quantitative reasoning, laboratory investigation, and structured problem solving.',
      'Conversely, students drawn to business organization, economics, financial analysis, and data interpretation often thrive in Commerce combinations such as EBAC or EBAS. Commerce provides strong grounding for Chartered Accountancy, Business Administration, Economics, and Finance degrees.',
      'At Sambhram PU College, academic counsellors encourage parents and students to review the prescribed DPUE syllabus, inspect textbook depth, and discuss long-term career interests before finalizing a subject combination.',
      'Note: This article is an editorial guidance piece prepared as editable template content for the college website.',
    ],
  },
  {
    slug: 'role-of-laboratory-learning-in-pre-university-science',
    title: 'Why Hands-On Laboratory Practice Matters in PU Science Education',
    category: 'Science & Research',
    publishedDate: 'Editorial Guide (Editable)',
    author: 'Department of Sciences (Placeholder)',
    readTime: '5 min read',
    featuredImage: MEDIA_ASSETS.heroScienceLab,
    imageAlt: 'Indian PU students performing laboratory experiments with faculty guidance',
    excerpt:
      'How structured Physics, Chemistry, Biology, and Computer Science practicals reinforce theoretical mastery and prepare learners for II PU board practicals.',
    content: [
      'Scientific concepts gain lasting clarity when students move beyond diagrams on a chalkboard and observe physical laws, chemical reactions, and biological specimens directly in the laboratory.',
      'Under the Karnataka Pre-University curriculum, practical sessions are not supplementary—they form an integral component of both I PUC internal learning and II PUC Board Examinations. Learning to calibrate apparatus, record accurate readings, and analyze experimental error cultivates scientific discipline.',
      'In Computer Science laboratories, writing and debugging programs builds algorithmic thinking that cannot be achieved purely through passive reading. Similarly, titration accuracy in Chemistry and circuit verification in Physics sharpen attention to detail.',
      'Regular lab attendance, neat maintenance of practical records, and active questioning during demonstrations help students feel confident both in annual practical assessments and future undergraduate laboratories.',
      'Note: This article is an editorial guidance piece prepared as editable template content for the college website.',
    ],
  },
  {
    slug: 'building-consistent-study-habits-for-second-pu-board-exams',
    title: 'Building Consistent Study Habits for Karnataka II PU Board Examinations',
    category: 'Student Success',
    publishedDate: 'Editorial Guide (Editable)',
    author: 'Faculty Mentoring Team (Placeholder)',
    readTime: '4 min read',
    featuredImage: MEDIA_ASSETS.academicsCommerceClass,
    imageAlt: 'Attentive Pre-University students taking notes during a smartboard lecture',
    excerpt:
      'Practical time-management strategies, active revision routines, and note-taking practices to stay calm and prepared throughout the Pre-University academic year.',
    content: [
      'Success in Second Year Pre-University examinations rarely comes from last-minute cramming. Instead, steady daily habits across First Year and Second Year PU reduce exam anxiety and deepen subject retention.',
      'Start by treating daily classroom attendance and active note-taking as your primary study block. Reviewing class notes for twenty minutes the same evening transfers concepts into long-term memory far more effectively than re-reading entire chapters weeks later.',
      'Divide weekly study schedules into balanced segments: conceptual reading from prescribed NCERT/DPUE textbooks, numerical or accounting problem practice, and timed writing of descriptive answers according to the official blueprint pattern.',
      'Finally, prioritize sleep, physical movement, and library reading time. Seeking timely help from faculty whenever a topic feels unclear ensures small gaps never accumulate before preparatory exams.',
      'Note: This article is an editorial guidance piece prepared as editable template content for the college website.',
    ],
  },
];
