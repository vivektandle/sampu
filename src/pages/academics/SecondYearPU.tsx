import { Download } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { Button } from '@/src/components/ui/button';
import { academicStreams, yearOverviews } from '@/src/data/programs';
import { downloadDocumentFile } from '@/src/components/DownloadCenter';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function SecondYearPU() {
  const offeredStreams = academicStreams.filter((s) => s.offered);

  return (
    <div>
      <SeoHead
        title="Second Year PU (II PUC) | Sambhram PU College"
        description="Explore Second Year Pre-University (II PUC) streams, subject content, practical examinations, and Karnataka II PU board preparation."
        path="/academics/second-year-pu"
        breadcrumbs={[
          { name: 'Academics', path: '/academics' },
          { name: 'Second Year PU', path: '/academics/second-year-pu' },
        ]}
      />

      <PageBanner
        title={yearOverviews.secondYearPU.title}
        subtitle={yearOverviews.secondYearPU.subtitle}
        breadcrumbs={[{ label: 'Academics', to: '/academics' }, { label: 'Second Year PU' }]}
        image={MEDIA_ASSETS.academicsCommerceClass}
      />

      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="II PUC Board Preparation"
              title="Structured Readiness for State Board Examinations"
              description={yearOverviews.secondYearPU.intro}
            />
            <Button
              type="button"
              onClick={() =>
                downloadDocumentFile(
                  'Second Year PU (II PUC) Syllabus Overview',
                  'Sambhram-Second-Year-PU-Syllabus.txt',
                  [
                    yearOverviews.secondYearPU.intro,
                    ...yearOverviews.secondYearPU.curriculumNotes,
                  ]
                )
              }
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download II PUC Syllabus</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {yearOverviews.secondYearPU.curriculumNotes.map((note, idx) => (
              <div key={idx} className="rounded-xl border border-[#363789]/15 bg-[#E8EAF6] p-6">
                <p className="font-mono text-xs font-semibold text-[#EC3237]">0{idx + 1}</p>
                <p className="mt-2 text-sm text-[#202124] leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F6FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Stream Details"
            title="II PUC Subject Combinations & Practical Exams"
            className="mb-8"
          />

          <Tabs defaultValue={offeredStreams[0]?.id || 'science'}>
            <TabsList>
              {offeredStreams.map((stream) => (
                <TabsTrigger key={stream.id} value={stream.id}>
                  {stream.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {offeredStreams.map((stream) => (
              <TabsContent key={stream.id} value={stream.id}>
                <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stream.combinations.map((combo) => (
                      <div
                        key={combo.code}
                        className="rounded-lg border border-slate-200 bg-[#F5F6FA] p-5"
                      >
                        <p className="font-mono text-xs font-semibold text-[#EC3237]">
                          {combo.code}
                        </p>
                        <h3 className="mt-1 font-heading text-lg font-semibold text-[#363789]">
                          {combo.title}
                        </h3>
                        <p className="mt-2 text-sm text-[#68778A] leading-relaxed">
                          <strong className="text-[#202124]">Practical &amp; Internal Evaluation:</strong>{' '}
                          {combo.practicalComponents}
                        </p>
                        <p className="mt-2 text-sm text-[#68778A] leading-relaxed">
                          <strong className="text-[#202124]">Higher Education Readiness:</strong>{' '}
                          {combo.pathwayNote}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-[#363789]/15 bg-[#E8EAF6] p-5">
                    <h4 className="font-heading text-base font-semibold text-[#363789]">
                      Board Examination Preparation Framework
                    </h4>
                    <p className="mt-1.5 text-sm text-[#202124] leading-relaxed">
                      Subject faculty conduct chapter-wise revision schedules, blueprint-aligned
                      model tests, practical lab mock assessments, and individual answer-script
                      reviews ahead of the Karnataka II PU Annual Examinations.
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
