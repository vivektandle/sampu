import { useState } from 'react';
import { Play } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { SmartImage } from '@/src/components/SmartImage';
import { Dialog, DialogContent, DialogTitle } from '@/src/components/ui/dialog';
import { videoGallery, type VideoItem } from '@/src/data/videos';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <div>
      <SeoHead
        title="Campus Videos | Sambhram PU College"
        description="Watch campus walkthroughs, laboratory overviews, and student event highlights from Sambhram PU College."
        path="/media/videos"
        breadcrumbs={[
          { name: 'Media', path: '/media' },
          { name: 'Videos', path: '/media/videos' },
        ]}
      />

      <PageBanner
        title="Video Gallery"
        subtitle="Campus tours, science laboratory orientation, and cultural event highlights."
        breadcrumbs={[{ label: 'Media', to: '/media' }, { label: 'Videos' }]}
        image={MEDIA_ASSETS.culturalAuditorium}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus Films"
            title="Watch Institutional Videos"
            description="Select any video thumbnail to open the embedded YouTube viewer. Videos never autoplay automatically."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {videoGallery.map((vid) => (
              <article
                key={vid.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-[#F5F6FA] shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setSelectedVideo(vid)}
                  aria-label={`Play ${vid.title}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <SmartImage
                    src={vid.thumbnail}
                    alt={vid.thumbnailAlt}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#262768]/35 flex items-center justify-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#EC3237] text-white shadow-lg transition-transform group-hover:scale-105 group-hover:bg-[#C9232B]">
                      <Play className="h-6 w-6 fill-current ml-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </button>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[#68778A]">
                    <span className="font-medium text-[#EC3237]">{vid.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{vid.duration}</span>
                  </div>
                  <h3 className="mt-1.5 font-heading text-lg font-semibold text-[#363789]">
                    {vid.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#68778A] leading-relaxed">{vid.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(selectedVideo)} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-slate-800">
          {selectedVideo && (
            <div>
              <DialogTitle className="sr-only">{selectedVideo.title}</DialogTitle>
              <div className="aspect-video w-full">
                <iframe
                  title={selectedVideo.title}
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=0&rel=0`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="bg-[#363789] p-4 text-white">
                <p className="font-heading text-sm font-semibold">{selectedVideo.title}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
