import { Link } from 'react-router-dom';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { SmartImage } from '@/src/components/SmartImage';
import { Button } from '@/src/components/ui/button';
import { aboutCollegeData } from '@/src/data/aboutData';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function AboutCollege() {
  return (
    <div>
      <SeoHead
        title="About College | Sambhram PU College"
        description="Background, educational philosophy, academic approach, student development, and campus environment at Sambhram PU College."
        path="/about/college"
        breadcrumbs={[
          { name: 'About Us', path: '/about' },
          { name: 'About College', path: '/about/college' },
        ]}
      />

      <PageBanner
        title="About the College"
        subtitle="Institutional overview, academic approach, and learning environment."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'About College' }]}
        image={MEDIA_ASSETS.campusImage}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <SectionHeading eyebrow="Introduction" title="Who We Are" />
              <p className="text-base text-[#202124] leading-relaxed">{aboutCollegeData.intro}</p>
              <p className="text-sm text-[#68778A] leading-relaxed rounded-lg border border-slate-200 bg-[#F5F6FA] p-4">
                {aboutCollegeData.history}
              </p>
            </div>
            <div className="lg:col-span-6 overflow-hidden rounded-xl border border-slate-200">
              <SmartImage
                src={MEDIA_ASSETS.heroCampusFacade}
                alt="Sambhram PU College academic campus block"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
            <div className="rounded-xl border border-slate-200 bg-[#E8EAF6]/60 p-7">
              <h3 className="font-heading text-xl font-semibold text-[#363789]">
                Educational Philosophy &amp; Academic Approach
              </h3>
              <p className="mt-3 text-sm text-[#68778A] leading-relaxed">
                {aboutCollegeData.philosophy}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-7">
              <h3 className="font-heading text-xl font-semibold text-[#363789]">
                Student Development &amp; Campus Environment
              </h3>
              <p className="mt-3 text-sm text-[#68778A] leading-relaxed">
                {aboutCollegeData.environment}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="default">
              <Link to="/academics">Explore Academic Streams</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about/vision-mission">Vision &amp; Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
