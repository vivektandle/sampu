export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  linkTo: string;
  isPlaceholderNotice?: boolean;
}

export const announcementsList: AnnouncementItem[] = [
  {
    id: "ann-1",
    title: "First Year & Second Year PU Admission Enquiries Open",
    date: "Academic Session Circular",
    category: "Admissions",
    summary:
      "Prospective SSLC / Class 10 students and parents may connect with the Admissions Desk for stream guidance, DPUE eligibility norms, and application formalities.",
    linkTo: "/admission",
    isPlaceholderNotice: true,
  },
  {
    id: "ann-2",
    title: "Orientation & Academic Calendar Overview",
    date: "Academic Notice",
    category: "Academics",
    summary:
      "Review the First Year and Second Year Pre-University curriculum outline, practical laboratory schedules, and student handbook guidelines.",
    linkTo: "/academics",
    isPlaceholderNotice: true,
  },
  {
    id: "ann-3",
    title: "Library Reference & Reading Room Guidelines Updated",
    date: "Student Corner",
    category: "Library",
    summary:
      "Students are encouraged to register their Library Cards and review reading room rules and book borrowing norms in Sambhram’s Corner.",
    linkTo: "/sambhrams-corner/library",
    isPlaceholderNotice: true,
  },
  {
    id: "ann-4",
    title: "Attendance Monitoring & Parent Communication Schedule",
    date: "Administration",
    category: "Guidelines",
    summary:
      "Information regarding periodic attendance summaries and parent-mentor review protocols aligned with Karnataka DPUE guidelines.",
    linkTo: "/sambhrams-corner/attendance",
    isPlaceholderNotice: true,
  },
];
