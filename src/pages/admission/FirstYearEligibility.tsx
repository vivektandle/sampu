import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Button } from '@/src/components/ui/button';
import { firstYearEligibility } from '@/src/data/admissionsData';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function FirstYearEligibility() {
  return (
    <div>
      <SeoHead
        title="First Year PU Eligibility & Norms | Sambhram PU College"
        description="SSLC / Class 10 qualification requirements, DPUE Karnataka admission norms, and required documents for First Year PU (I PUC) admission."
        path="/admission/first-year-eligibility"
        breadcrumbs={[
          { name: 'Admission', path: '/admission' },
          { name: 'First Year PU Eligibility', path: '/admission/first-year-eligibility' },
        ]}
      />

      <PageBanner
        title={firstYearEligibility.title}
        subtitle="Qualification criteria, document verification checklist, and Karnataka PU admission norms."
        breadcrumbs={[
          { label: 'Admission', to: '/admission' },
          { label: 'First Year PU Eligibility' },
        ]}
        image={MEDIA_ASSETS.campusImage}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-xl border border-[#363789]/15 bg-[#E8EAF6] p-7">
            <SectionHeading eyebrow="Qualifying Examination" title="SSLC / Class 10 Qualification" />
            <p className="mt-3 text-base text-[#202124] leading-relaxed">
              {firstYearEligibility.qualification}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[#363789]">
              DPUE Karnataka Admission Norms
            </h2>
            <ul className="mt-4 space-y-3">
              {firstYearEligibility.norms.map((norm) => (
                <li
                  key={norm}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-[#68778A] leading-relaxed"
                >
                  <CheckCircle2
                    className="h-5 w-5 text-[#EC3237] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{norm}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[#363789]">
              Documents Required for First Year PU
            </h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {firstYearEligibility.requiredDocs.map((doc) => (
                <li
                  key={doc}
                  className="rounded-lg border border-slate-200 bg-[#F5F6FA] p-4 text-sm text-[#202124]"
                >
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg">
              <Link to="/contact?subject=Admission%20Enquiry">
                <span>Submit I PUC Admission Enquiry</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/academics/first-year-pu">Explore I PUC Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
