import { useState } from 'react';
import { Search } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { BlogCard } from '@/src/components/BlogCard';
import { Input } from '@/src/components/ui/form-controls';
import { blogPosts } from '@/src/data/blogs';
import { MEDIA_ASSETS } from '@/src/assets/media';

const blogCategories = ['All', 'Academic Guidance', 'Science & Research', 'Student Success'] as const;

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <div>
      <SeoHead
        title="Academic Blogs | Sambhram PU College"
        description="Read Pre-University study guides, stream selection articles, and laboratory learning insights from Sambhram PU College."
        path="/media/blogs"
        breadcrumbs={[
          { name: 'Media', path: '/media' },
          { name: 'Blogs', path: '/media/blogs' },
        ]}
      />

      <PageBanner
        title="Blogs & Academic Guides"
        subtitle="Editable editorial resources supporting Pre-University students and families."
        breadcrumbs={[{ label: 'Media', to: '/media' }, { label: 'Blogs' }]}
        image={MEDIA_ASSETS.heroLibraryStudy}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Editorial Articles"
              title="Articles & Study Perspectives"
              description="Search by keyword or filter by topic."
            />

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative sm:w-64">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#68778A]"
                  aria-hidden="true"
                />
                <Input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  aria-label="Search blog articles"
                  className="pl-9"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Blog category filters">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#363789] text-white'
                    : 'border border-slate-200 bg-[#F5F6FA] text-[#68778A] hover:text-[#363789]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-10 text-center">
              <p className="text-base font-medium text-[#363789]">
                No blog articles matched your search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 text-sm font-semibold text-[#EC3237] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
