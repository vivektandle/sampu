import { MEDIA_ASSETS } from '@/src/assets/media';

export const foundersMessageData = {
  name: 'Dr. Venkatesh R',
  designation: 'Founder, Sambhram Educational Trust',
  photo: MEDIA_ASSETS.founderImage,
  photoAlt: 'Dr. Venkatesh R, Founder of Sambhram Educational Trust',
  quote:
    '"True education shapes both intellect and character, equipping young learners to contribute thoughtfully to society."',
  paragraphs: [
    'Welcome to Sambhram PU College. Every student who enters our Pre-University campus stands at a pivotal threshold between foundational schooling and specialized higher education.',
    '[Placeholder Message Body — Replace with official Founder’s welcome statement]: Our purpose in establishing this institution has been to create a calm, disciplined, and intellectually encouraging environment where students receive attentive mentorship alongside rigorous academic instruction.',
    'We remain committed to transparent academic governance, ethical values, and steady investment in classrooms, laboratories, and library resources that support every learner’s growth.',
  ],
  philosophy: [
    'Accessibility to structured, quality Pre-University education in Karnataka.',
    'Balance between academic rigor, ethical grounding, and co-curricular growth.',
    'Continuous partnership between educators, students, and parents.',
  ],
};

export const principalMessageData = {
  name: '[Principal Name — Editable Institutional Profile]',
  designation: 'Principal, Sambhram PU College (Editable)',
  qualification: '[M.Sc. / M.A., B.Ed. / Ph.D. — Editable]',
  photo: MEDIA_ASSETS.academicPortrait,
  photoAlt: 'Principal office portrait placeholder',
  quote:
    '"Pre-University years are the bedrock of lifelong analytical thinking, personal responsibility, and disciplined curiosity."',
  paragraphs: [
    'Dear Students and Parents, warm greetings from Sambhram PU College.',
    '[Placeholder Principal Message — Replace with official Principal’s address]: The two years of Pre-University education play a defining role in shaping academic confidence and career direction. Our faculty focus on clarity of fundamentals, regular classroom engagement, and constructive academic feedback.',
    'Beyond textbook mastery, we encourage students to participate in laboratory inquiry, library reading, sports, and cultural initiatives while upholding campus discipline and mutual respect.',
  ],
  priorities: [
    'Conceptual clarity across Science and Commerce curricula.',
    'Regular attendance monitoring and constructive parent communication.',
    'Structured preparation for First and Second PU examinations.',
  ],
};

export const aboutCollegeData = {
  intro:
    'Sambhram PU College is a Pre-University institution in Karnataka committed to guiding students through the critical I PUC and II PUC academic years with structured instruction, approachable faculty mentorship, and a supportive campus atmosphere.',
  history:
    '[Institutional History Placeholder — Add official founding year, trust background, and key academic milestones here when verified.]',
  philosophy:
    'Our educational approach emphasizes deep understanding over rote memorization, pairing structured classroom lectures with hands-on laboratory sessions, guided reading, and consistent formative assessments.',
  environment:
    'The campus provides ventilated classrooms, dedicated Science and Computer laboratories, a quiet reference library, and outdoor recreational spaces designed to keep students focused and balanced.',
  pillars: [
    {
      title: 'Structured Academic Delivery',
      description: 'Systematic lesson planning aligned strictly with the Karnataka DPUE academic calendar.',
    },
    {
      title: 'Mentorship & Parent Partnership',
      description: 'Consistent communication regarding attendance, test performance, and student wellbeing.',
    },
    {
      title: 'Co-Curricular Balance',
      description: 'Encouraging cultural expression, sports participation, and student-led academic clubs.',
    },
  ],
};

export const visionMissionData = {
  vision: {
    statement:
      '[Official Vision Statement Placeholder — Editable]: To nurture inquisitive, disciplined, and value-grounded Pre-University learners prepared to excel in higher education and contribute responsibly to society.',
    pillars: [
      'Fostering intellectual curiosity and independent analytical thinking.',
      'Maintaining an inclusive, respectful, and focused learning community.',
    ],
  },
  mission: {
    statement:
      '[Official Mission Statement Placeholder — Editable]: To deliver structured Pre-University education supported by qualified faculty, practical learning environments, ethical values, and constructive student mentorship.',
    points: [
      'Deliver curriculum-aligned instruction that strengthens foundational concepts in Science and Commerce.',
      'Encourage hands-on scientific inquiry, numerical precision, and clear communication skills.',
      'Instill personal discipline, regular study habits, and civic responsibility.',
      'Collaborate transparently with parents to support every student’s academic progress.',
    ],
  },
};

export interface ManagementMember {
  id: string;
  name: string;
  designation: string;
  bio: string;
  photo: string;
}

export const managementProfiles: ManagementMember[] = [
  {
    id: 'mgmt-1',
    name: 'Dr. Nagaraj V',
    designation: 'Chairman, Sambhram Educational Trust',
    bio: 'Providing strategic governance, academic oversight, and long-term institutional leadership across Sambhram Educational Trust.',
    photo: MEDIA_ASSETS.chairmanImage,
  },
  {
    id: 'mgmt-2',
    name: 'Dr. Venkatesh R',
    designation: 'Founder, Sambhram Educational Trust',
    bio: 'Guiding the institution’s founding commitment to accessible, value-grounded Pre-University education and student welfare.',
    photo: MEDIA_ASSETS.founderImage,
  },
  {
    id: 'mgmt-3',
    name: '[Principal Name — Editable]',
    designation: 'Principal & Head of Institution (Editable)',
    bio: '[Editable short biography detailing teaching experience, curriculum supervision, and Pre-University administration.]',
    photo: MEDIA_ASSETS.academicPortrait,
  },
];

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: 'Science' | 'Commerce' | 'Languages' | 'Computer Science';
  qualification: string;
  specialization: string;
  photo: string;
}

export const facultyDirectory: FacultyMember[] = [
  {
    id: 'fac-1',
    name: '[Faculty Member 01 — Editable]',
    designation: 'Lecturer in Physics (Placeholder)',
    department: 'Science',
    qualification: '[M.Sc., B.Ed. — Editable]',
    specialization: 'Mechanics, Electromagnetism & Practical Physics',
    photo: MEDIA_ASSETS.academicPortrait,
  },
  {
    id: 'fac-2',
    name: '[Faculty Member 02 — Editable]',
    designation: 'Lecturer in Chemistry (Placeholder)',
    department: 'Science',
    qualification: '[M.Sc., B.Ed. — Editable]',
    specialization: 'Organic Synthesis & Analytical Titration Labs',
    photo: MEDIA_ASSETS.academicPortrait,
  },
  {
    id: 'fac-3',
    name: '[Faculty Member 03 — Editable]',
    designation: 'Lecturer in Mathematics (Placeholder)',
    department: 'Science',
    qualification: '[M.Sc., B.Ed. — Editable]',
    specialization: 'Calculus, Matrices & Differential Equations',
    photo: MEDIA_ASSETS.academicPortrait,
  },
  {
    id: 'fac-4',
    name: '[Faculty Member 04 — Editable]',
    designation: 'Lecturer in Accountancy (Placeholder)',
    department: 'Commerce',
    qualification: '[M.Com., B.Ed. — Editable]',
    specialization: 'Financial Accounting & Corporate Statements',
    photo: MEDIA_ASSETS.academicPortrait,
  },
  {
    id: 'fac-5',
    name: '[Faculty Member 05 — Editable]',
    designation: 'Lecturer in Economics (Placeholder)',
    department: 'Commerce',
    qualification: '[M.A. Economics, B.Ed. — Editable]',
    specialization: 'Microeconomics, Macroeconomics & Indian Economy',
    photo: MEDIA_ASSETS.academicPortrait,
  },
  {
    id: 'fac-6',
    name: '[Faculty Member 06 — Editable]',
    designation: 'Lecturer in Computer Science (Placeholder)',
    department: 'Computer Science',
    qualification: '[MCA / M.Sc. CS — Editable]',
    specialization: 'Programming Fundamentals, DBMS & Networking',
    photo: MEDIA_ASSETS.academicPortrait,
  },
  {
    id: 'fac-7',
    name: '[Faculty Member 07 — Editable]',
    designation: 'Lecturer in English (Placeholder)',
    department: 'Languages',
    qualification: '[M.A. English, B.Ed. — Editable]',
    specialization: 'Academic Writing, Literature & Communication',
    photo: MEDIA_ASSETS.academicPortrait,
  },
];
