import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { collegeInfo } from '@/src/data/collegeInfo';
import { Button } from './ui/button';

export function downloadDocumentFile(title: string, fileName: string, bodyLines: string[]) {
  const content = [
    '============================================================',
    `${collegeInfo.name.toUpperCase()}`,
    `${collegeInfo.affiliation}`,
    '============================================================',
    '',
    `DOCUMENT: ${title}`,
    `LOCATION: ${collegeInfo.contact.addressLine1}, ${collegeInfo.contact.addressLine2}`,
    `PHONE: ${collegeInfo.contact.primaryPhone}`,
    `EMAIL: ${collegeInfo.contact.email}`,
    '',
    ...bodyLines,
    '',
    '------------------------------------------------------------',
    'Note: Editable institutional summary document. Verify official',
    'DPUE Karnataka circulars and current academic year dates with',
    'the Sambhram PU College Admissions Office.',
    '------------------------------------------------------------',
  ].join('\n');

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  toast.success(`Downloaded ${title}`);
}

export function DownloadCenter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {collegeInfo.downloadCenter.map((doc) => (
        <div
          key={doc.id}
          className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#EC3237]">
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>{doc.category}</span>
            </div>
            <h3 className="mt-2 font-heading text-base font-semibold text-[#363789]">
              {doc.title}
            </h3>
            <p className="mt-1.5 text-sm text-[#68778A] leading-relaxed">{doc.description}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                downloadDocumentFile(doc.title, doc.fileName, [
                  `Category: ${doc.category}`,
                  `Summary: ${doc.description}`,
                ])
              }
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download Overview</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
