import { MEDIA_ASSETS } from '@/src/assets/media';
import { cn } from '@/src/utils/cn';

interface CollegeCrestProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  framed?: boolean;
}

export function CollegeCrest({ className, size = 'md', framed = false }: CollegeCrestProps) {
  const heightClass = size === 'sm' ? 'h-9 sm:h-10' : size === 'lg' ? 'h-16 sm:h-20' : 'h-11 sm:h-12';

  const img = (
    <img
      src={MEDIA_ASSETS.collegeLogo}
      alt="Sambhram Institutions — Sambhram PU College Official Logo"
      className={cn(heightClass, 'w-auto object-contain shrink-0 select-none', className)}
    />
  );

  if (framed) {
    return (
      <span className="inline-flex items-center rounded-lg bg-white px-3.5 py-2 shadow-xs">
        {img}
      </span>
    );
  }

  return img;
}
