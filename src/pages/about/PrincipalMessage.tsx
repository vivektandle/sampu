import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { SectionHeading } from '@/src/components/SectionHeading';
import { SeoHead } from '@/src/components/SeoHead';
import { SmartImage } from '@/src/components/SmartImage';
import { principalMessageData } from '@/src/data/aboutData';

export default function PrincipalMessage() {
  return (
    <div>
      <SeoHead
        title="Principal's Message | Sambhram PU College"
        description="Read the Principal's welcome message, academic philosophy, and approach to student development at Sambhram PU College."
        path="/about/principal-message"
        breadcrumbs={[
          { name: 'About Us', path: '/about' },
          { name: "Principal's Message", path: '/about/principal-message' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <Breadcrumbs
              items={[{ label: 'About Us', to: '/about' }, { label: "Principal's Message" }]}
            />
            <SectionHeading
              eyebrow="Academic Stewardship"
              title="Principal's Message"
              description="Academic stewardship, structured mentorship, and student development during Pre-University years."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#F5F6FA]">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <SmartImage
                    src={principalMessageData.photo}
                    alt={principalMessageData.photoAlt}
                    loading="eager"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-lg font-semibold text-[#363789]">
                    {principalMessageData.name}
                  </h2>
                  <p className="mt-1 text-sm text-[#EC3237] font-medium">
                    {principalMessageData.designation}
                  </p>
                  <p className="mt-1 text-xs text-[#68778A]">
                    {principalMessageData.qualification}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <blockquote className="rounded-xl border border-slate-200 bg-[#E8EAF6]/60 p-6 font-heading text-lg sm:text-xl font-medium text-[#363789] italic leading-relaxed">
                {principalMessageData.quote}
              </blockquote>

              <div className="space-y-4 text-base text-[#202124] leading-relaxed">
                {principalMessageData.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-heading text-lg font-semibold text-[#363789]">
                  Academic &amp; Student Development Priorities
                </h3>
                <ul className="mt-3 space-y-2.5 text-sm text-[#68778A]">
                  {principalMessageData.priorities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#EC3237] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
