// Editable institutional configuration — ready for CMS / Node.js + MySQL backend integration

export const collegeInfo = {
  name: 'Sambhram PU College',
  shortName: 'Sambhram PU',
  affiliation: 'Department of Pre-University Education (DPUE), Government of Karnataka (Editable Affiliation Code)',
  locationSummary: 'Bengaluru, Karnataka, India (Editable Official Campus Location)',
  tagline: 'Pre-University Education Rooted in Discipline, Curiosity, and Academic Integrity',
  establishedNote: '[Establishment Year — Editable in CMS]',
  contact: {
    addressLine1: '[Official Campus Building / Street Address — Editable]',
    addressLine2: '[Locality, Bengaluru, Karnataka — PIN Code]',
    primaryPhone: '[+91 80 XXXX XXXX — Official Landline]',
    secondaryPhone: '[+91 9XXXX XXXXX — Admissions Desk]',
    email: '[admissions@sambhrampucollege.edu.in]',
    officeHours: 'Monday to Saturday · [08:30 AM – 04:30 PM] (Editable)',
    whatsappNumber: '', // Configure official 12-digit number e.g. '9198XXXXXXXX' when live
    whatsappPlaceholderDisplay: '[Official WhatsApp Number — Configure in collegeInfo.ts]',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1537110905665!2d77.545962!3d13.0894431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22f6a7b9f5d5%3A0x3d76be2d9caf2bf7!2sSambhram%20Pre-University%20College!5e0!3m2!1sen!2sin!4v1794770919917!5m2!1sen!2sin',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sambhram+Pre-University+College+Bengaluru',
  },
  socialLinks: [
    { label: 'Facebook', href: '#social-facebook', placeholderNote: 'Configure official Facebook URL' },
    { label: 'Instagram', href: '#social-instagram', placeholderNote: 'Configure official Instagram URL' },
    { label: 'YouTube', href: '#social-youtube', placeholderNote: 'Configure official YouTube channel URL' },
    { label: 'LinkedIn', href: '#social-linkedin', placeholderNote: 'Configure official LinkedIn URL' },
  ],
  downloadCenter: [
    {
      id: 'prospectus',
      title: 'College Information Prospectus',
      category: 'Admissions',
      description: 'Editable institutional overview covering streams, campus facilities, and admission workflow.',
      fileName: 'Sambhram-PU-College-Prospectus-Outline.txt',
    },
    {
      id: 'first-pu-syllabus',
      title: 'First Year PU Curriculum Overview',
      category: 'Academics',
      description: 'Subject structure and DPUE Karnataka First Year Pre-University academic outline.',
      fileName: 'First-Year-PU-Curriculum-Overview.txt',
    },
    {
      id: 'second-pu-syllabus',
      title: 'Second Year PU Board Prep Guide',
      category: 'Academics',
      description: 'Second Year Pre-University subject syllabus and practical exam framework.',
      fileName: 'Second-Year-PU-Curriculum-Overview.txt',
    },
    {
      id: 'student-handbook',
      title: 'Student Guidelines & Conduct Summary',
      category: "Sambhram's Corner",
      description: 'Campus conduct, library usage, and academic expectations for PU students.',
      fileName: 'Sambhram-PU-Student-Guidelines.txt',
    },
  ],
};
