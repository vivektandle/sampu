import { MEDIA_ASSETS } from '@/src/assets/media';

export interface StreamCombination {
  code: string;
  title: string;
  subjects: string[];
  practicalComponents: string;
  pathwayNote: string;
}

export interface AcademicStream {
  id: 'science' | 'commerce' | 'arts';
  name: string;
  offered: boolean;
  image: string;
  imageAlt: string;
  summary: string;
  combinations: StreamCombination[];
  learningOutcomes: string[];
}

export const languageOptions = {
  part1: 'English (Compulsory First Language per DPUE Karnataka Curriculum)',
  part2Placeholder:
    '[Second Language Options — Editable per Institutional Offering: e.g., Kannada / Hindi / Sanskrit as approved by DPUE]',
};

export const academicStreams: AcademicStream[] = [
  {
    id: 'science',
    name: 'Science Stream',
    offered: true,
    image: MEDIA_ASSETS.heroScienceLab,
    imageAlt: 'Pre-University science students conducting supervised laboratory experiments',
    summary:
      'Designed around conceptual clarity, structured laboratory practicals, and analytical problem-solving aligned with the Karnataka Pre-University syllabus.',
    combinations: [
      {
        code: 'PCMB (Editable)',
        title: 'Physics, Chemistry, Mathematics, Biology',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
        practicalComponents: 'Dedicated laboratory practical hours in Physics, Chemistry, and Biology.',
        pathwayNote: 'Suitable for students exploring Medicine, Allied Health Sciences, Biotechnology, Pure Sciences, or Engineering.',
      },
      {
        code: 'PCMC (Editable)',
        title: 'Physics, Chemistry, Mathematics, Computer Science',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
        practicalComponents: 'Hands-on Physics and Chemistry experiments paired with structured Computer Science programming labs.',
        pathwayNote: 'Suitable for students interested in Engineering, Data Science, Software Architecture, and Mathematical Sciences.',
      },
    ],
    learningOutcomes: [
      'Build strong theoretical foundations aligned with Karnataka DPUE NCERT-based textbooks.',
      'Develop experimental accuracy, observation recording, and scientific inquiry in laboratory sessions.',
      'Cultivate quantitative reasoning and analytical writing required for Second PU board examinations.',
    ],
  },
  {
    id: 'commerce',
    name: 'Commerce Stream',
    offered: true,
    image: MEDIA_ASSETS.academicsCommerceClass,
    imageAlt: 'Commerce and Economics lecture session in a modern tiered classroom',
    summary:
      'Structured to develop financial literacy, business reasoning, statistical interpretation, and organizational awareness for higher studies in Commerce and Management.',
    combinations: [
      {
        code: 'EBAC (Editable)',
        title: 'Economics, Business Studies, Accountancy, Computer Science',
        subjects: ['Economics', 'Business Studies', 'Accountancy', 'Computer Science'],
        practicalComponents: 'Practical-oriented Accountancy exercises and Computer Science lab modules.',
        pathwayNote: 'Prepared for B.Com, BBA, Chartered Accountancy foundations, and Business Analytics.',
      },
      {
        code: 'EBAS (Editable)',
        title: 'Economics, Business Studies, Accountancy, Statistics',
        subjects: ['Economics', 'Business Studies', 'Accountancy', 'Statistics'],
        practicalComponents: 'Quantitative problem sets, statistical modeling exercises, and applied accounting workshops.',
        pathwayNote: 'Ideal for students aiming toward Finance, Actuarial Studies, Economics, and Management.',
      },
    ],
    learningOutcomes: [
      'Understand accounting principles, financial statements, and contemporary business structures.',
      'Analyze microeconomic and macroeconomic frameworks with clarity and real-world relevance.',
      'Apply statistical and computational tools to interpret commercial data accurately.',
    ],
  },
  {
    id: 'arts',
    name: 'Arts / Humanities Stream',
    offered: false, // Set to true and populate official combinations if offered by the campus
    image: MEDIA_ASSETS.heroLibraryStudy,
    imageAlt: 'Students reading humanities and social science reference books in the college library',
    summary:
      '[Optional Stream — Currently marked as conditional/editable. Enable in programs.ts only if Humanities combinations are formally offered.]',
    combinations: [
      {
        code: 'HEPS (Placeholder)',
        title: 'History, Economics, Political Science, Sociology',
        subjects: ['History', 'Economics', 'Political Science', 'Sociology'],
        practicalComponents: 'Seminar presentations, archival reading assignments, and guided essay workshops.',
        pathwayNote: 'Foundation for Law, Civil Services preparation, Journalism, Public Policy, and Social Sciences.',
      },
    ],
    learningOutcomes: [
      'Develop critical reading, historical synthesis, and civic understanding.',
      'Communicate structured arguments effectively in academic writing and debate.',
    ],
  },
];

export const yearOverviews = {
  firstYearPU: {
    title: 'First Year Pre-University (I PUC)',
    subtitle: 'Transitioning from secondary schooling into disciplined, subject-focused Pre-University study.',
    intro:
      'First Year PU establishes the foundational concepts, study habits, and practical discipline essential for Pre-University success under the Department of Pre-University Education (DPUE), Karnataka framework.',
    curriculumNotes: [
      'Two languages (Part I: English & Second Language) paired with four core elective subjects (Part II).',
      'Continuous internal assessments, unit tests, and supervised practical sessions where applicable.',
      'Academic orientation sessions supporting students transitioning from SSLC / CBSE / ICSE boards.',
    ],
  },
  secondYearPU: {
    title: 'Second Year Pre-University (II PUC)',
    subtitle: 'Consolidating subject mastery, laboratory proficiency, and Karnataka II PU Board Examination readiness.',
    intro:
      'Second Year PU deepens subject specialization and prepares students systematically for the Karnataka State II PU Board Examinations through structured revision, model assessments, and mentoring.',
    curriculumNotes: [
      'Comprehensive coverage of prescribed DPUE II PUC syllabus across theory and practical components.',
      'Dedicated preparatory examinations, answer-script feedback sessions, and doubt-clearing clinics.',
      'Guidance for laboratory practical examinations and project evaluations per official board guidelines.',
    ],
  },
};
