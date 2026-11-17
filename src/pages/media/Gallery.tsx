import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { GalleryGrid } from '@/src/components/GalleryGrid';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function Gallery() {
  return (
    <div>
      <SeoHead
        title="Photo Gallery | Sambhram PU College"
        description="Browse campus life, laboratories, cultural events, sports, annual day, science exhibitions, and celebrations in the Sambhram PU College photo gallery."
        path="/media/gallery"
        breadcrumbs={[
          { name: 'Media', path: '/media' },
          { name: 'Gallery', path: '/media/gallery' },
        ]}
      />

      <PageBanner
        title="Campus Photo Gallery"
        subtitle="Explore academic facilities, student life, cultural gatherings, and campus athletics."
        breadcrumbs={[{ label: 'Media', to: '/media' }, { label: 'Gallery' }]}
        image={MEDIA_ASSETS.campusStudentLife}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Archive"
            title="Filter by Campus Category"
            description="Select a category below or click any photograph to inspect it in the full-screen lightbox."
            className="mb-8"
          />

          <GalleryGrid showFilters />
        </div>
      </section>
    </div>
  );
}
