import { Link } from 'react-router-dom';
import { BookOpenCheck, Shield } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Button } from '@/src/components/ui/button';
import { guidelinesData } from '@/src/data/sambhramsCornerData';

export default function Guidelines() {
  return (
    <div>
      <SeoHead
        title="Student Guidelines | Sambhram's Corner"
        description="Academic, classroom, examination, and campus conduct guidelines for students at Sambhram PU College."
        path="/sambhrams-corner/guidelines"
        breadcrumbs={[
          { name: "Sambhram's Corner", path: '/sambhrams-corner/guidelines' },
          { name: 'Guidelines', path: '/sambhrams-corner/guidelines' },
        ]}
      />

      <PageBanner
        title="Student Guidelines"
        subtitle="Academic, classroom, examination, and campus conduct handbook for Sambhram PU College students."
        breadcrumbs={[{ label: "Sambhram's Corner" }, { label: 'Guidelines' }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="Student Handbook"
            title="Everyday Academic & Campus Expectations"
            description={guidelinesData.intro}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidelinesData.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-6 sm:p-7"
              >
                <div className="flex items-center gap-2.5 text-[#363789]">
                  <BookOpenCheck className="h-5 w-5 text-[#EC3237]" aria-hidden="true" />
                  <h2 className="font-heading text-xl font-semibold">{section.title}</h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-[#68778A] leading-relaxed">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#EC3237] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#363789] bg-[#363789] p-6 text-white">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-[#EC3237] shrink-0" aria-hidden="true" />
              <p className="text-sm sm:text-base">
                Review attendance monitoring, campus rules, and library regulations in the student
                handbook sections.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default" size="sm">
                <Link to="/sambhrams-corner/attendance">Attendance Policy</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-[#363789]"
              >
                <Link to="/sambhrams-corner/rules-regulations">Rules &amp; Regulations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
