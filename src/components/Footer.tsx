import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { collegeInfo } from '@/src/data/collegeInfo';
import { CollegeCrest } from './CollegeCrest';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#363789] text-slate-100 border-t-4 border-[#EC3237]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* College Identity with Original Logo on White Area */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus-visible:rounded-lg">
              <CollegeCrest size="md" framed />
            </Link>
            <div>
              <p className="font-heading text-lg font-bold text-white">{collegeInfo.name}</p>
              <p className="text-xs font-medium text-slate-200">
                Pre-University College · Karnataka
              </p>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
              {collegeInfo.tagline}. Guided by the Department of Pre-University Education (DPUE),
              Government of Karnataka curriculum framework.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              {collegeInfo.socialLinks.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  title={soc.placeholderNote}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-200 hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  <span>{soc.label}</span>
                  <ArrowUpRight className="h-3 w-3 text-[#EC3237]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading text-sm font-semibold text-white">About College</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  About Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/about/founders-message"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  Founder&apos;s Message
                </Link>
              </li>
              <li>
                <Link
                  to="/about/principal-message"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  Principal&apos;s Message
                </Link>
              </li>
              <li>
                <Link
                  to="/about/vision-mission"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/about/faculty"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  Faculty &amp; Staff
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics & Admissions */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading text-sm font-semibold text-white">
              Academics &amp; Admissions
            </h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                <Link
                  to="/academics/first-year-pu"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  First Year PU (I PUC)
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/second-year-pu"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  Second Year PU (II PUC)
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  Admission Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/admission/first-year-eligibility"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  I PUC Eligibility &amp; Norms
                </Link>
              </li>
              <li>
                <Link
                  to="/sambhrams-corner/guidelines"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  Sambhram&apos;s Corner Handbook
                </Link>
              </li>
              <li>
                <Link
                  to="/media"
                  className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
                >
                  Campus Media &amp; Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading text-sm font-semibold text-white">Campus Contact</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#EC3237] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {collegeInfo.contact.addressLine1}
                  <br />
                  {collegeInfo.contact.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#EC3237] shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{collegeInfo.contact.primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#EC3237] shrink-0" aria-hidden="true" />
                <span>{collegeInfo.contact.email}</span>
              </li>
            </ul>
            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center text-xs font-semibold text-white underline decoration-[#EC3237] decoration-2 underline-offset-4 hover:text-slate-100"
              >
                Visit Contact &amp; Enquiry Page →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            © {currentYear} {collegeInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/contact"
              className="hover:text-white hover:underline decoration-[#EC3237] decoration-2 underline-offset-4 transition-colors"
            >
              Admissions Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
