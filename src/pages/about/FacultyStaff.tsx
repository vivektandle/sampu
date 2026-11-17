import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import { FacultyCard } from '@/src/components/FacultyCard';
import { facultyDirectory } from '@/src/data/aboutData';

export default function FacultyStaff() {
  return (
    <div>
      <SeoHead
        title="Faculty & Staff | Sambhram PU College"
        description="Department-wise Pre-University faculty directory for Science, Commerce, Computer Science, and Languages at Sambhram PU College."
        path="/about/faculty"
        breadcrumbs={[
          { name: 'About Us', path: '/about' },
          { name: 'Faculty & Staff', path: '/about/faculty' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Breadcrumbs
              items={[{ label: 'About Us', to: '/about' }, { label: 'Faculty & Staff' }]}
            />
            <SectionHeading
              eyebrow="Academic Departments"
              title="Faculty & Staff Directory"
              description="Dedicated Pre-University educators committed to conceptual clarity and student mentoring."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyDirectory.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
