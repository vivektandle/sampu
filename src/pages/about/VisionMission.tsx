import { Compass, Target } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { visionMissionData } from '@/src/data/aboutData';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function VisionMission() {
  return (
    <div>
      <SeoHead
        title="Vision & Mission | Sambhram PU College"
        description="Explore the Vision and Mission statements guiding quality education, student development, and values at Sambhram PU College."
        path="/about/vision-mission"
        breadcrumbs={[
          { name: 'About Us', path: '/about' },
          { name: 'Vision & Mission', path: '/about/vision-mission' },
        ]}
      />

      <PageBanner
        title="Vision & Mission"
        subtitle="Long-term educational aspirations and daily academic commitments."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'Vision & Mission' }]}
        image={MEDIA_ASSETS.campusImage}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Section */}
          <article className="rounded-xl border border-[#363789] bg-[#363789] text-white p-8 sm:p-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#EC3237] text-white">
              <Compass className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-white">Our Vision</h2>
            <p className="mt-4 text-base text-slate-100 leading-relaxed">
              {visionMissionData.vision.statement}
            </p>
            <ul className="mt-6 pt-6 border-t border-white/15 space-y-3 text-sm text-slate-200">
              {visionMissionData.vision.pillars.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#EC3237] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Mission Section */}
          <article className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-8 sm:p-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#363789] text-white">
              <Target className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-[#363789]">Our Mission</h2>
            <p className="mt-4 text-base text-[#202124] leading-relaxed">
              {visionMissionData.mission.statement}
            </p>
            <ul className="mt-6 pt-6 border-t border-slate-200 space-y-3 text-sm text-[#68778A]">
              {visionMissionData.mission.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#363789] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
