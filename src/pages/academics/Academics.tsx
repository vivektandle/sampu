import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { Button } from '@/src/components/ui/button';
import { academicStreams, languageOptions, yearOverviews } from '@/src/data/programs';
import { downloadDocumentFile } from '@/src/components/DownloadCenter';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function Academics() {
  const offeredStreams = academicStreams.filter((s) => s.offered);

  return (
    <div>
      <SeoHead
        title="Academics | Sambhram PU College"
        description="Explore First Year PU (I PUC) and Second Year PU (II PUC) Science and Commerce streams, subject combinations, and DPUE Karnataka curriculum."
        path="/academics"
        breadcrumbs={[{ name: 'Academics', path: '/academics' }]}
      />

      <PageBanner
        title="Academics & Pre-University Courses"
        subtitle="Structured I PUC and II PUC programs aligned with the Department of Pre-University Education (DPUE), Karnataka."
        breadcrumbs={[{ label: 'Academics' }]}
        image={MEDIA_ASSETS.heroLibraryStudy}
      />

      {/* Year Overview Cards */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Structure"
            title="Two-Year Pre-University Pathway"
            description="Select First Year PU or Second Year PU for detailed syllabus structure, practical sessions, and exam readiness."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-[#363789]/15 bg-[#E8EAF6] p-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-[#EC3237]">Course Level 01</p>
                <h3 className="mt-1 font-heading text-2xl font-semibold text-[#363789]">
                  {yearOverviews.firstYearPU.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#68778A] leading-relaxed">
                  {yearOverviews.firstYearPU.intro}
                </p>
              </div>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <Link to="/academics/first-year-pu">
                    <span>Explore First Year PU</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-[#363789]/15 bg-[#E8EAF6] p-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-[#EC3237]">Course Level 02</p>
                <h3 className="mt-1 font-heading text-2xl font-semibold text-[#363789]">
                  {yearOverviews.secondYearPU.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#68778A] leading-relaxed">
                  {yearOverviews.secondYearPU.intro}
                </p>
              </div>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <Link to="/academics/second-year-pu">
                    <span>Explore Second Year PU</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Tabs */}
      <section className="py-16 bg-[#F5F6FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Streams & Subject Combinations"
            title="Available Pre-University Streams"
            description="Course offerings and combinations are maintained in editable curriculum data."
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
              <TabsContent key={stream.id} value={stream.id} id={stream.id}>
                <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-[#363789]">
                        {stream.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#68778A] max-w-2xl leading-relaxed">
                        {stream.summary}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        downloadDocumentFile(
                          `${stream.name} Syllabus Overview`,
                          `Sambhram-PU-${stream.id}-Syllabus.txt`,
                          [
                            `Stream: ${stream.name}`,
                            `Languages: ${languageOptions.part1}; ${languageOptions.part2Placeholder}`,
                            ...stream.combinations.map(
                              (c) => `${c.code}: ${c.title} (${c.subjects.join(', ')})`
                            ),
                          ]
                        )
                      }
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      <span>Download Syllabus</span>
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stream.combinations.map((combo) => (
                      <div
                        key={combo.code}
                        className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-6"
                      >
                        <p className="font-mono text-xs font-semibold text-[#EC3237]">
                          {combo.code}
                        </p>
                        <h4 className="mt-1 font-heading text-lg font-semibold text-[#363789]">
                          {combo.title}
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#202124]">
                          {combo.subjects.map((sub, i) => (
                            <span key={sub}>
                              {sub}
                              {i < combo.subjects.length - 1 ? ' · ' : ''}
                            </span>
                          ))}
                        </div>
                        <p className="mt-3 text-xs text-[#68778A] leading-relaxed">
                          <strong className="text-[#202124]">Practicals:</strong>{' '}
                          {combo.practicalComponents}
                        </p>
                        <p className="mt-2 text-xs text-[#68778A] leading-relaxed">
                          <strong className="text-[#202124]">Higher Study Direction:</strong>{' '}
                          {combo.pathwayNote}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-[#363789]/15 bg-[#E8EAF6] p-5 text-sm text-[#202124]">
                    <p className="font-semibold text-[#363789]">Language Structure (Part I)</p>
                    <p className="mt-1">{languageOptions.part1}</p>
                    <p className="mt-1">{languageOptions.part2Placeholder}</p>
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
