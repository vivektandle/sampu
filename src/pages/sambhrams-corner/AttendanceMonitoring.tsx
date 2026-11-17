import { ClipboardCheck, Info } from 'lucide-react';
import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { attendanceData } from '@/src/data/sambhramsCornerData';

export default function AttendanceMonitoring() {
  return (
    <div>
      <SeoHead
        title="Attendance Monitoring | Sambhram's Corner"
        description="Attendance policy, DPUE Karnataka regulatory notes, monitoring workflow, parent communication, and leave application process at Sambhram PU College."
        path="/sambhrams-corner/attendance"
        breadcrumbs={[
          { name: "Sambhram's Corner", path: '/sambhrams-corner/guidelines' },
          { name: 'Attendance Monitoring', path: '/sambhrams-corner/attendance' },
        ]}
      />

      <PageBanner
        title="Attendance Monitoring"
        subtitle="Tracking regular attendance, parent communication, and leave procedures."
        breadcrumbs={[
          { label: "Sambhram's Corner", to: '/sambhrams-corner/guidelines' },
          { label: 'Attendance Monitoring' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <SectionHeading
              eyebrow="Attendance Policy"
              title="Commitment to Regular Classroom & Lab Participation"
              description={attendanceData.policyIntro}
            />
            <div className="rounded-xl border border-[#EC3237]/30 bg-[#E8EAF6] p-5 flex items-start gap-3">
              <Info className="h-5 w-5 text-[#363789] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-[#202124] leading-relaxed">
                {attendanceData.minimumRequirementNote}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[#363789] mb-6">
              Attendance Monitoring &amp; Parent Communication
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {attendanceData.monitoringProcess.map((step, idx) => (
                <div key={step.title} className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-6">
                  <p className="font-mono text-xs font-semibold text-[#EC3237]">0{idx + 1}</p>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-[#363789]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#68778A] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#F5F6FA] p-7">
            <div className="flex items-center gap-2.5 text-[#363789]">
              <ClipboardCheck className="h-5 w-5 text-[#EC3237]" aria-hidden="true" />
              <h2 className="font-heading text-xl font-semibold">Leave Application Procedure</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-[#68778A] leading-relaxed">
              {attendanceData.leaveProcedure.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#363789] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
