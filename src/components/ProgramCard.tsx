import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { AcademicStream } from '@/src/data/programs';
import { SmartImage } from './SmartImage';
import { Button } from './ui/button';

interface ProgramCardProps {
  stream: AcademicStream;
}

export function ProgramCard({ stream }: ProgramCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F6FA]">
        <SmartImage
          src={stream.image}
          alt={stream.imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#EC3237]">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          <span>I PUC &amp; II PUC · DPUE Karnataka</span>
        </div>

        <h3 className="mt-2 font-heading text-xl font-semibold text-[#363789]">{stream.name}</h3>
        <p className="mt-2.5 text-sm text-[#68778A] leading-relaxed">{stream.summary}</p>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-xs font-semibold text-[#202124] mb-2">
            Available Subject Combinations (Editable):
          </p>
          <ul className="space-y-1.5 text-sm text-[#68778A]">
            {stream.combinations.map((combo) => (
              <li key={combo.code} className="flex items-baseline gap-2">
                <span className="font-mono text-xs font-semibold text-[#363789] shrink-0">
                  {combo.code}
                </span>
                <span aria-hidden="true">·</span>
                <span>{combo.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-2">
          <Button asChild variant="outline" className="w-full justify-between">
            <Link to={`/academics#${stream.id}`}>
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
