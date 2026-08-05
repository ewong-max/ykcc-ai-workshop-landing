# YKCC AI Workshop for Accountants — Landing Page

Course introduction and interest-registration page for the 2-day hands-on AI workshop by
YKCC / YK Group. React 19 + TypeScript + Vite + Tailwind CSS 4.

The page does two things: introduce the course, and capture registrations straight into the
workshop Google Sheet.

## Run locally

Prerequisites: Node.js 18+.

```bash
npm install
```

```bash
npm run dev
```

Opens on http://localhost:3000. Other scripts: `npm run build`, `npm run preview`,
`npm run lint` (TypeScript check).

## Before this goes live

### 1. Connect the registration form to the sheet — required

Registrations POST to a Google Apps Script that appends them to the leads spreadsheet.
Follow [`google-apps-script/README.md`](google-apps-script/README.md) — it takes about two
minutes — then paste the deployment URL into `APPS_SCRIPT_ENDPOINT` in
[`src/lib/leadSubmission.ts`](src/lib/leadSubmission.ts).

Until that is set, the form shows an amber "not connected" notice and submissions fail
loudly rather than silently vanishing.

**Why not just hardcode the sheet?** A browser has no safe way to hold a Google credential —
anything shipped to the page is readable by every visitor. The Apps Script runs under your
account instead, and only accepts new rows; it cannot read the sheet back out.

### 2. Organizer contact details — recommended

`src/data/workshopData.ts` → `ORGANIZER_INFO`. The original AI Studio export shipped with
Canva sample data (`hello@reallygreatsite.com`, `123-456-7890`, `123 Anywhere St., Any City`),
which has been blanked rather than replaced with guesses. Fill in `email`, `phone`,
`website` and `address` and they appear automatically in the footer; blank entries are
skipped.

## Where registrations go

`Registrations` tab of
[the leads spreadsheet](https://docs.google.com/spreadsheets/d/1iMYKZmw5QPenxchB5IoLC8NmLSkzT9AdcskNoHg-pck/edit),
one row per submission: submitted at, lead ID, name, email, phone, company, job role,
status. The script creates the tab and its bold header row on first use.

Nothing is stored in the visitor's browser, and the site never reads the sheet back — the
spreadsheet is the single source of truth. There is a staff link to it under the
registration form.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Page shell, header/footer, skip link |
| `src/components/Header.tsx` | Sticky nav with anchors and mobile menu |
| `src/components/LandingPage.tsx` | All page sections and the registration form |
| `src/data/workshopData.ts` | Organizer info, highlights, FAQs, full 2-day agenda |
| `src/lib/leadSubmission.ts` | Sheet endpoint config and submission call |
| `src/types.ts` | Shared TypeScript interfaces |
| `google-apps-script/` | The script that writes to the sheet, plus setup steps |

## Page sections

Hero → featured exercises → benefits → full 2-day agenda → registration → who it's for →
FAQ. The agenda renders from `WORKSHOP_DAYS` in `workshopData.ts`, so editing the schedule
there updates the page.
