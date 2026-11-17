import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Compass, Eye, ShieldCheck, Users } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { aboutCollegeData } from '@/src/data/aboutData';
import { MEDIA_ASSETS } from '@/src/assets/media';

const aboutSubpages = [
  {
    icon: Users,
    title: "Founder's Message",
    description: 'Read the founding vision and educational philosophy guiding Sambhram PU College.',
    to: '/about/founders-message',
  },
  {
    icon: BookOpen,
    title: "Principal's Message",
    description: 'Message from the Principal on academic discipline, mentoring, and student growth.',
    to: '/about/principal-message',
  },
  {
    icon: Compass,
    title: 'About College',
    description: 'Overview of institutional heritage, teaching approach, and campus atmosphere.',
    to: '/about/college',
  },
  {
    icon: Eye,
    title: 'Vision & Mission',
    description: 'Long-term academic aspirations and daily educational commitments.',
    to: '/about/vision-mission',
  },
  {
    icon: ShieldCheck,
    title: 'Management & Faculty',
    description: 'Meet the governing leadership profiles and Pre-University department faculty.',
    to: '/about/faculty',
  },
];

export default function AboutUs() {
  return (
    <div>
      <SeoHead
        title="About Us | Sambhram PU College"
        description="Learn about Sambhram PU College's leadership messages, institutional philosophy, vision and mission, management, and faculty directory."
        path="/about"
        breadcrumbs={[{ name: 'About Us', path: '/about' }]}
      />

      <PageBanner
        title="About Sambhram PU College"
        subtitle="Dedicated to structured Pre-University education, intellectual discipline, and thoughtful student mentorship in Karnataka."
        breadcrumbs={[{ label: 'About Us' }]}
        image={MEDIA_ASSETS.campusImage}
      />

      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Institutional Overview"
            title="Academic Values & Learning Culture"
            description={aboutCollegeData.intro}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutCollegeData.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-slate-200 bg-[#E8EAF6]/60 p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-[#363789]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-[#68778A] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F6FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Explore Sections"
            title="Leadership, Heritage & People"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutSubpages.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8EAF6] text-[#363789]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-[#363789]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#68778A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#363789] group-hover:text-[#EC3237] transition-colors">
                    <span>View Section</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
