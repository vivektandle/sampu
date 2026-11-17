import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/src/utils/cn';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
  fallbackLabel?: string;
}

export function SmartImage({
  src,
  alt,
  className,
  containerClassName,
  loading = 'lazy',
  fallbackLabel,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center bg-[#E8EAF6] text-[#363789] p-6 text-center',
          containerClassName,
          className
        )}
      >
        <ImageOff className="h-8 w-8 mb-2 opacity-60" aria-hidden="true" />
        <span className="text-xs font-medium text-[#68778A]">
          {fallbackLabel || alt || 'Sambhram PU College Media'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={cn('block', className)}
    />
  );
}
