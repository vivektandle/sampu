import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BookOpen,
  Compass,
  FlaskConical,
  GraduationCap,
  Library,
  MessageCircle,
  Users,
  Calendar,
} from 'lucide-react';
import { HeroSlider } from '@/src/components/HeroSlider';
import { SectionHeading } from '@/src/components/SectionHeading';
import { ProgramCard } from '@/src/components/ProgramCard';
import { SmartImage } from '@/src/components/SmartImage';
import { SeoHead } from '@/src/components/SeoHead';
import { Button } from '@/src/components/ui/button';
import { MEDIA_ASSETS } from '@/src/assets/media';
import { academicStreams } from '@/src/data/programs';
import { announcementsList } from '@/src/data/announcements';

gsap.registerPlugin(ScrollTrigger);

const whyChooseItems = [
  {
    icon: GraduationCap,
    title: 'Experienced Faculty',
    description:
      'Dedicated Pre-University lecturers focused on concept clarity, approachable mentoring, and consistent academic feedback.',
  },
  {
    icon: Users,
    title: 'Student-Centric Learning',
    description:
      'Supportive classroom culture where individual doubts, study planning, and peer learning are actively encouraged.',
  },
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description:
      'Structured lesson plans, periodic unit assessments, and systematic board examination preparation aligned with DPUE Karnataka.',
  },
  {
    icon: FlaskConical,
    title: 'Practical Learning',
    description:
      'Dedicated Physics, Chemistry, Biology, and Computer Science laboratories designed for hands-on experimentation.',
  },
  {
    icon: Library,
    title: 'Modern Infrastructure',
    description:
      'Ventilated classrooms, curated reference library, reading hall, and outdoor athletic spaces that sustain focus.',
  },
  {
    icon: Compass,
    title: 'Holistic Development',
    description:
      'Encouraging participation in cultural programs, student clubs, sports, workshops, and community celebrations.',
  },
];

const campusLifeHighlights = [
  {
    title: 'Academic Activities & Laboratories',
    category: 'Science & Commerce Learning',
    image: MEDIA_ASSETS.heroScienceLab,
    alt: 'Students conducting chemistry and microscopy practicals',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Cultural Programs & Annual Day',
    category: 'Auditorium Showcase',
    image: MEDIA_ASSETS.culturalAuditorium,
    alt: 'Students attending cultural convocation in college auditorium',
    span: '',
  },
  {
    title: 'Sports & Athletics',
    category: 'Campus Ground',
    image: MEDIA_ASSETS.sportsCampusGround,
    alt: 'Students practicing basketball and athletics on campus court',
    span: '',
  },
  {
    title: 'Student Clubs, Workshops & Study Groups',
    category: 'Campus Community',
    image: MEDIA_ASSETS.campusStudentLife,
    alt: 'Pre-University students collaborating on courtyard steps',
    span: 'lg:col-span-2',
  },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.gs-reveal', {
        y: 22,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.gs-reveal-group',
          start: 'top 82%',
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const offeredStreams = academicStreams.filter((s) => s.offered);

  return (
    <div ref={pageRef}>
      <SeoHead
        title="Sambhram PU College | Pre-University College in Karnataka"
        description="Discover Sambhram PU College in Karnataka — First Year and Second Year Pre-University courses in Science and Commerce, DPUE-aligned admissions, campus life, and enquiries."
        path="/"
        includeOrganizationSchema
      />

      {/* SECTION A: HERO SLIDER */}
      <HeroSlider />

      {/* SECTION B: WELCOME TO SAMBHRAM PU COLLEGE (Pure White) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 relative overflow-hidden rounded-xl border border-slate-200 bg-[#F5F6FA] min-h-[300px]">
              <SmartImage
                src={MEDIA_ASSETS.campusStudentLife}
                alt="Students collaborating on campus steps at Sambhram PU College"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionHeading
                eyebrow="Welcome to Sambhram PU College"
                title="A Focused Foundation for Pre-University Scholars"
              />
              <p className="mt-4 text-base text-[#68778A] leading-relaxed">
                Sambhram PU College offers a calm, structured, and academically supportive
                environment in Karnataka for students stepping into First Year and Second Year
                Pre-University education.
              </p>
              <p className="mt-3 text-base text-[#68778A] leading-relaxed">
                With an emphasis on conceptual understanding, consistent mentorship, laboratory
                engagement, and respectful campus discipline, we help learners build academic
                confidence for university studies and beyond.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/about/college">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about/principal-message">Principal&apos;s Message</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: PROGRAMS OFFERED (Soft Grey) */}
      <section className="py-16 sm:py-20 bg-[#F5F6FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Pre-University Academics"
              title="Programs Offered (I PUC & II PUC)"
              description="Curriculum structured in accordance with the Department of Pre-University Education (DPUE), Government of Karnataka."
            />
            <Button asChild variant="outline">
              <Link to="/academics">View Complete Academics</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offeredStreams.map((stream) => (
              <ProgramCard key={stream.id} stream={stream} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: WHY CHOOSE SAMBHRAM? (Pure White) */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80 gs-reveal-group">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Educational Strengths"
            title="Why Choose Sambhram PU College?"
            description="Key academic and student-support pillars that guide everyday teaching and campus culture."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="gs-reveal rounded-xl border border-slate-200 bg-[#F5F6FA] p-6 transition-colors hover:border-[#363789]/35 hover:bg-[#E8EAF6]/45"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#363789] text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-[#363789]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#68778A] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION E: LIFE AT SAMBHRAM PU COLLEGE (Soft Grey) */}
      <section className="py-16 sm:py-20 bg-[#F5F6FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Campus Culture"
              title="Life at Sambhram PU College"
              description="Academic workshops, laboratory explorations, cultural programs, sports, student clubs, and campus celebrations."
            />
            <Button asChild variant="outline">
              <Link to="/media/gallery">Explore Photo Gallery</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[230px]">
            {campusLifeHighlights.map((item) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-[#202124] ${item.span}`}
              >
                <SmartImage
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/90 via-[#363789]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-semibold text-white underline decoration-[#EC3237] decoration-2 underline-offset-4">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 font-heading text-base sm:text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: LATEST ANNOUNCEMENTS (Pure White) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Campus Circulars"
              title="Latest Announcements"
              description="Editable institutional notices covering admissions, curriculum updates, and student handbook resources."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcementsList.map((ann) => (
              <article
                key={ann.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F5F6FA] p-6 transition-colors hover:bg-white hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#68778A]">
                    <Calendar className="h-3.5 w-3.5 text-[#EC3237]" aria-hidden="true" />
                    <span className="font-semibold text-[#EC3237]">{ann.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{ann.date}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-[#363789]">
                    {ann.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200">
                  <Link
                    to={ann.linkTo}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#363789] hover:text-[#EC3237] transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: ADMISSION CTA (Royal Blue Institutional Section with Sambhram Red CTA) */}
      <section className="py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 rounded-2xl border border-white/20 bg-[#363789] p-8 sm:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-white underline decoration-[#EC3237] decoration-2 underline-offset-4">
                Admissions &amp; Counselling
              </p>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-white">
                Begin Your Pre-University Journey at Sambhram PU College
              </h2>
              <p className="mt-3 text-base text-slate-200 leading-relaxed">
                Speak with our Admissions Desk regarding I PUC and II PUC eligibility norms under
                DPUE Karnataka, subject combinations, and campus visits.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Button asChild variant="default" size="lg">
                <Link to="/contact?subject=Admission%20Enquiry">
                  <span>Enquire Now</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-[#363789]"
              >
                <Link to="/admission">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Admission Guidelines</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
