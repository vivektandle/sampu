import { BookOpen, Clock, RotateCcw, ShieldCheck } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { SmartImage } from '@/src/components/SmartImage';
import { libraryData } from '@/src/data/sambhramsCornerData';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function Library() {
  return (
    <div>
      <SeoHead
        title="College Library | Sambhram's Corner"
        description="Explore library timings, reading room facilities, reference resources, book borrowing norms, and return rules at Sambhram PU College."
        path="/sambhrams-corner/library"
        breadcrumbs={[
          { name: "Sambhram's Corner", path: '/sambhrams-corner/guidelines' },
          { name: 'Library', path: '/sambhrams-corner/library' },
        ]}
      />

      <PageBanner
        title="College Library & Reading Room"
        subtitle="Supporting Pre-University inquiry with textbooks, reference collections, and quiet reading space."
        breadcrumbs={[
          { label: "Sambhram's Corner", to: '/sambhrams-corner/guidelines' },
          { label: 'Library' },
        ]}
        image={MEDIA_ASSETS.heroLibraryStudy}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <SectionHeading
                eyebrow="Knowledge Center"
                title="Reading Room & Academic Collections"
                description={libraryData.intro}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-[#363789]/15 bg-[#E8EAF6] p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#EC3237]">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span>Library Timings (Editable)</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-[#363789]">
                    {libraryData.timingsPlaceholder}
                  </p>
                </div>

                <div className="rounded-xl border border-[#363789]/15 bg-[#E8EAF6] p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#EC3237]">
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    <span>Borrowing Limit (Editable)</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-[#363789]">
                    {libraryData.borrowingLimitPlaceholder}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 overflow-hidden rounded-xl border border-slate-200">
              <SmartImage
                src={MEDIA_ASSETS.heroLibraryStudy}
                alt="Students reading in the Sambhram PU College Library"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-6">
              <h3 className="font-heading text-lg font-semibold text-[#363789]">
                Available Resources &amp; Reading Room
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-[#68778A]">
                {libraryData.resources.map((res) => (
                  <li key={res}>• {res}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-6">
              <h3 className="font-heading text-lg font-semibold text-[#363789]">
                Book Borrowing Rules
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-[#68778A]">
                {libraryData.borrowingRules.map((rule) => (
                  <li key={rule}>• {rule}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-6">
              <div className="flex items-center gap-2 text-[#363789]">
                <RotateCcw className="h-4 w-4 text-[#EC3237]" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold">Return Policy</h3>
              </div>
              <ul className="mt-3 space-y-2.5 text-sm text-[#68778A]">
                {libraryData.returnPolicy.map((pol) => (
                  <li key={pol}>• {pol}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-6">
              <div className="flex items-center gap-2 text-[#363789]">
                <ShieldCheck className="h-4 w-4 text-[#EC3237]" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold">Library Discipline</h3>
              </div>
              <ul className="mt-3 space-y-2.5 text-sm text-[#68778A]">
                {libraryData.discipline.map((dis) => (
                  <li key={dis}>• {dis}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <h3 className="font-heading text-lg font-semibold text-[#363789] mb-4">
              Library &amp; Reading Spaces
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  src: MEDIA_ASSETS.heroLibraryStudy,
                  alt: 'Main reading tables and reference shelves inside the college library',
                  label: 'Reference Reading Hall',
                },
                {
                  src: MEDIA_ASSETS.campusStudentLife,
                  alt: 'Students discussing textbooks and notes together',
                  label: 'Collaborative Study',
                },
                {
                  src: MEDIA_ASSETS.academicsCommerceClass,
                  alt: 'Pre-University study and academic guidance session',
                  label: 'Academic Periodicals',
                },
                {
                  src: MEDIA_ASSETS.campusImage,
                  alt: 'Sambhram PU College academic building housing the library',
                  label: 'Campus Academic Block',
                },
              ].map((photo) => (
                <figure
                  key={photo.label}
                  className="overflow-hidden rounded-lg border border-slate-200 bg-[#F5F6FA]"
                >
                  <SmartImage
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <figcaption className="px-3 py-2 text-xs font-medium text-[#363789]">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
