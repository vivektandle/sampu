import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { GalleryGrid } from '@/src/components/GalleryGrid';
import { BlogCard } from '@/src/components/BlogCard';
import { SmartImage } from '@/src/components/SmartImage';
import { Button } from '@/src/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/src/components/ui/dialog';
import { blogPosts } from '@/src/data/blogs';
import { videoGallery, type VideoItem } from '@/src/data/videos';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function Media() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  // Display exactly THREE featured blogs on the Media landing page
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <div>
      <SeoHead
        title="Media | Gallery, Blogs & Videos | Sambhram PU College"
        description="Explore campus photographs, educational blogs, and campus orientation videos from Sambhram PU College."
        path="/media"
        breadcrumbs={[{ name: 'Media', path: '/media' }]}
      />

      <PageBanner
        title="Campus Media Center"
        subtitle="Photographic stories, academic perspectives, and campus video highlights."
        breadcrumbs={[{ label: 'Media' }]}
        image={MEDIA_ASSETS.culturalAuditorium}
      />

      {/* Section 1: Gallery Preview */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Photo Archive"
              title="Campus Gallery"
              description="Snapshots of academic spaces, laboratories, sports grounds, and student gatherings."
            />
            <Button asChild variant="outline">
              <Link to="/media/gallery">
                <span>View Full Gallery</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <GalleryGrid limit={6} showFilters={false} />
        </div>
      </section>

      {/* Section 2: Featured Blogs (Exactly Three) */}
      <section className="py-16 bg-[#F5F6FA] border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Academic Insights"
              title="Featured Blogs"
              description="Guidance for Pre-University students and parents on streams, laboratories, and study discipline."
            />
            <Button asChild variant="outline">
              <Link to="/media/blogs">
                <span>All Blogs</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Videos Preview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Campus Films"
              title="Featured Videos"
              description="Campus walkthroughs and academic orientation highlights (click play to open viewer)."
            />
            <Button asChild variant="outline">
              <Link to="/media/videos">
                <span>View All Videos</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {videoGallery.map((vid) => (
              <article
                key={vid.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-[#F5F6FA] shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(vid)}
                  aria-label={`Play video: ${vid.title}`}
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
                  <h3 className="mt-1.5 font-heading text-base font-semibold text-[#363789]">
                    {vid.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#68778A] leading-relaxed">{vid.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(activeVideo)} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-slate-800">
          {activeVideo && (
            <div>
              <DialogTitle className="sr-only">{activeVideo.title}</DialogTitle>
              <div className="aspect-video w-full">
                <iframe
                  title={activeVideo.title}
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="bg-[#363789] p-4 text-white">
                <p className="font-heading text-sm font-semibold">{activeVideo.title}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
