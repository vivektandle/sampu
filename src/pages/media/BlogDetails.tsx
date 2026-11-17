import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SmartImage } from '@/src/components/SmartImage';
import { BlogCard } from '@/src/components/BlogCard';
import { Button } from '@/src/components/ui/button';
import { blogPosts } from '@/src/data/blogs';

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-24 text-center px-4">
        <SeoHead
          title="Article Not Found | Sambhram PU College"
          description="The requested blog article could not be found."
          path={`/media/blogs/${slug || ''}`}
        />
        <h1 className="font-heading text-3xl font-bold text-[#363789]">Article Not Found</h1>
        <p className="mt-3 text-base text-[#68778A]">
          The requested article does not exist or may have been moved.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/media/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </section>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div>
      <SeoHead
        title={`${post.title} | Sambhram PU College`}
        description={post.excerpt}
        path={`/media/blogs/${post.slug}`}
        type="article"
        breadcrumbs={[
          { name: 'Media', path: '/media' },
          { name: 'Blogs', path: '/media/blogs' },
          { name: post.title, path: `/media/blogs/${post.slug}` },
        ]}
      />

      <PageBanner
        title={post.title}
        subtitle={`${post.category} · ${post.publishedDate} · ${post.readTime}`}
        breadcrumbs={[
          { label: 'Media', to: '/media' },
          { label: 'Blogs', to: '/media/blogs' },
          { label: 'Article' },
        ]}
        image={post.featuredImage}
      />

      <article className="py-14 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/media/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#363789] hover:text-[#EC3237]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Blogs</span>
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-8">
            <SmartImage
              src={post.featuredImage}
              alt={post.imageAlt}
              loading="eager"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-[#68778A] pb-6 border-b border-slate-200">
            <span className="font-semibold text-[#EC3237]">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>By {post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="mt-8 space-y-5 text-base text-[#202124] leading-[1.8]">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-[#363789] first-letter:float-left first-letter:mr-3 first-letter:leading-none'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="py-16 bg-[#F5F6FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-[#363789] mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {relatedPosts.map((rel) => (
              <BlogCard key={rel.slug} post={rel} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
