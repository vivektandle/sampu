import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { MEDIA_ASSETS } from '@/src/assets/media';
import { Button } from './ui/button';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroSlides = [
  {
    id: 'slide-2',
    eyebrow: 'Sambhram PU College · Karnataka',
    heading: 'Learn Today. Lead Tomorrow.',
    description:
      'Structured First Year and Second Year Pre-University instruction in Science and Commerce on a calm, disciplined campus designed for conceptual mastery.',
    image: MEDIA_ASSETS.campusImage,
    imageAlt: 'Sambhram PU College main campus building and courtyard',
    primaryCta: { label: 'Explore Courses', to: '/academics/first-year-pu' },
    secondaryCta: { label: 'Admission Enquiry', to: '/admission' },
  },
  {
    id: 'slide-3',
    eyebrow: 'Mentorship & Holistic Growth',
    heading: 'Empowering Students Through Knowledge and Excellence.',
    description:
      'Dedicated Physics, Chemistry, Biology, and Computer Science laboratories paired with attentive faculty mentoring, quiet library spaces, and co-curricular growth.',
    image: MEDIA_ASSETS.heroScienceLab,
    imageAlt: 'Pre-University students performing guided experiments in science laboratory',
    primaryCta: { label: 'Explore Courses', to: '/academics/second-year-pu' },
    secondaryCta: { label: 'Admission Enquiry', to: '/contact?subject=Admission%20Enquiry' },
  },
];

export function HeroSlider() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section
      aria-label="Featured campus highlights"
      className="relative w-full overflow-hidden bg-[#262768]"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={750}
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="sambhram-hero-swiper h-[520px] sm:h-[580px] lg:h-[640px] w-full"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.imageAlt}
              loading={idx === 0 ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Measured Scrim for >= 4.5:1 text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#202124]/88 via-[#363789]/70 to-[#202124]/30" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <p className="mb-3 inline-block border-l-4 border-[#EC3237] pl-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white">
                  {slide.eyebrow}
                </p>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-bold tracking-tight text-white leading-[1.15]">
                  {slide.heading}
                </h1>
                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl">
                  {slide.description}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <Button asChild variant="default" size="lg">
                    <Link to={slide.primaryCta.to}>
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="border border-white/30"
                  >
                    <Link to={slide.secondaryCta.to}>{slide.secondaryCta.label}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous & Next Navigation Controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 z-20 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#202124]/55 text-white transition-colors hover:bg-[#EC3237] hover:border-[#EC3237] cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 z-20 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#202124]/55 text-white transition-colors hover:bg-[#EC3237] hover:border-[#EC3237] cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  );
}
