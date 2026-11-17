import type { FacultyMember } from '@/src/data/aboutData';
import { SmartImage } from './SmartImage';

interface FacultyCardProps {
  member: FacultyMember;
}

export function FacultyCard({ member }: FacultyCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-md">
      <div className="aspect-[4/5] w-full overflow-hidden bg-[#F5F6FA]">
        <SmartImage
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold text-[#EC3237]">{member.department} Department</p>
        <h3 className="mt-1 font-heading text-lg font-semibold text-[#363789]">{member.name}</h3>
        <p className="text-sm font-medium text-[#202124]">{member.designation}</p>
        <dl className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-[#68778A]">
          <div>
            <dt className="inline font-semibold text-[#202124]">Qualification: </dt>
            <dd className="inline">{member.qualification}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-[#202124]">Specialization: </dt>
            <dd className="inline">{member.specialization}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
