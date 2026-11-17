import { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collegeInfo } from '@/src/data/collegeInfo';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';

export function WhatsAppButton() {
  const [infoOpen, setInfoOpen] = useState(false);
  const configuredNumber = collegeInfo.contact.whatsappNumber.replace(/\D/g, '');
  const hasConfiguredNumber = configuredNumber.length >= 10;

  const handleClick = () => {
    if (hasConfiguredNumber) {
      const text = encodeURIComponent(
        'Hello Sambhram PU College Admissions Office, I would like information about Pre-University admissions.'
      );
      window.location.href = `https://wa.me/${configuredNumber}?text=${text}`;
    } else {
      setInfoOpen(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label="WhatsApp Admissions Contact"
        className="fixed bottom-5 right-5 z-30 inline-flex h-12 items-center gap-2 rounded-full bg-[#363789] px-4 text-sm font-semibold text-white shadow-lg border border-white/25 transition-transform hover:scale-[1.03] hover:bg-[#EC3237] cursor-pointer"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp Desk</span>
      </button>

      <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>WhatsApp Admissions Desk</DialogTitle>
            <DialogDescription>
              Official WhatsApp integration is ready once the verified college phone number is
              configured in <code className="font-mono text-xs">collegeInfo.ts</code>.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4 text-sm text-[#202124]">
            <div className="rounded-lg border border-slate-200 bg-[#F5F6FA] p-4 space-y-2">
              <p className="font-semibold text-[#363789]">Direct Admissions Contact</p>
              <p className="flex items-center gap-2 text-[#68778A]">
                <Phone className="h-4 w-4 text-[#EC3237]" aria-hidden="true" />
                <span>{collegeInfo.contact.secondaryPhone}</span>
              </p>
              <p className="text-xs text-[#68778A]">
                Configured Number: {collegeInfo.contact.whatsappPlaceholderDisplay}
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setInfoOpen(false)}>
                Close
              </Button>
              <Button asChild onClick={() => setInfoOpen(false)}>
                <Link to="/contact?subject=Admission%20Enquiry">Open Enquiry Form</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
