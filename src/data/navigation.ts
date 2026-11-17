export interface NavChild {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
}

export interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}

export const navigationItems: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      {
        label: 'Message',
        children: [
          { label: "Founder's Message", to: '/about/founders-message' },
          { label: "Principal's Message", to: '/about/principal-message' },
        ],
      },
      { label: 'About College', to: '/about/college' },
      { label: 'Vision & Mission', to: '/about/vision-mission' },
      { label: 'Management', to: '/about/management' },
      { label: 'Faculty & Staff', to: '/about/faculty' },
    ],
  },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      {
        label: 'Courses',
        children: [
          { label: 'First Year PU', to: '/academics/first-year-pu' },
          { label: 'Second Year PU', to: '/academics/second-year-pu' },
        ],
      },
    ],
  },
  {
    label: 'Admission',
    to: '/admission',
    children: [
      {
        label: 'Eligibility and Norms',
        children: [
          { label: 'First Year PU Eligibility', to: '/admission/first-year-eligibility' },
          { label: 'Second Year PU Eligibility', to: '/admission/second-year-eligibility' },
        ],
      },
    ],
  },
  {
    label: "Sambhram's Corner",
    to: '/sambhrams-corner/guidelines',
    children: [
      { label: 'Guidelines', to: '/sambhrams-corner/guidelines' },
      { label: 'Attendance Monitoring', to: '/sambhrams-corner/attendance' },
      { label: 'Rules & Regulations', to: '/sambhrams-corner/rules-regulations' },
      { label: 'Library', to: '/sambhrams-corner/library' },
    ],
  },
  {
    label: 'Media',
    to: '/media',
    children: [
      { label: 'Gallery', to: '/media/gallery' },
      { label: 'Blogs', to: '/media/blogs' },
      { label: 'Videos', to: '/media/videos' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
];
