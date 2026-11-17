import { Breadcrumbs, type BreadcrumbNode } from './Breadcrumbs';
import { SmartImage } from './SmartImage';
import { MEDIA_ASSETS } from '@/src/assets/media';

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbNode[];
  image?: string;
  imageAlt?: string;
}

export function PageBanner({
  title,
  subtitle,
  breadcrumbs,
  image = MEDIA_ASSETS.heroCampusFacade,
  imageAlt = 'Sambhram PU College campus view',
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#363789] text-white">
      <div className="absolute inset-0">
        <SmartImage
          src={image}
          alt={imageAlt}
          loading="eager"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#262768]/85 via-[#363789]/65 to-[#363789]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <Breadcrumbs items={breadcrumbs} light />
        <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-200 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
