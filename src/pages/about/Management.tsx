import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { SmartImage } from '@/src/components/SmartImage';
import { managementProfiles } from '@/src/data/aboutData';

export default function Management() {
  return (
    <div>
      <SeoHead
        title="Management | Sambhram PU College"
        description="Governing trust leadership and academic administration profiles of Sambhram PU College."
        path="/about/management"
        breadcrumbs={[
          { name: 'About Us', path: '/about' },
          { name: 'Management', path: '/about/management' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Breadcrumbs items={[{ label: 'About Us', to: '/about' }, { label: 'Management' }]} />
            <SectionHeading
              eyebrow="Governing Leadership"
              title="Management Profiles"
              description="Institutional governance, educational stewardship, and administrative leadership."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementProfiles.map((member) => (
              <article
                key={member.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-[#F5F6FA]"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <SmartImage
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#EC3237]">{member.designation}</p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-[#363789]">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#68778A] leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
