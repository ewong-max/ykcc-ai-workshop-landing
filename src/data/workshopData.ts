import { DaySchedule, ChapterMapping, TestDataCase, CourseHighlight, FaqItem } from '../types';

export const CHAPTER_MAPPINGS: ChapterMapping[] = [
  {
    chapterNum: 1,
    chapterTitle: "The Big Picture: What You Are About to Learn",
    originalDay: 1,
    newDay: 1,
    timeSlotNew: "Day 1 09:00 - 09:15",
    statusNotes: "Introduction & Context Ladder overview."
  },
  {
    chapterNum: 2,
    chapterTitle: "Setting Everything Up (Do This First)",
    originalDay: 1,
    newDay: 1,
    timeSlotNew: "Day 1 09:15 - 09:45",
    statusNotes: "Module 0 setup: Claude Desktop, workshop folder & Day 2 accounts (GitHub, Vercel, Supabase)."
  },
  {
    chapterNum: 3,
    chapterTitle: "Day 1 Morning: Chat, the Three Essential Drills",
    originalDay: 1,
    newDay: 1,
    timeSlotNew: "Day 1 09:45 - 11:00",
    statusNotes: "Drills 1A (PDF to Excel), 1B (Cash flow memo), 1C (SME tax calculation RM78,600 anchor)."
  },
  {
    chapterNum: 4,
    chapterTitle: "Day 1 Afternoon: Cowork, from Files to Folders",
    originalDay: 1,
    newDay: 1,
    timeSlotNew: "Day 1 11:15 - 15:15",
    statusNotes: "Ex 2A (Inventory), 2B (Batch 12 statements & missing Sept alert), 2C (Payroll unpivot), 2D (Advisory & e-Invoice check), 2E (5-Step YoY projection)."
  },
  {
    chapterNum: 9,
    chapterTitle: "Connectors — Claude Reaches Your Tools",
    originalDay: 3,
    newDay: 1,
    timeSlotNew: "Day 1 15:30 - 16:25",
    statusNotes: "MOVED TO DAY 1 AFTERNOON: Connect Google Drive, Gmail, Calendar; run live data sweep; DRAFT-STOP pattern."
  },
  {
    chapterNum: 10,
    chapterTitle: "Skills — Package a Procedure Once, Reuse Forever",
    originalDay: 3,
    newDay: 1,
    timeSlotNew: "Day 1 16:25 - 17:05",
    statusNotes: "MOVED TO DAY 1 LATE AFTERNOON: Build firm-advisory-letter Skill with skill-creator and audit test."
  },
  {
    chapterNum: 5,
    chapterTitle: "Memory & Projects — Teach Claude Your Firm",
    originalDay: 1,
    newDay: 1,
    timeSlotNew: "Day 1 17:05 - 17:30",
    statusNotes: "SYNTHESIS CLOSE: Set Memory house style, build Dummy Trading Project & create Prompt Library."
  },
  {
    chapterNum: 6,
    chapterTitle: "What 'Coding Without Coding' Means",
    originalDay: 2,
    newDay: 2,
    timeSlotNew: "Day 2 09:00 - 09:30",
    statusNotes: "Vibe coding concepts & accounting metaphors for dev tools."
  },
  {
    chapterNum: 7,
    chapterTitle: "Build: a Website, then the SME Tax Estimator",
    originalDay: 2,
    newDay: 2,
    timeSlotNew: "Day 2 09:30 - 12:45",
    statusNotes: "Ex 3A (One-page website + tax calendar) & Ex 3B (SME Tax Estimator app with 5 test cases)."
  },
  {
    chapterNum: 8,
    chapterTitle: "Ship It: GitHub, Vercel, Supabase",
    originalDay: 2,
    newDay: 2,
    timeSlotNew: "Day 2 13:45 - 17:00",
    statusNotes: "Ex 3C (GitHub private repo & commit diffs), 3D (Vercel deployment & QR test), 3E (Supabase database + RLS SQL)."
  },
  {
    chapterNum: 11,
    chapterTitle: "Automation — a Job That Runs Without You (n8n)",
    originalDay: 3,
    newDay: null,
    timeSlotNew: "EXCLUDED / NOT COVERED",
    statusNotes: "Omitted per instructions to allow manageable pace for 2-day schedule."
  },
  {
    chapterNum: 12,
    chapterTitle: "After the Workshop: Making It Stick",
    originalDay: 3,
    newDay: 2,
    timeSlotNew: "Day 2 17:00 - 17:30",
    statusNotes: "30-60-90 Day adoption roadmap, safety rules, and universal repair loop."
  }
];

export const WORKSHOP_DAYS: DaySchedule[] = [
  {
    dayNumber: 1,
    theme: "The AI Accounting Assistant — Chat, Cowork, Connectors & Skills",
    subTitle: "Mastering Data Extraction, File Workflows, Live Tool Integration & Procedure Standardization",
    description: "Day 1 covers working with Claude for everyday accounting tasks. We combine Chat drills, Cowork folder batching, Google Connectors (from Day 3), and custom Skills (from Day 3) to build a unified context management pipeline.",
    modules: [
      {
        id: "d1-m1",
        day: 1,
        startTime: "09:00",
        endTime: "09:45",
        title: "Module 0: Orientation & Environment Setup",
        chapterSource: "Chapters 1 & 2",
        objective: "Establish the Big Picture, understand the Context Ladder, configure Claude Desktop, workshop folder structure, and create Day 2 cloud accounts.",
        pacingTip: "Pre-check account creation before starting. Ensure participants create GitHub, Vercel, and Supabase early to avoid Day 2 auth delays.",
        exercises: [
          {
            id: "ex-setup",
            chapter: 2,
            code: "Setup 2.1 - 2.4",
            title: "Workshop Folder & Cloud Account Provisioning",
            durationMinutes: 30,
            description: "Create AI-Workshop directory structure (Client-Files, Outputs, Website). Register free tier accounts on GitHub, Vercel, and Supabase.",
            verificationSteps: [
              "Confirm Desktop/AI-Workshop contains Client-Files, Outputs, and Website folders",
              "Verify Dummy Trading sample pack is copied into Client-Files",
              "Confirm 11 bank statement PDFs exist (January to December with missing September)",
              "Test login to GitHub, Vercel (via GitHub OAuth), and Supabase"
            ],
            beCareful: "Never enter credit card details on GitHub, Vercel, or Supabase. All exercises use free tiers. Follow strict dummy data rules."
          }
        ]
      },
      {
        id: "d1-m2",
        day: 1,
        startTime: "09:45",
        endTime: "10:45",
        title: "Module 1: Chat — The Three Essential Drills",
        chapterSource: "Chapter 3",
        objective: "Master single-file chat operations: PDF bank statement extraction to Excel, cash flow memo drafting, and Malaysian SME tax computation.",
        pacingTip: "Emphasize verification checks immediately after Drill 1A. Do not let participants skip the 3-step audit check.",
        exercises: [
          {
            id: "drill-1a",
            chapter: 3,
            code: "Drill 1A",
            title: "PDF Bank Statement to Excel",
            durationMinutes: 20,
            description: "Extract every transaction line from January PDF bank statement into a structured Excel spreadsheet.",
            promptText: "You are a data-entry assistant for an accounting firm. Extract EVERY transaction line from this bank statement PDF into a table with columns: Date, Description, Debit, Credit, Balance. Do not skip any line, do not summarise, do not merge similar transactions. Keep dates in DD/MM/YYYY format. After the table, state the total number of transactions extracted and the closing balance so I can verify against the statement. Provide the result as a downloadable Excel file.",
            promptExplanation: "Gives data-entry role to enforce verbatim copying; explicitly forbids summarization; demands summary transaction counts for verification.",
            verificationSteps: [
              "Transaction count matches printed statement count",
              "Closing balance agrees to the sen",
              "Spot-check 5 random lines against PDF word-for-word"
            ]
          },
          {
            id: "drill-1b",
            chapter: 3,
            code: "Drill 1B",
            title: "Cash Flow Analysis Memo",
            durationMinutes: 15,
            description: "Analyse monthly inflows/outflows, 5 largest recurring payments, and flag unusual transactions for partner review.",
            promptText: "Using the extracted transactions, analyse this company's cash flow: (1) total inflows and outflows by month, (2) the five largest recurring payments and who they are paid to, (3) any unusual or one-off transactions worth querying with the client, (4) average daily balance and any months where the account nearly went overdrawn. Present as a short memo I can forward to the engagement partner.",
            promptExplanation: "Leverages chat context from Drill 1A to perform financial analysis and draft partner memo without re-uploading.",
            verificationSteps: [
              "Review flagged 'unusual transactions' with professional judgement (e.g. rent vs anomaly)"
            ]
          },
          {
            id: "drill-1c",
            chapter: 3,
            code: "Drill 1C",
            title: "SME Tax Computation (Anchor Case)",
            durationMinutes: 25,
            description: "Compute YA 2026 income tax for resident Sdn Bhd (RM500k capital, RM8m gross income, RM480k chargeable income) using tiered SME rates.",
            promptText: "You are a Malaysian tax senior. Compute the income tax payable for a resident Sdn Bhd for the current Year of Assessment. Facts: paid-up ordinary share capital RM 500,000; gross business income RM 8,000,000; chargeable income RM 480,000; foreign shareholding below 20%. Apply the SME preferential rates (15% on the first RM 150,000, 17% on RM 150,001 to RM 600,000, 24% above RM 600,000) after confirming SME eligibility against all three conditions. Show the computation in a clear table, state the effective tax rate, and estimate the monthly CP204 instalment if next year's estimate equals this year's tax payable. End with one sentence listing which facts I should re-verify before sending this to the client.",
            promptExplanation: "Anchors the RM78,600 computation figure used across app tests and workshop verification.",
            verificationSteps: [
              "Recompute by hand: 150k @ 15% = RM22,500; 330k @ 17% = RM56,100; Total RM78,600",
              "Verify effective tax rate ≈ 16.38%",
              "Confirm monthly CP204 estimate ≈ RM6,550"
            ],
            beCareful: "Always verify tax rates against current LHDN Budget guidelines before client issuance."
          }
        ]
      },
      {
        id: "d1-break1",
        day: 1,
        startTime: "10:45",
        endTime: "11:00",
        title: "Morning Refreshment Break",
        chapterSource: "N/A",
        objective: "Informal networking and setup troubleshooting buffer.",
        exercises: [],
        isBreak: true,
        breakType: "tea"
      },
      {
        id: "d1-m3",
        day: 1,
        startTime: "11:00",
        endTime: "12:45",
        title: "Module 2: Cowork — Multi-File Folder Workflows",
        chapterSource: "Chapter 4 (Part 1)",
        objective: "Supervise Claude Desktop working on entire directories: file inventory, batch 12-statement extraction, and reshaping raw payroll reports into Form E (CP8D) ready data.",
        pacingTip: "Focus on the 'Propose before acting' mandate. Ensure participants see how Cowork detects missing files (September statement).",
        exercises: [
          {
            id: "ex-2a",
            chapter: 4,
            code: "Ex 2A",
            title: "Folder Inventory & Plan Proposal",
            durationMinutes: 20,
            description: "Inspect messy client folder, identify document completeness, propose clean structure and file rename convention before execution.",
            promptText: "List every file in the Client-Files folder. For each file tell me: what it is, which financial year it relates to, and whether it is complete or looks partial. Then propose a clean folder structure (by year, then by document type) and rename the files to a consistent convention: YYYY_ClientName_DocumentType. Show me the rename plan first — do not rename anything until I approve.",
            promptExplanation: "Teaches the fundamental supervisor habit: demanding a proposed plan before altering disk files.",
            verificationSteps: [
              "Verify plan is presented before file modifications occur",
              "Confirm proposed naming convention follows YYYY_ClientName_DocumentType"
            ]
          },
          {
            id: "ex-2b",
            chapter: 4,
            code: "Ex 2B",
            title: "Batch 12 Bank Statements to Workbook",
            durationMinutes: 45,
            description: "Batch extract 12 monthly PDFs into a consolidated workbook with monthly sheets, summary dashboard, and balance continuity checks.",
            promptText: "Extract every transaction line from all 12 bank statement PDFs in this folder into a single Excel workbook. One sheet per month named JAN to DEC, plus a SUMMARY sheet showing per month: opening balance, total debits, total credits, closing balance, and transaction count. Cross-check that each month's closing balance equals the next month's opening balance and flag any month that fails this check in red on the summary sheet. Save the output as DummyTrading_Bank_FY2025_v1.xlsx in the Outputs folder.",
            promptExplanation: "Automates multi-file extraction and forces automated cross-month continuity auditing.",
            verificationSteps: [
              "Confirm missing September statement is flagged",
              "Verify October opening balance mismatch is highlighted in red (RM197,231.14 vs RM259,389.90)",
              "Confirm output saved as versioned file v1"
            ]
          },
          {
            id: "ex-2c",
            chapter: 4,
            code: "Ex 2C",
            title: "Payroll Excel into Form E (CP8D) Format",
            durationMinutes: 40,
            description: "Reshape a raw payroll listing, where each employee's pay components run across the months, into a clean one-row-per-employee-per-month table — the structured base the CP8D annual figures are built from.",
            promptText: "Convert the file Client-Files/03_Payroll/DummyTrading_Payroll_Listing_2025.csv from its current nested horizontal format into a flat tabular report. Source structure: a header row of months (JAN to DEC); each employee starts with a row “Name: [Full Name]” then “I/C: [Number]”; component rows below (Salary Basic, Allowance, Overtime, EPF, Socso, PCB, etc.) with values spread across the month columns. Transformation: unpivot the 12 month columns into a single Month column; generate exactly 12 rows per employee repeating Name and I/C; turn pay components into columns in this exact order: Name, I/C, Month, Salary Basic, Allowance Transport, Allowance Proforma, Commission, Overtime, Angpau/Bonus, Income tax beared by employer, Deduction (Late), Others, Exempted allowance (petrol), EPF (employee), Socso (employee), EIS (employee), PCB, CP38, Zakat, EPF (employer), Socso (employer), EIS (employer). Formatting: clean I/C numbers to digits only, round all values to 2 decimal places, fill blanks with 0.00. Output as a downloadable CSV saved to the Outputs folder.",
            promptExplanation: "Performs complex wide-to-long matrix transformation preserving 22 strict column definitions.",
            verificationSteps: [
              "Row count check: Exactly 48 rows (4 employees × 12 months)",
              "Zero-fill check: Mid-year joiner (Lim Wei Ling) has Jan-Mar rows filled with 0.00",
              "Tie EPF (employee) total for one employee against raw source"
            ]
          }
        ]
      },
      {
        id: "d1-lunch",
        day: 1,
        startTime: "12:45",
        endTime: "13:45",
        title: "Networking Lunch",
        chapterSource: "N/A",
        objective: "Rest and informal participant discussions.",
        exercises: [],
        isBreak: true,
        breakType: "lunch"
      },
      {
        id: "d1-m4",
        day: 1,
        startTime: "13:45",
        endTime: "15:15",
        title: "Module 3: Advanced Cowork — Compliance Checks & 5-Step Delegation",
        chapterSource: "Chapter 4 (Part 2)",
        objective: "Execute e-Invoice readiness review, draft bilingual client advisory letters, and run full 5-step financial projection in single prompt.",
        pacingTip: "Emphasize version control naming (v1, v2) and mandatory disclaimer checks.",
        exercises: [
          {
            id: "ex-2d",
            chapter: 4,
            code: "Ex 2D",
            title: "Bilingual Tax Letter & e-Invoice Audit",
            durationMinutes: 40,
            description: "Draft English/BM tax payment advisory letters and conduct MyInvois gap audit on sample client invoices.",
            promptText: "Draft an advisory letter to a client explaining their income tax obligations for the current Year of Assessment. Include: the tax amount payable of RM78,600, the payment deadline, how to pay via e-Bayaran, and a brief note on late-payment consequences. Simple English, client is a business owner with no accounting background. Then produce a Bahasa Malaysia version of the same letter.",
            promptExplanation: "Generates clear bilingual client communication and audits invoice mandatory field readiness (TIN, SST, classification).",
            verificationSteps: [
              "Verify RM78,600 tax figure is correctly referenced",
              "Confirm deliberate missing fields in sample invoices are detected (buyer TIN, supplier SST, classification codes)"
            ]
          },
          {
            id: "ex-2e",
            chapter: 4,
            code: "Ex 2E",
            title: "5-Step YoY Projection & Tax Estimation",
            durationMinutes: 50,
            description: "Execute comparative P&L/BS, variance analysis, 2026 revenue projection, tax estimation, and workbook output in 1 delegated job.",
            promptText: "Using the trial balances for FY2024 and FY2025 in Client-Files/02_Trial_Balances: (1) build a comparative P&L and balance sheet with variance columns (RM and %); (2) write a commentary flagging every line moving more than 15% or RM 50,000; (3) project FY2026 using FY2025 as base with 8% revenue growth and costs at their 2-year average ratio to revenue; (4) estimate the FY2026 tax charge using SME rates and the projected profit; (5) produce one Excel workbook with sheets: Comparative, Commentary, Projection, Tax — saved as DummyTrading_YoY_Projection_v1.xlsx in the Outputs folder. Show me your plan before you start.",
            promptExplanation: "Capate exercise demonstrating full end-to-end delegation while reserving analytical review for the human accountant.",
            verificationSteps: [
              "Recompute 2 variance lines by hand",
              "Verify planted balance sheet movements flagged (>15% / >RM50k in Repairs, Marketing, Bad debts)",
              "Confirm projection assumptions are clearly stated on projection sheet"
            ]
          }
        ]
      },
      {
        id: "d1-break2",
        day: 1,
        startTime: "15:15",
        endTime: "15:30",
        title: "Afternoon Refreshment Break",
        chapterSource: "N/A",
        objective: "Quick break before transitioning into Connectors & Skills.",
        exercises: [],
        isBreak: true,
        breakType: "tea"
      },
      {
        id: "d1-m5",
        day: 1,
        startTime: "15:30",
        endTime: "16:25",
        title: "Module 4: Connectors — Reaching Live Tools (Moved from Day 3)",
        chapterSource: "Chapter 9",
        objective: "Connect Claude to Google Drive, Gmail, and Calendar. Perform live document sweeps and enforce the mandatory DRAFT-STOP pattern.",
        pacingTip: "CRITICAL: Use training Google accounts only. Reinforce that external actions (send/delete/pay) ALWAYS require explicit human confirmation.",
        exercises: [
          {
            id: "ex-4a-4b",
            chapter: 9,
            code: "Ex 4A & 4B",
            title: "Google Connectors & Monday Morning Sweep",
            durationMinutes: 30,
            description: "Authorize training Google account connectors, query latest trial balance from Drive, and scan Gmail for overdue client deliverables.",
            promptText: "Search my connected Google Drive for the latest trial balance for Dummy Trading and summarise the three biggest movements versus the prior year. Then search my connected Gmail for any email from this client in the last month that mentions a deadline or a document they still owe us, and list what is outstanding. Do not reply to anyone — just show me the summary.",
            promptExplanation: "Demonstrates safe read-only live data integration across cloud services.",
            verificationSteps: [
              "Verify connector permissions in Claude settings",
              "Cross-check identified missing documents (September bank statement, fixed assets, inventory count) against actual training inbox"
            ],
            beCareful: "Never connect personal or real client mailboxes during workshop. Disconnect training account at end of day."
          },
          {
            id: "ex-4c",
            chapter: 9,
            code: "Ex 4C",
            title: "The DRAFT-STOP Safeguard",
            durationMinutes: 25,
            description: "Draft follow-up email and propose calendar meeting slots using live context, stopping before sending or creating events.",
            promptText: "Draft a polite reminder email to Dummy Trading listing the outstanding documents you found, with a suggested deadline of [date]. Show me the draft. Do not send it — I will review and send it myself.\n\nCheck my connected Calendar for the week of [date] and propose three one-hour slots I could offer this client for a review meeting. List the slots; do not create any event yet.",
            promptExplanation: "Enforces mandatory human boundary: Claude drafts and proposes; human reviews and executes.",
            verificationSteps: [
              "Confirm Claude produces text draft and stops",
              "Manually review and verify proposed meeting slots against calendar"
            ]
          }
        ]
      },
      {
        id: "d1-m6",
        day: 1,
        startTime: "16:25",
        endTime: "17:05",
        title: "Module 5: Skills — Packaging Firm Procedures (Moved from Day 3)",
        chapterSource: "Chapter 10",
        objective: "Package firm advisory letter rules into an auto-triggering custom Skill and audit output against 5 house rules.",
        pacingTip: "Show participants how Skills differ from Projects and Memory. Skills standardize procedures across all chats.",
        exercises: [
          {
            id: "ex-5a-5b",
            chapter: 10,
            code: "Ex 5A & 5B",
            title: "Build & Audit Advisory Letter Skill",
            durationMinutes: 40,
            description: "Use skill-creator to assemble 'firm-advisory-letter' Skill, attach template resource, and test unprompted auto-triggering.",
            promptText: "Use the skill-creator to help me build a Skill called “firm-advisory-letter”. Its job: whenever I ask you to draft a client advisory or reminder letter, produce it in my firm's house style. The house rules are: (1) structure — greeting, purpose, the key figures in a short table, what the client must do, deadline, how to pay, a closing line offering to help; (2) plain English a business owner understands, no jargon; (3) always state which Year of Assessment any tax figure relates to; (4) currency as RM with no space; (5) always offer to provide a Bahasa Malaysia version at the end. Ask me for anything you need, then create the Skill.",
            promptExplanation: "Teaches procedural packaging so every staff member produces identical firm-standard letters without manual briefing.",
            verificationSteps: [
              "Test in fresh chat without mentioning Skill name",
              "Score against 5 house rules: Structure, Plain English, YA stated, RM format, BM offer",
              "Perform maintenance edit-retest loop"
            ]
          }
        ]
      },
      {
        id: "d1-m7",
        day: 1,
        startTime: "17:05",
        endTime: "17:30",
        title: "Module 6: Context Synthesis — Memory, Projects & Day 1 Wrap",
        chapterSource: "Chapter 5",
        objective: "Configure personal Memory house style, build Dummy Trading client Project, and initialize personal Prompt Library.",
        pacingTip: "Synthesize the 4 context rungs (Memory, Projects, Skills, Connectors) so participants leave with full clarity.",
        exercises: [
          {
            id: "ex-m1-m2",
            chapter: 5,
            code: "Ex M1 & M2",
            title: "Memory, Projects & Prompt Library Setup",
            durationMinutes: 25,
            description: "Save personal standing preferences in Memory, create Dummy Trading Sdn Bhd client Project with standing facts, and log top prompts.",
            promptText: "Please remember the following as my standing preferences for all my work: I am an accountant in Malaysia. Use British spelling. Format currency as RM with no space (RM1,250.00). Use DD/MM/YYYY for dates. When you draft anything client-facing, use simple English a business owner can understand, and never state a tax figure without noting which Year of Assessment it applies to. Confirm what you've saved.",
            promptExplanation: "Establishes permanent personal preferences and client-specific knowledge bases.",
            verificationSteps: [
              "Verify saved entries in Settings -> Memory",
              "Test fresh chat inside Dummy Trading Project without briefing",
              "Confirm Prompt Library project contains top 5 prompts"
            ]
          }
        ]
      }
    ]
  },
  {
    dayNumber: 2,
    theme: "Build & Ship — Vibe Coding, Next.js Apps, GitHub & Supabase",
    subTitle: "Creating Web Apps, Version Control Auditing, Cloud Publishing & Database Lead Capture",
    description: "Day 2 is dedicated to building and deploying real software. By moving Connectors and Skills to Day 1, Day 2 provides an uninterrupted, manageable pace for specification writing, website creation, Next.js web app development, GitHub version control, Vercel deployment, and Supabase RLS database integration.",
    modules: [
      {
        id: "d2-m1",
        day: 2,
        startTime: "09:00",
        endTime: "09:45",
        title: "Module 7: Vibe Coding & Software Specification",
        chapterSource: "Chapter 6",
        objective: "Understand 'Coding without coding', master natural language specifications, and map accounting concepts to software engineering tools.",
        pacingTip: "Reassure participants that syntax knowledge is unnecessary. Frame specification writing as identical to accounting audit work programs.",
        exercises: [
          {
            id: "ex-concept-map",
            chapter: 6,
            code: "Concept Map",
            title: "Accounting Metaphors for Software Tools",
            durationMinutes: 45,
            description: "Explore Claude Code, GitHub (Audit Trail / General Ledger), Vercel (Printer & Publisher), and Supabase (Locked Filing Cabinet).",
            verificationSteps: [
              "Understand localhost development server concept",
              "Review accounting tool metaphors table"
            ]
          }
        ]
      },
      {
        id: "d2-m2",
        day: 2,
        startTime: "09:45",
        endTime: "10:45",
        title: "Module 8: Build 1 — Firm Website & Tax Calendar",
        chapterSource: "Chapter 7 (Ex 3A)",
        objective: "Build a single-page responsive website for an accounting firm with an embedded 2026 Malaysian tax compliance calendar.",
        pacingTip: "Ensure participants open index.html directly in browser and iterate with custom prompt requests.",
        exercises: [
          {
            id: "ex-3a",
            chapter: 7,
            code: "Ex 3A",
            title: "Firm Website & Tax Deadline Calendar",
            durationMinutes: 60,
            description: "Generate single-file index.html website featuring firm services, brand styling, responsive design, and WhatsApp contact button.",
            promptText: "Create a single-page website for a Malaysian accounting firm called [Firm Name]. Sections: (1) hero with firm name and tagline; (2) services — bookkeeping, audit, tax, SST, payroll; (3) a 2026 Malaysian tax deadline calendar as a clean table: Form C and CP204 cycles, SST returns (SST-02 bi-monthly), EPF/Socso/EIS/PCB monthly deadlines, e-Invoice milestones; (4) contact section with address and phone placeholder. Professional look, navy and gold colour scheme, mobile-friendly. Plain HTML and CSS in one file called index.html so I can open it by double-clicking.",
            promptExplanation: "Creates complete initial marketing website and compliance calendar without external dependencies.",
            verificationSteps: [
              "Verify tax deadline dates against firm compliance calendar",
              "Test mobile layout responsiveness by narrowing browser",
              "Confirm WhatsApp click-to-chat button works"
            ]
          }
        ]
      },
      {
        id: "d2-break1",
        day: 2,
        startTime: "10:45",
        endTime: "11:00",
        title: "Morning Refreshment Break",
        chapterSource: "N/A",
        objective: "Break before launching into the main Next.js SME Tax Estimator build.",
        exercises: [],
        isBreak: true,
        breakType: "tea"
      },
      {
        id: "d2-m3",
        day: 2,
        startTime: "11:00",
        endTime: "12:45",
        title: "Module 9: Build 2 — SME Tax Estimator Web App",
        chapterSource: "Chapter 7 (Ex 3B)",
        objective: "Specify and build a Next.js web application implementing complex Malaysian SME tax qualification logic and tiered calculations.",
        pacingTip: "Walk through all 5 test cases systematically. The RM78,600 anchor case must agree with Drill 1C.",
        exercises: [
          {
            id: "ex-3b",
            chapter: 7,
            code: "Ex 3B",
            title: "SME Tax Estimator Web App Build",
            durationMinutes: 105,
            description: "Build Next.js web app evaluating paid-up capital, gross income, and foreign shareholding, outputting tier calculations and CP204 estimates.",
            promptText: "Build a web app called “SME Tax Estimator” for a Malaysian accounting firm. INPUTS: chargeable income (RM), paid-up ordinary share capital (RM), gross business income (RM), and a yes/no question: is foreign shareholding 20% or less? LOGIC: the company qualifies as SME only if paid-up capital ≤ RM 2,500,000 AND gross income ≤ RM 50,000,000 AND foreign shareholding ≤ 20%. If SME: tax = 15% on the first RM 150,000 of chargeable income, 17% on RM 150,001 to RM 600,000, 24% above RM 600,000. If not SME: flat 24%. OUTPUTS: SME status with a one-line reason if not qualified; a tier-by-tier computation table; total tax payable; effective tax rate; estimated monthly CP204 instalment (total tax ÷ 12, rounded up to the nearest RM 10). Include a disclaimer: “Estimate only, based on YA 2026 rates. Not tax advice — contact [Firm Name] for a formal computation.” Style it to match my firm website from this morning. Use Next.js so I can deploy it to Vercel later. Show me your plan before you start building.",
            promptExplanation: "Full software specification prompt combining business logic, eligibility guardrails, visual styling, and legal disclaimers.",
            verificationSteps: [
              "Test Case 1 (Anchor): CI 480k, Cap 500k, Gross 8m, Local -> SME, Tax RM78,600",
              "Test Case 2: CI 750k -> SME, Tax RM135,000",
              "Test Case 3: Capital RM3m -> Non-SME (Capital > RM2.5m), Tax RM115,200",
              "Test Case 4: Gross RM60m -> Non-SME (Gross > RM50m), Tax RM115,200",
              "Test Case 5: Foreign > 20% -> Non-SME (Shareholding fail), Tax RM115,200",
              "Input validation check: Friendly error for invalid text or negative numbers"
            ]
          }
        ]
      },
      {
        id: "d2-lunch",
        day: 2,
        startTime: "12:45",
        endTime: "13:45",
        title: "Networking Lunch",
        chapterSource: "N/A",
        objective: "Rest and informal participant discussions.",
        exercises: [],
        isBreak: true,
        breakType: "lunch"
      },
      {
        id: "d2-m4",
        day: 2,
        startTime: "13:45",
        endTime: "14:45",
        title: "Module 10: Ship 1 — GitHub Version Control & Audit Trail",
        chapterSource: "Chapter 8 (Ex 3C)",
        objective: "Establish private GitHub repository, execute structured commits, inspect file diffs, and demonstrate reversal journal entry metaphor.",
        pacingTip: "Emphasize commit messages as journal narrations. Show how reverting a commit works like a reversing journal entry.",
        exercises: [
          {
            id: "ex-3c",
            chapter: 8,
            code: "Ex 3C",
            title: "GitHub Repository & Commit Audit Trail",
            durationMinutes: 60,
            description: "Initialize private git repo, commit baseline app, execute audited modification (CP204 rounding update), and test code reversal.",
            promptText: "Set up version control for this project. Create a PRIVATE GitHub repository called sme-tax-estimator under my account, commit everything with the message “Initial version — SME Tax Estimator with YA 2026 rates”, and push it. Then tell me the repository URL and explain in two sentences what a commit is.\n\nChange the CP204 rounding from nearest RM 10 to nearest RM 100. Commit with the message “Change CP204 rounding to nearest RM 100 per manager review”. Then show me the history of this file so I can see both versions and who changed what, when.",
            promptExplanation: "Connects git commits directly to accounting journal entries and audit trails.",
            verificationSteps: [
              "Confirm repo visibility is PRIVATE (padlock icon present on GitHub)",
              "Verify commit history shows explicit narration messages",
              "Inspect diff view showing exact single line change",
              "Execute reversal commit to restore baseline"
            ]
          }
        ]
      },
      {
        id: "d2-m5",
        day: 2,
        startTime: "14:45",
        endTime: "15:45",
        title: "Module 11: Ship 2 — Vercel Live Deployment & QR Testing",
        chapterSource: "Chapter 8 (Ex 3D)",
        objective: "Link GitHub repository to Vercel, deploy live public URL, generate mobile QR code, and test continuous deployment pipeline.",
        pacingTip: "Celebrate the 'live URL' moment! Have all participants scan their app QR codes on mobile phones.",
        exercises: [
          {
            id: "ex-3d",
            chapter: 8,
            code: "Ex 3D",
            title: "Vercel Cloud Deployment & Auto-Redeploy Pipeline",
            durationMinutes: 60,
            description: "Import GitHub project into Vercel, deploy to public URL, generate QR code for mobile testing, and verify auto-deploy on git push.",
            promptText: "Change the app's title colour to the firm's gold, commit with message “Brand colour update”, and push.",
            promptExplanation: "Proves automated CI/CD pipeline: Code modification -> Git push -> Automatic cloud redeployment.",
            verificationSteps: [
              "Verify live HTTPS URL provided by Vercel",
              "Scan QR code with mobile phone and test app functionality",
              "Push gold brand color change and confirm live phone screen updates within 60 seconds without manual clicks"
            ],
            beCareful: "Ensure legal disclaimer and YA label are prominently visible on live deployed app."
          }
        ]
      },
      {
        id: "d2-break2",
        day: 2,
        startTime: "15:45",
        endTime: "16:00",
        title: "Afternoon Refreshment Break",
        chapterSource: "N/A",
        objective: "Quick break before final Supabase database integration.",
        exercises: [],
        isBreak: true,
        breakType: "tea"
      },
      {
        id: "d2-m6",
        day: 2,
        startTime: "16:00",
        endTime: "17:00",
        title: "Module 12: Ship 3 — Supabase Database & Security Lock (RLS)",
        chapterSource: "Chapter 8 (Ex 3E)",
        objective: "Provision Supabase project, execute SQL table schema for lead capture, enforce Row Level Security (RLS), and run end-to-end phone test.",
        pacingTip: "Verify RLS lock! Ensure participants understand why public users can INSERT leads but CANNOT SELECT/read other leads.",
        exercises: [
          {
            id: "ex-3e",
            chapter: 8,
            code: "Ex 3E",
            title: "Supabase Lead Capture & RLS Policy Enforcer",
            durationMinutes: 60,
            description: "Create estimate_leads table in Supabase via SQL editor, apply public INSERT-only RLS policy, connect app environment variables, and verify mobile submission.",
            promptText: "Connect this app to my Supabase project (URL and anon key follow). Add an optional “Get a formal computation” form under the results: name, company name, email, phone. When submitted, save the contact details together with the inputs and computed tax into a table called estimate_leads with a timestamp. Create the table for me — give me the SQL to run in the Supabase SQL editor, with Row Level Security enabled so the public can only INSERT, never read other people's submissions. Show a thank-you message after submission. Then commit and push so the live site updates. Supabase URL: [paste]. Anon key: [paste].",
            promptExplanation: "Integrates persistent cloud storage guarded by database-level Row Level Security rules.",
            verificationSteps: [
              "Submit test lead from mobile phone web app",
              "Verify new row appears in Supabase Table Editor under estimate_leads",
              "Confirm RLS security lock prevents unauthorized public reading of leads",
              "Verify PDPA privacy notice is displayed beside submission form"
            ],
            beCareful: "Never expose service_role secret keys. Use public anon keys only with strict RLS policies."
          }
        ]
      },
      {
        id: "d2-m7",
        day: 2,
        startTime: "17:00",
        endTime: "17:30",
        title: "Workshop Wrap-Up & 30-60-90 Adoption Roadmap",
        chapterSource: "Chapter 12",
        objective: "Review the 5 universal safety rules, establish 30-60-90 day firm implementation goals, and review universal repair loops.",
        pacingTip: "Distribute Prompt Reference Cards and encourage participants to build their first firm tool within 30 days.",
        exercises: [
          {
            id: "ex-roadmap",
            chapter: 12,
            code: "Roadmap 12.1",
            title: "30-60-90 Day Firm Implementation Roadmap",
            durationMinutes: 30,
            description: "Establish 30-day target (3 routine tasks + 1 client Project), 60-day target (1 published firm Skill), and 90-day target (1 cloud app / workflow).",
            verificationSteps: [
              "Review 5 Universal Safety Rules (Draft -> Verify -> Sign Off)",
              "Save troubleshooting & universal repair loop reference",
              "Complete workshop feedback survey"
            ]
          }
        ]
      }
    ]
  }
];

export const SME_TEST_CASES: TestDataCase[] = [
  {
    caseNum: 1,
    facts: "CI RM480,000 · Paid-up Capital RM500,000 · Gross Income RM8,000,000 · Local Shareholding 100%",
    expectedStatus: "SME Qualified",
    expectedTax: "RM78,600",
    why: "The Workshop Anchor Case (Ties to Drill 1C): 150k @ 15% (RM22,500) + 330k @ 17% (RM56,100)"
  },
  {
    caseNum: 2,
    facts: "CI RM750,000 · Paid-up Capital RM500,000 · Gross Income RM8,000,000 · Local Shareholding 100%",
    expectedStatus: "SME Qualified",
    expectedTax: "RM135,000",
    why: "Tiered SME Calc: 150k @ 15% (22.5k) + 450k @ 17% (76.5k) + 150k @ 24% (36k)"
  },
  {
    caseNum: 3,
    facts: "CI RM480,000 · Paid-up Capital RM3,000,000 · Gross Income RM8,000,000 · Local Shareholding 100%",
    expectedStatus: "Non-SME (Capital > RM2.5m)",
    expectedTax: "RM115,200",
    why: "Capital exceeds RM2,500,000 threshold -> Disqualified from SME rates -> Flat 24% (480k × 24%)"
  },
  {
    caseNum: 4,
    facts: "CI RM480,000 · Paid-up Capital RM500,000 · Gross Income RM60,000,000 · Local Shareholding 100%",
    expectedStatus: "Non-SME (Gross > RM50m)",
    expectedTax: "RM115,200",
    why: "Gross revenue exceeds RM50,000,000 threshold -> Disqualified from SME rates -> Flat 24%"
  },
  {
    caseNum: 5,
    facts: "CI RM480,000 · Paid-up Capital RM500,000 · Gross Income RM8,000,000 · Foreign Shareholding 25%",
    expectedStatus: "Non-SME (Foreign > 20%)",
    expectedTax: "RM115,200",
    why: "Foreign shareholding exceeds 20% limit -> Disqualified from SME rates -> Flat 24%"
  }
];

export const ORGANIZER_INFO = {
  brandName: "YKCC / YK Group",
  subBrand: "YKCC AI Training",
  title: "AI Workshop for Accountants",
  subtitle: "2-Day Hands-On AI Training for Non-Technical Accounting & Finance Staff",
  tagline: "Enhance your AI skills with our hands-on AI workshop tailored for non-technical accounting staff.",
  // Contact details are intentionally blank: the export shipped with Canva sample data
  // (hello@reallygreatsite.com / 123-456-7890). Fill these in with YKCC's real details and
  // they will appear automatically in the footer contact block.
  email: "",
  phone: "",
  address: "",
  website: "",
  heroQuote: "Don't miss this opportunity to future-proof your career. In this hands-on workshop, you'll learn how to automate the repetitive admin and accounting work that slows you down. Walk away with practical AI skills that save hours every week—and reduce human error.",
  targetAudience: "Tailored for non-technical accounting staff, audit seniors, tax practitioners, finance managers, and bookkeepers seeking practical AI automation."
};

export const COURSE_HIGHLIGHTS: CourseHighlight[] = [
  {
    title: "100% Practical & Hands-On",
    subtitle: "Zero-Coding AI Mastery",
    description: "No technical or programming background required. Learn step-by-step using natural language, ready-to-use prompts, and real accounting files.",
    metric: "2 Days",
    metricLabel: "Intensive Practical Sprint"
  },
  {
    title: "Automate Repetitive Admin & Tax Work",
    subtitle: "Reclaim 10+ Hours Every Week",
    description: "Convert messy PDF bank statements to structured Excel, reshape raw payroll reports into Form E (CP8D) ready tables, and execute SME tax calculations in seconds.",
    metric: "80%",
    metricLabel: "Time Saved on Data Entry"
  },
  {
    title: "Google Connectors & Custom Skills",
    subtitle: "Connect Claude to Drive & Gmail",
    description: "Automate Monday morning document sweeps, search Google Drive for trial balances, and standardize firm advisory letters with auto-triggering custom Skills.",
    metric: "4-Layer",
    metricLabel: "Context Management Hierarchy"
  },
  {
    title: "Vibe Coding & Cloud Web App Deployment",
    subtitle: "Build & Deploy Real Apps",
    description: "Build a Malaysian SME Tax Estimator web app, set up private GitHub version control audit trails, deploy to Vercel with mobile QR codes, and secure Supabase leads with Row-Level Security.",
    metric: "3 Live Apps",
    metricLabel: "Built & Deployed in Class"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Do participants need any coding or programming background?",
    answer: "No programming experience is needed! The entire workshop is designed specifically for non-technical accounting and finance staff. We teach 'vibe coding' and plain-English prompt engineering using accounting metaphors you already understand."
  },
  {
    id: "faq-2",
    category: "Logistics",
    question: "When will the exact dates and location be confirmed?",
    answer: "The date, time, and venue are currently To Be Confirmed (TBC). By registering your interest now, you will be notified first as soon as dates are locked, gain access to early-bird seat reservations, and help us pick dates that match your schedule preference!"
  },
  {
    id: "faq-3",
    category: "Requirements",
    question: "What hardware and accounts are required for the workshop?",
    answer: "Participants need a laptop (Windows or Mac) with Google Chrome or Microsoft Edge installed. Before Day 1, we guide you through setting up free-tier accounts on Claude, GitHub, Vercel, and Supabase. No credit card is required."
  },
  {
    id: "faq-4",
    category: "Curriculum",
    question: "What topics are covered across the 2-day workshop?",
    answer: "Day 1 focuses on practical AI prompt engineering, PDF bank statement extraction, preparing payroll data for Form E (CP8D), SME tax rules, and Google Connectors. Day 2 is a hands-on sprint focusing on building and deploying live custom AI web applications, version control audit trails, and client lead capture."
  },
  {
    id: "faq-5",
    category: "Logistics",
    question: "Can YKCC conduct this as an in-house private workshop for our firm?",
    answer: "Yes! We offer in-house customized corporate workshops tailored to your firm's specific workflows, template files, and compliance requirements. Indicate 'In-House Corporate Training' on the interest registration form."
  }
];

