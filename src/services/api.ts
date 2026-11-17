// Backend-ready API service abstraction for future Node.js + Express + MySQL integration

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  subject: 'Admission Enquiry' | 'Fee Structure' | 'Others';
  message: string;
  sourcePage?: string;
}

export interface EnquirySubmissionResult {
  mode: 'backend' | 'local-preview';
  referenceId: string;
  submittedAt: string;
  message: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquirySubmissionResult> {
  const referenceId = `ENQ-${Date.now().toString(36).toUpperCase()}`;
  const submittedAt = new Date().toISOString();

  if (API_BASE_URL) {
    const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, referenceId, submittedAt }),
    });

    if (!response.ok) {
      throw new Error(`Submission failed with status ${response.status}`);
    }

    return {
      mode: 'backend',
      referenceId,
      submittedAt,
      message: 'Your enquiry has been recorded by the college admissions office.',
    };
  }

  // Simulate async validation/handoff when no live backend API endpoint is configured
  await new Promise((resolve) => setTimeout(resolve, 650));

  try {
    const existing = JSON.parse(localStorage.getItem('sambhram_pending_enquiries') || '[]');
    existing.push({ ...payload, referenceId, submittedAt });
    localStorage.setItem('sambhram_pending_enquiries', JSON.stringify(existing));
  } catch {
    // Ignore storage unavailability in restricted browser modes
  }

  return {
    mode: 'local-preview',
    referenceId,
    submittedAt,
    message:
      'Form validated and prepared for submission. Please note: no live email/backend server is connected in this preview, so please reach the Admissions Office directly by phone or WhatsApp for immediate assistance.',
  };
}
