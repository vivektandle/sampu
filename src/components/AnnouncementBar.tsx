import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { announcementsList } from '@/src/data/announcements';

export function AnnouncementBar() {
  const lead = announcementsList[0];

  return (
    <div className="bg-[#363789] text-white border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 py-2 text-xs">
        <div className="flex items-center justify-center gap-2.5 min-w-0 text-center">
          <span className="inline-flex items-center gap-1.5 rounded bg-[#EC3237] px-2 py-0.5 text-[11px] font-semibold text-white shrink-0">
            <Bell className="h-3 w-3" aria-hidden="true" />
            <span>Notice</span>
          </span>
          <Link
            to={lead.linkTo}
            className="truncate font-semibold animate-announcement-title hover:underline underline-offset-4 transition-opacity"
          >
            {lead.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
