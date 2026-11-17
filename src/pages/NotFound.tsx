import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { SeoHead } from '@/src/components/SeoHead';
import { Button } from '@/src/components/ui/button';

export default function NotFound() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Page Not Found (404) | Sambhram PU College"
        description="The requested page on the Sambhram PU College portal could not be found."
        path="/404"
      />

      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-center shadow-xs">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#E8EAF6] text-[#363789]">
          <Compass className="h-7 w-7 text-[#EC3237]" aria-hidden="true" />
        </div>
        <p className="mt-4 font-mono text-sm font-semibold text-[#EC3237]">Error 404</p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-[#363789]">Page Not Found</h1>
        <p className="mt-3 text-sm sm:text-base text-[#68778A] leading-relaxed">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Return to Home</span>
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact College Office</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
