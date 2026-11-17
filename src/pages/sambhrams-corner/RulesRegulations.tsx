import { PageBanner } from '@/src/components/PageBanner';
import { SeoHead } from '@/src/components/SeoHead';
import { SectionHeading } from '@/src/components/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { rulesRegulationsCategories } from '@/src/data/sambhramsCornerData';

export default function RulesRegulations() {
  return (
    <div>
      <SeoHead
        title="Rules & Regulations | Sambhram's Corner"
        description="Campus discipline, classroom conduct, uniform policy, mobile device guidelines, and examination rules at Sambhram PU College."
        path="/sambhrams-corner/rules-regulations"
        breadcrumbs={[
          { name: "Sambhram's Corner", path: '/sambhrams-corner/guidelines' },
          { name: 'Rules & Regulations', path: '/sambhrams-corner/rules-regulations' },
        ]}
      />

      <PageBanner
        title="Rules & Regulations"
        subtitle="Institutional code of conduct supporting safety, respect, and focused Pre-University study."
        breadcrumbs={[
          { label: "Sambhram's Corner", to: '/sambhrams-corner/guidelines' },
          { label: 'Rules & Regulations' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus Code of Conduct"
            title="Student Rules & Responsibilities"
            description="Expand any category below to review institutional norms. Items marked editable may be tailored to official college circulars."
            className="mb-8"
          />

          <div className="rounded-xl border border-slate-200 bg-[#F5F6FA]">
            <Accordion type="multiple" defaultValue={['general-discipline', 'classroom-conduct']}>
              {rulesRegulationsCategories.map((cat) => (
                <AccordionItem key={cat.id} value={cat.id}>
                  <AccordionTrigger className="font-heading text-base font-semibold text-[#363789]">
                    {cat.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2.5 text-sm text-[#68778A]">
                      {cat.rules.map((rule) => (
                        <li key={rule} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#EC3237] shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
