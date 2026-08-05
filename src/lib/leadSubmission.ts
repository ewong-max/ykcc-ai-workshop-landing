import { InterestRegistration } from '../types';

/**
 * Where registrations land. A browser cannot write to a private Google Sheet directly —
 * there is no credential a public page can safely hold — so submissions are POSTed to a
 * Google Apps Script bound to this sheet, which appends the row on your behalf.
 *
 * Setup instructions and the script itself: google-apps-script/Code.gs
 */
export const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1iMYKZmw5QPenxchB5IoLC8NmLSkzT9AdcskNoHg-pck/edit?usp=sharing';

/** Paste the /exec URL from your Apps Script deployment here. */
export const APPS_SCRIPT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyeFnBiKZCH0trEKQcB31CgTZ0i-Xv4T0_PkNvJNKj_j7mNBu3wIcdxt_lJdLRoROkd/exec';

export const isSubmissionConfigured = APPS_SCRIPT_ENDPOINT.length > 0;

export interface LeadInput {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  jobRole: string;
}

export const buildLead = (input: LeadInput): InterestRegistration => ({
  id: 'lead-' + Date.now(),
  fullName: input.fullName.trim(),
  email: input.email.trim(),
  phone: input.phone.trim(),
  companyName: input.companyName.trim() || 'N/A',
  jobRole: input.jobRole,
  submittedAt: new Date().toLocaleString(),
  status: 'New'
});

/**
 * Appends the registration to the Google Sheet.
 * Sent as text/plain so the browser skips the CORS preflight, which Apps Script
 * web apps do not answer.
 */
export const submitLeadToSheet = async (lead: InterestRegistration): Promise<void> => {
  if (!isSubmissionConfigured) {
    throw new Error(
      'Registration endpoint is not set up yet. Add your Apps Script /exec URL to APPS_SCRIPT_ENDPOINT in src/lib/leadSubmission.ts.'
    );
  }

  const response = await fetch(APPS_SCRIPT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(lead)
  });

  if (!response.ok) {
    throw new Error(`The registration service returned ${response.status}.`);
  }

  const result = await response.json().catch(() => null);
  if (result && result.ok === false) {
    throw new Error(result.error || 'The registration could not be saved.');
  }
};
