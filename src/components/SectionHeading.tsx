import { cn } from '@/src/utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-[#EC3237]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#363789] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[#68778A] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
