import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { CheckCircle2, Info, Loader2, Send } from 'lucide-react';
import { submitEnquiry, type EnquirySubmissionResult } from '@/src/services/api';
import { Button } from './ui/button';
import { Input, Label, Textarea } from './ui/form-controls';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { cn } from '@/src/utils/cn';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(80, 'Name must be under 80 characters.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:\+91[\-\s]?)?[6-9]\d{9}$/,
      'Please enter a valid 10-digit Indian mobile number (optionally prefixed with +91).'
    ),
  subject: z.enum(['Admission Enquiry', 'Fee Structure', 'Others'], {
    message: 'Please select an enquiry subject.',
  }),
  message: z
    .string()
    .trim()
    .min(10, 'Please share a brief message (at least 10 characters).')
    .max(1000, 'Message cannot exceed 1000 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultSubject?: 'Admission Enquiry' | 'Fee Structure' | 'Others';
  sourcePage?: string;
  compact?: boolean;
}

export function ContactForm({
  defaultSubject = 'Admission Enquiry',
  sourcePage = 'contact',
  compact = false,
}: ContactFormProps) {
  const [submissionResult, setSubmissionResult] = useState<EnquirySubmissionResult | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: defaultSubject,
      message: '',
    },
  });

  useEffect(() => {
    setValue('subject', defaultSubject);
  }, [defaultSubject, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    if (isSubmitting) return;
    setSubmitError(null);

    try {
      const result = await submitEnquiry({
        ...data,
        sourcePage,
      });
      setSubmissionResult(result);
      toast.success(
        result.mode === 'backend'
          ? 'Enquiry received by Admissions Office'
          : 'Enquiry validated (Local Preview Mode)'
      );
      reset({ name: '', email: '', phone: '', subject: defaultSubject, message: '' });
    } catch {
      const msg =
        'Unable to submit the enquiry right now. Please try again or call the Admissions Desk directly.';
      setSubmitError(msg);
      toast.error(msg);
    }
  };

  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-white shadow-xs',
        compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'
      )}
    >
      <h3
        className={cn(
          'font-heading font-semibold text-[#363789]',
          compact ? 'text-lg' : 'text-xl'
        )}
      >
        Send an Enquiry
      </h3>
      <p className={cn('text-[#68778A]', compact ? 'mt-1 text-xs' : 'mt-1.5 text-sm')}>
        Complete the form below for Pre-University admissions, fee details, or general college
        queries.
      </p>

      {submissionResult && (
        <div
          role="status"
          className={cn(
            'rounded-lg border border-[#363789]/25 bg-[#E8EAF6] text-[#202124]',
            compact ? 'mt-3.5 p-3 text-xs' : 'mt-5 p-4 text-sm'
          )}
        >
          <div className="flex items-start gap-2.5">
            {submissionResult.mode === 'backend' ? (
              <CheckCircle2 className="h-4 w-4 text-[#363789] shrink-0 mt-0.5" />
            ) : (
              <Info className="h-4 w-4 text-[#363789] shrink-0 mt-0.5" />
            )}
            <div className="space-y-0.5">
              <p className="font-semibold text-[#363789]">
                Reference ID: <span className="font-mono">{submissionResult.referenceId}</span>
              </p>
              <p className="text-[#202124] leading-relaxed">{submissionResult.message}</p>
            </div>
          </div>
        </div>
      )}

      {submitError && (
        <div
          role="alert"
          className={cn(
            'rounded-lg border border-[#EC3237]/30 bg-[#EC3237]/10 text-[#C9232B]',
            compact ? 'mt-3.5 p-3 text-xs' : 'mt-5 p-4 text-sm'
          )}
        >
          {submitError}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={cn(compact ? 'mt-4 space-y-3.5' : 'mt-6 space-y-5')}
      >
        <div className={cn('grid grid-cols-1', compact ? 'sm:grid-cols-2 gap-3.5' : 'gap-5')}>
          <div>
            <Label htmlFor="enquiry-name" className={compact ? 'text-xs' : undefined}>
              Full Name *
            </Label>
            <Input
              id="enquiry-name"
              type="text"
              placeholder="Student or Parent Name"
              aria-invalid={Boolean(errors.name)}
              className={compact ? 'h-9 text-xs' : undefined}
              {...register('name')}
            />
            {errors.name && <p className="mt-1 text-xs text-[#C9232B]">{errors.name.message}</p>}
          </div>

          {compact && (
            <div>
              <Label htmlFor="enquiry-subject" className="text-xs">
                Subject *
              </Label>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      id="enquiry-subject"
                      aria-invalid={Boolean(errors.subject)}
                      className="h-9 text-xs"
                    >
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admission Enquiry">Admission Enquiry</SelectItem>
                      <SelectItem value="Fee Structure">Fee Structure</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-[#C9232B]">{errors.subject.message}</p>
              )}
            </div>
          )}
        </div>

        <div className={cn('grid grid-cols-1 sm:grid-cols-2', compact ? 'gap-3.5' : 'gap-5')}>
          <div>
            <Label htmlFor="enquiry-email" className={compact ? 'text-xs' : undefined}>
              Email Address *
            </Label>
            <Input
              id="enquiry-email"
              type="email"
              placeholder="name@example.com"
              aria-invalid={Boolean(errors.email)}
              className={compact ? 'h-9 text-xs' : undefined}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-[#C9232B]">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="enquiry-phone" className={compact ? 'text-xs' : undefined}>
              Indian Mobile Number *
            </Label>
            <Input
              id="enquiry-phone"
              type="tel"
              placeholder="98XXXXXXXX"
              aria-invalid={Boolean(errors.phone)}
              className={compact ? 'h-9 text-xs' : undefined}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-[#C9232B]">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {!compact && (
          <div>
            <Label htmlFor="enquiry-subject">Subject *</Label>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="enquiry-subject" aria-invalid={Boolean(errors.subject)}>
                    <SelectValue placeholder="Select enquiry subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admission Enquiry">Admission Enquiry</SelectItem>
                    <SelectItem value="Fee Structure">Fee Structure</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.subject && (
              <p className="mt-1.5 text-xs text-[#C9232B]">{errors.subject.message}</p>
            )}
          </div>
        )}

        <div>
          <Label htmlFor="enquiry-message" className={compact ? 'text-xs' : undefined}>
            Message *
          </Label>
          <Textarea
            id="enquiry-message"
            placeholder="Share preferred stream (Science / Commerce), I PUC or II PUC, and your questions..."
            aria-invalid={Boolean(errors.message)}
            className={compact ? 'min-h-[82px] py-2 text-xs' : undefined}
            {...register('message')}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-[#C9232B]">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
          size={compact ? 'default' : 'lg'}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>Submit Enquiry</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
