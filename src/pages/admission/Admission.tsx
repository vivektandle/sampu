import { Link } from 'react-router-dom';
import { ArrowRight, CheckSquare, FileCheck } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { ContactForm } from '@/src/components/ContactForm';
import { DownloadCenter } from '@/src/components/DownloadCenter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { Button } from '@/src/components/ui/button';
import {
  admissionFaqs,
  admissionsOverview,
  firstYearEligibility,
} from '@/src/data/admissionsData';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function Admission() {
  return (
    <div>
      <SeoHead
        title="Admissions | Sambhram PU College"
        description="First Year and Second Year Pre-University admission overview, DPUE Karnataka eligibility norms, required documents, FAQs, and admission enquiry form."
        path="/admission"
        breadcrumbs={[{ name: 'Admission', path: '/admission' }]}
      />

      <PageBanner
        title="Pre-University Admissions"
        subtitle="Transparent, DPUE Karnataka–aligned admission guidelines for First Year PU and Second Year PU."
        breadcrumbs={[{ label: 'Admission' }]}
        image={MEDIA_ASSETS.campusImage}
      />

      {/* Admission Overview & Process */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Admission Overview"
                title="How Admissions Work"
                description={admissionsOverview.intro}
              />

              <div className="rounded-lg border border-[#EC3237]/30 bg-[#E8EAF6] p-4 text-sm text-[#202124]">
                <strong className="text-[#363789]">Official Regulatory Note:</strong>{' '}
                {admissionsOverview.importantNote}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {admissionsOverview.steps.map((st) => (
                  <div
                    key={st.step}
                    className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-5"
                  >
                    <p className="font-mono text-xs font-semibold text-[#EC3237]">
                      Step {st.step}
                    </p>
                    <h3 className="mt-1.5 font-heading text-base font-semibold text-[#363789]">
                      {st.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#68778A] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl border border-[#363789]/15 bg-[#E8EAF6] p-6 space-y-3">
                <h3 className="font-heading text-lg font-semibold text-[#363789]">
                  Eligibility &amp; Norms by Year
                </h3>
                <div className="space-y-2.5">
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/admission/first-year-eligibility">
                      <span>First Year PU (I PUC) Eligibility</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/admission/second-year-eligibility">
                      <span>Second Year PU (II PUC) Eligibility</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-[#F5F6FA] border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Verification Checklist"
                title="Documents Required"
                description="General list of documents verified during admission processing per DPUE Karnataka norms."
              />
              <ul className="mt-6 space-y-3">
                {firstYearEligibility.requiredDocs.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 text-sm text-[#202124]"
                  >
                    <CheckSquare
                      className="h-4 w-4 text-[#EC3237] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Forms & Circulars"
                title="Download Center"
                description="Downloadable overview sheets for prospective students and parents."
                className="mb-6"
              />
              <DownloadCenter />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Enquiry Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Common Questions"
                title="Admissions FAQ"
                className="mb-6"
              />
              <div className="rounded-xl border border-slate-200 bg-[#F5F6FA]">
                <Accordion type="single" collapsible>
                  {admissionFaqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger>{faq.q}</AccordionTrigger>
                      <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-[#68778A]">
                <FileCheck className="h-4 w-4 text-[#363789]" aria-hidden="true" />
                <span>
                  Always confirm current academic year admission rules with DPUE Karnataka circulars
                  and the College Office.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ContactForm defaultSubject="Admission Enquiry" sourcePage="admission" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
