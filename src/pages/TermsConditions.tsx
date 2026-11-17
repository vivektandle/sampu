import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { collegeInfo } from '@/src/data/collegeInfo';

export default function TermsConditions() {
  return (
    <div>
      <SeoHead
        title="Terms & Conditions | Sambhram PU College"
        description="Terms and Conditions governing the use of the Sambhram PU College informational website."
        path="/terms-conditions"
        breadcrumbs={[{ name: 'Terms & Conditions', path: '/terms-conditions' }]}
      />

      <PageBanner
        title="Terms & Conditions"
        subtitle="Guidelines for accessing information on the Sambhram PU College portal."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-sm sm:text-base text-[#202124] leading-relaxed">
          <p className="rounded-lg border border-slate-200 bg-[#F5F6FA] p-4 text-xs sm:text-sm text-[#68778A]">
            Editable institutional terms template. Review and finalize with official college
            administration prior to launch.
          </p>

          <div>
            <h2 className="font-heading text-xl font-semibold text-[#363789]">
              1. Informational Purpose
            </h2>
            <p className="mt-2 text-[#68778A]">
              Information published on the {collegeInfo.name} website regarding courses, guidelines,
              and admissions is intended for general guidance. Final academic calendars,
              examination schedules, and eligibility norms remain subject to circulars issued by the
              Department of Pre-University Education (DPUE), Government of Karnataka, and official
              college notifications.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-[#363789]">
              2. Intellectual Property
            </h2>
            <p className="mt-2 text-[#68778A]">
              Institutional emblems, written guides, and campus media displayed on this portal may
              not be reproduced for commercial purposes without prior written consent from the
              College Administration.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-[#363789]">
              3. Updates &amp; Revisions
            </h2>
            <p className="mt-2 text-[#68778A]">
              Sambhram PU College reserves the right to update academic information, handbook
              policies, and website terms as required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
