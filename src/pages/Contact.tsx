import { useSearchParams } from 'react-router-dom';
import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { ContactForm } from '@/src/components/ContactForm';
import { Button } from '@/src/components/ui/button';
import { collegeInfo } from '@/src/data/collegeInfo';
import { MEDIA_ASSETS } from '@/src/assets/media';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get('subject');
  const defaultSubject: 'Admission Enquiry' | 'Fee Structure' | 'Others' =
    subjectParam === 'Fee Structure'
      ? 'Fee Structure'
      : subjectParam === 'Others'
        ? 'Others'
        : 'Admission Enquiry';

  return (
    <div>
      <SeoHead
        title="Contact Us | Sambhram PU College"
        description="Contact Sambhram PU College in Karnataka for Pre-University admissions, fee structure enquiries, campus address, working hours, and directions."
        path="/contact"
        breadcrumbs={[{ name: 'Contact Us', path: '/contact' }]}
      />

      <PageBanner
        title="Contact & Admissions Desk"
        subtitle="Reach our college office for Pre-University admissions, academic enquiries, and campus visits."
        breadcrumbs={[{ label: 'Contact Us' }]}
        image={MEDIA_ASSETS.campusImage}
      />

      {/* Compact Institutional Info Strip */}
      <section className="py-10 bg-[#F5F6FA] border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-start gap-3">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8EAF6] text-[#EC3237]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-heading text-xs font-semibold text-[#363789]">Campus Address</p>
                <p className="mt-1 text-xs text-[#68778A] leading-relaxed">
                  {collegeInfo.contact.addressLine1}
                  <br />
                  {collegeInfo.contact.addressLine2}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-start gap-3">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8EAF6] text-[#EC3237]">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-heading text-xs font-semibold text-[#363789]">Phone Numbers</p>
                <p className="mt-1 text-xs text-[#68778A] tabular-nums">
                  {collegeInfo.contact.primaryPhone}
                </p>
                <p className="text-xs text-[#68778A] tabular-nums">
                  {collegeInfo.contact.secondaryPhone}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-start gap-3">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8EAF6] text-[#EC3237]">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-heading text-xs font-semibold text-[#363789]">Official Email</p>
                <p className="mt-1 text-xs text-[#68778A] break-all">
                  {collegeInfo.contact.email}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-start gap-3">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8EAF6] text-[#EC3237]">
                <Clock className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-heading text-xs font-semibold text-[#363789]">Working Hours</p>
                <p className="mt-1 text-xs text-[#68778A] leading-relaxed">
                  {collegeInfo.contact.officeHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Balanced Side-by-Side Geolocation Map & Compact Enquiry Form */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            {/* Left: Compact Geolocation Embed */}
            <div className="lg:col-span-5 flex flex-col overflow-hidden rounded-xl border border-[#363789]/15 bg-[#E8EAF6] shadow-xs">
              <div className="flex items-center justify-between gap-2 border-b border-[#363789]/15 bg-white px-4 py-3">
                <div className="flex items-center gap-2 text-[#363789]">
                  <MapPin className="h-4 w-4 text-[#EC3237]" aria-hidden="true" />
                  <h2 className="font-heading text-sm font-semibold">
                    Sambhram PU College Location
                  </h2>
                </div>
                <Button asChild variant="outline" size="sm" className="h-7 px-2.5 text-xs">
                  <a
                    href={collegeInfo.contact.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Directions</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </Button>
              </div>

              <div className="flex-1 min-h-[250px] lg:min-h-[280px] bg-[#F5F6FA]">
                <iframe
                  title="Sambhram Pre-University College Location Map"
                  src={collegeInfo.contact.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-full w-full min-h-[250px] border-0"
                />
              </div>

              <div className="px-4 py-2.5 text-[11px] text-[#363789] font-medium">
                Sambhram Pre-University College · Bengaluru, Karnataka
              </div>
            </div>

            {/* Right: Compact Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm defaultSubject={defaultSubject} sourcePage="contact" compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
