import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/src/data/blogs';
import { SmartImage } from './SmartImage';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-lg">
      <Link
        to={`/media/blogs/${post.slug}`}
        className="block aspect-[4/3] overflow-hidden bg-[#F5F6FA]"
      >
        <SmartImage
          src={post.featuredImage}
          alt={post.imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#68778A]">
          <span className="font-semibold text-[#EC3237]">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-2.5 font-heading text-lg font-semibold text-[#363789] leading-snug">
          <Link
            to={`/media/blogs/${post.slug}`}
            className="hover:text-[#EC3237] transition-colors"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-sm text-[#68778A] leading-relaxed">{post.excerpt}</p>
        <div className="mt-5 pt-4 border-t border-slate-100">
          <Link
            to={`/media/blogs/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#363789] hover:text-[#EC3237] transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
