import { Download } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { Button } from '@/src/components/ui/button';
import { academicStreams, languageOptions, yearOverviews } from '@/src/data/programs';
import { downloadDocumentFile } from '@/src/components/DownloadCenter';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function FirstYearPU() {
  const offeredStreams = academicStreams.filter((s) => s.offered);

  return (
    <div>
      <SeoHead
        title="First Year PU (I PUC) | Sambhram PU College"
        description="Explore First Year Pre-University (I PUC) streams, core subjects, language choices, practical learning, and curriculum outcomes at Sambhram PU College."
        path="/academics/first-year-pu"
        breadcrumbs={[
          { name: 'Academics', path: '/academics' },
          { name: 'First Year PU', path: '/academics/first-year-pu' },
        ]}
      />

      <PageBanner
        title={yearOverviews.firstYearPU.title}
        subtitle={yearOverviews.firstYearPU.subtitle}
        breadcrumbs={[{ label: 'Academics', to: '/academics' }, { label: 'First Year PU' }]}
        image={MEDIA_ASSETS.heroScienceLab}
      />

      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="I PUC Curriculum Overview"
              title="Foundation for Pre-University Mastery"
              description={yearOverviews.firstYearPU.intro}
            />
            <Button
              type="button"
              onClick={() =>
                downloadDocumentFile(
                  'First Year PU (I PUC) Syllabus Overview',
                  'Sambhram-First-Year-PU-Syllabus.txt',
                  [
                    yearOverviews.firstYearPU.intro,
                    ...yearOverviews.firstYearPU.curriculumNotes,
                  ]
                )
              }
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download I PUC Syllabus</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {yearOverviews.firstYearPU.curriculumNotes.map((note, idx) => (
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
            eyebrow="Stream Selection"
            title="I PUC Streams, Subjects & Outcomes"
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
                <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-8">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#363789]">
                      Core Subject Combinations ({stream.name})
                    </h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                      {stream.combinations.map((combo) => (
                        <div
                          key={combo.code}
                          className="rounded-lg border border-slate-200 bg-[#F5F6FA] p-5"
                        >
                          <p className="font-mono text-xs font-semibold text-[#EC3237]">
                            {combo.code}
                          </p>
                          <h4 className="mt-1 font-heading text-base font-semibold text-[#363789]">
                            {combo.title}
                          </h4>
                          <p className="mt-2 text-xs text-[#68778A]">
                            <strong className="text-[#202124]">Practical Component:</strong>{' '}
                            {combo.practicalComponents}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                    <div>
                      <h4 className="font-heading text-base font-semibold text-[#363789]">
                        Language Subjects (Part I)
                      </h4>
                      <ul className="mt-2.5 space-y-2 text-sm text-[#68778A]">
                        <li>• {languageOptions.part1}</li>
                        <li>• {languageOptions.part2Placeholder}</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading text-base font-semibold text-[#363789]">
                        I PUC Learning Outcomes
                      </h4>
                      <ul className="mt-2.5 space-y-2 text-sm text-[#68778A]">
                        {stream.learningOutcomes.map((out) => (
                          <li key={out}>• {out}</li>
                        ))}
                      </ul>
                    </div>
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
