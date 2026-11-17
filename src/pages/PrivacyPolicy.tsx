import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { collegeInfo } from '@/src/data/collegeInfo';

export default function PrivacyPolicy() {
  return (
    <div>
      <SeoHead
        title="Privacy Policy | Sambhram PU College"
        description="Privacy Policy outlining how Sambhram PU College collects and safeguards student and parent enquiry information."
        path="/privacy-policy"
        breadcrumbs={[{ name: 'Privacy Policy', path: '/privacy-policy' }]}
      />

      <PageBanner
        title="Privacy Policy"
        subtitle="How Sambhram PU College handles enquiry details and website visitor information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-sm sm:text-base text-[#202124] leading-relaxed">
          <p className="rounded-lg border border-slate-200 bg-[#F5F6FA] p-4 text-xs sm:text-sm text-[#68778A]">
            Editable institutional policy template. Customize with legal counsel and official
            contact details prior to production deployment.
          </p>

          <div>
            <h2 className="font-heading text-xl font-semibold text-[#363789]">
              1. Information Collected via Enquiry Forms
            </h2>
            <p className="mt-2 text-[#68778A]">
              When students or parents submit an Admission Enquiry or Contact Form on the{' '}
              {collegeInfo.name} website, we collect the name, email address, phone number, enquiry
              subject, and message solely for academic counselling and administrative response.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-[#363789]">
              2. Use &amp; Protection of Data
            </h2>
            <p className="mt-2 text-[#68778A]">
              Submitted details are used strictly for institutional communication regarding
              Pre-University admissions, curriculum information, and scheduled campus visits. We do
              not sell or distribute personal contact data to third-party marketers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-[#363789]">
              3. Contact for Privacy Queries
            </h2>
            <p className="mt-2 text-[#68778A]">
              For questions or correction requests regarding submitted enquiry data, please contact{' '}
              {collegeInfo.contact.email} or call {collegeInfo.contact.primaryPhone}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
