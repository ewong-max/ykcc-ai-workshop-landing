import React, { useState } from 'react';
import {
  ORGANIZER_INFO,
  COURSE_HIGHLIGHTS,
  FAQ_ITEMS,
  WORKSHOP_DAYS
} from '../data/workshopData';
import { InterestRegistration } from '../types';
import {
  SHEET_URL,
  isSubmissionConfigured,
  buildLead,
  submitLeadToSheet
} from '../lib/leadSubmission';
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Building2,
  Send,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Layers,
  Zap,
  AlertTriangle,
  FileSpreadsheet,
  Calculator,
  Laptop,
  Terminal,
  Play,
  RefreshCw
} from 'lucide-react';

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  jobRole: 'Accountant / Accounts Executive'
};

export const LandingPage: React.FC = () => {
  // Registration form state
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastSubmittedLead, setLastSubmittedLead] = useState<InterestRegistration | null>(null);

  // FAQ Expand/Collapse
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  // Interactive Exercise Preview
  const [selectedExercise, setSelectedExercise] = useState<number | null>(0);

  // Agenda day selector
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const agendaDay = WORKSHOP_DAYS.find((day) => day.dayNumber === activeDay) || WORKSHOP_DAYS[0];

  // Registrations go straight into the workshop Google Sheet through the Apps Script
  // endpoint — nothing is kept in the visitor's browser.
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const lead = buildLead(formData);

    try {
      await submitLeadToSheet(lead);
      setLastSubmittedLead(lead);
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'We could not save your registration just now. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterAnother = () => {
    setFormData(EMPTY_FORM);
    setFormSubmitted(false);
    setLastSubmittedLead(null);
    setSubmitError(null);
  };

  // Featured Hands-On Exercises Data
  const FEATURED_EXERCISES = [
    {
      code: "Drill 1A",
      title: "PDF Bank Statement Extraction to Structured Excel",
      category: "Data Extraction & Cleaning",
      duration: "30 Mins",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      description: "Convert messy, multi-page scanned PDF bank statements directly into perfectly aligned, formulas-ready Excel tables without manual typing.",
      keyOutcome: "Eliminates 90% of manual bank reconciliation data entry time.",
      samplePrompt: `"Convert this 5-page PDF bank statement into a structured table with columns: Date, Description, Reference, Withdrawal, Deposit, Balance. Calculate the net total and flag any unverified discrepancies."`
    },
    {
      code: "Drill 2B",
      title: "Horizontal Payroll Unpivoting & Folder Sweeps",
      category: "Folder Batching & Audit Prep",
      duration: "45 Mins",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      description: "Transform wide, unpivot horizontal payroll spreadsheets into clean vertical database tables ready for audit sampling and pivot table reporting.",
      keyOutcome: "Standardizes legacy client payroll files instantly.",
      samplePrompt: `"Unpivot this multi-department payroll sheet into vertical database records with columns: Employee ID, Name, Department, Pay Component, Amount, Month."`
    },
    {
      code: "Drill 3A",
      title: "SME Tax Calculation & Qualification Rules",
      category: "Tax Advisory & Compliance",
      duration: "45 Mins",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=600&q=80",
      description: "Execute 3-tier SME tax calculations (15%, 17%, 24%) with automatic checks for paid-up capital limits and foreign shareholding disqualifiers.",
      keyOutcome: "Prevents costly tax filing errors with automated audit trails.",
      samplePrompt: `"Review this SME company profile with RM2.2m paid-up capital and 25% foreign parent holding. Determine applicable corporate tax rate and calculate tax payable on RM850,000 charge income."`
    },
    {
      code: "Drill 4B",
      title: "Google Drive Sweeps & Auto Advisory Letters",
      category: "Google Connectors & Custom Skills",
      duration: "40 Mins",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      description: "Connect Claude directly to Google Drive to sweep client folders, extract trial balance variances, and draft standardized partner advisory letters.",
      keyOutcome: "Automates client communication and document search.",
      samplePrompt: `"Search my Google Drive folder '2026 Trial Balances', summarize the top 3 balance sheet variances, and draft a formal advisory letter to the client."`
    },
    {
      code: "Drill 5A",
      title: "Build & Deploy SME Tax Estimator Web App",
      category: "Vibe Coding & Cloud Deployment",
      duration: "60 Mins",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      description: "Build a custom web application using natural language, upload to GitHub version control, deploy live on Vercel, and generate a mobile QR code for clients.",
      keyOutcome: "Walk away with a live web application built in class!",
      samplePrompt: `"Build a web app called SME Tax Estimator. Allow users to enter Paid-up Capital, Gross Income, and Taxable Profit. Display real-time tax breakdown and export PDF summary."`
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1C1C1F] min-h-screen font-sans">


      {/* Hero Section with Workshop Photo & High-Impact Copy */}
      <section id="top" className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#E6E3DB] bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headline & Flyer Quote (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0284C7]/10 text-[#0284C7] font-bold text-xs tracking-wider uppercase mb-3 border border-[#0284C7]/20">
                  <Sparkles className="w-4 h-4" /> 2-Day Practical Hands-On Training
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111113] tracking-tight leading-tight mb-3">
                  AI Workshop for <span className="text-[#0284C7]">Accountants</span>
                </h1>
                <p className="text-base sm:text-xl font-semibold text-[#3D3C42] mb-4">
                  {ORGANIZER_INFO.subtitle}
                </p>

                {/* Highlight Quote Block directly from Flyer */}
                <div className="bg-[#262629] text-[#F3F2EE] p-5 rounded-2xl shadow-lg border border-[#3A3A3E] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7]/20 blur-3xl rounded-full pointer-events-none" />
                  <p className="text-sm sm:text-base leading-relaxed font-normal text-[#E0DFDC]">
                    "{ORGANIZER_INFO.heroQuote}"
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#404046] flex items-center justify-between text-xs text-sky-300">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400" /> Tailored for non-technical finance staff
                    </span>
                    <span className="text-[#A5A4A0]">YKCC / YK Group</span>
                  </div>
                </div>
              </div>

              {/* CTA Bar */}
              <div className="bg-white border-2 border-[#E5E1D8] p-5 rounded-xl flex items-center justify-center shadow-sm">
                <a
                  href="#register-interest"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-base font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Register Interest <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Quick Key Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-[#E6E3DB] text-center shadow-xs">
                  <div className="text-2xl font-extrabold text-[#0284C7]">2 Days</div>
                  <div className="text-xs font-medium text-[#666562]">Hands-On Sprint</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E6E3DB] text-center shadow-xs">
                  <div className="text-2xl font-extrabold text-[#111113]">0 Code</div>
                  <div className="text-xs font-medium text-[#666562]">No Technical Required</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E6E3DB] text-center shadow-xs">
                  <div className="text-2xl font-extrabold text-emerald-600">5 Drills</div>
                  <div className="text-xs font-medium text-[#666562]">Practical Exercises</div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Quality Workshop Visual Photo Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E6E3DB] shadow-2xl group bg-[#262629]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Accounting professionals working through hands-on exercises on their laptops during a training session"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.visibility = 'hidden';
                  }}
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/90 via-[#111113]/40 to-transparent p-6 flex flex-col justify-end text-white">
                  <h3 className="text-lg sm:text-xl font-bold leading-tight text-white mb-1">
                    Hands-On Interactive Learning Environment
                  </h3>
                  <p className="text-xs text-[#D8D7D3] line-clamp-2">
                    Participants bring their laptops, work on real accounting sample files, and build live AI tools step-by-step.
                  </p>
                </div>
              </div>

              {/* What You Take Home Box */}
              <div className="bg-[#262629] text-white p-5 rounded-2xl border border-[#38383D] shadow-md space-y-3">
                <div className="flex items-center justify-between border-b border-[#3D3D42] pb-2 text-xs font-bold text-sky-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Takeaways & Deliverables
                  </span>
                  <span className="text-[#A0A0A5] text-[11px]">Included with Registration</span>
                </div>
                <ul className="space-y-2 text-xs text-[#D0CFCA]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                    <span><strong>10+ Ready-to-Use Accounting Prompts</strong> for bank statement extraction, payroll unpivoting & SME tax calculations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                    <span><strong>Google Connectors & Custom Skills</strong> to sweep Gmail documents & generate partner advisory letters.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                    <span><strong>A fully functioning web app</strong>, built by you in class and deployed to a live URL anyone can open.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED HANDS-ON EXERCISES & PRACTICAL DRILLS SECTION (HIGHLIGHTED AS REQUESTED) */}
      <section id="exercises" className="py-12 sm:py-16 border-b border-[#E6E3DB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
              100% Practical & Interactive
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              Featured Hands-On Exercises & Practical Drills
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              No theoretical lectures. Learn by doing real accounting tasks using plain-English prompts and sample client files.
            </p>
          </div>

          {/* Exercise Selector Tabs & Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Exercise List Cards (5 Cols) */}
            <div
              role="tablist"
              aria-label="Featured hands-on exercises"
              aria-orientation="vertical"
              className="lg:col-span-5 space-y-3"
            >
              {FEATURED_EXERCISES.map((ex, index) => {
                const isSelected = selectedExercise === index;
                return (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedExercise(index)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-[#FAF8F5] border-[#0284C7] shadow-md ring-2 ring-[#0284C7]/20'
                        : 'bg-white border-[#E6E3DB] hover:border-[#B0ADA4] hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs flex-shrink-0 ${
                        isSelected
                          ? 'bg-[#0284C7] text-white shadow-xs'
                          : 'bg-[#262629] text-white'
                      }`}
                    >
                      0{index + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                          {ex.code} · {ex.duration}
                        </span>
                        <span className="text-[11px] font-semibold text-[#777672]">
                          {ex.category}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#111113] line-clamp-1">
                        {ex.title}
                      </h4>
                      <p className="text-[11px] text-[#666562] line-clamp-1 mt-0.5">
                        {ex.keyOutcome}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Exercise Detailed Spotlight View (7 Cols) */}
            <div
              role="tabpanel"
              aria-live="polite"
              className="lg:col-span-7 bg-[#202024] text-white rounded-3xl p-6 sm:p-8 border border-[#38383D] shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284C7]/10 blur-3xl rounded-full pointer-events-none" />

              {selectedExercise !== null && FEATURED_EXERCISES[selectedExercise] && (
                <div className="space-y-6">
                  {/* Photo Header for the Exercise */}
                  <div className="relative rounded-2xl overflow-hidden h-48 border border-[#3A3A3E] bg-[#141416]">
                    <img
                      src={FEATURED_EXERCISES[selectedExercise].image}
                      alt=""
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.visibility = 'hidden';
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/50 to-transparent p-4 flex flex-col justify-end">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-[#0284C7] text-white font-extrabold text-xs rounded-md uppercase tracking-wider">
                          {FEATURED_EXERCISES[selectedExercise].code}
                        </span>
                        <span className="text-xs font-semibold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-500/30">
                          ⏱ Duration: {FEATURED_EXERCISES[selectedExercise].duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                      {FEATURED_EXERCISES[selectedExercise].category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                      {FEATURED_EXERCISES[selectedExercise].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D5D4D0] mt-2 leading-relaxed">
                      {FEATURED_EXERCISES[selectedExercise].description}
                    </p>
                  </div>

                  {/* Sample Prompt Box */}
                  <div className="bg-[#141416] p-4 rounded-xl border border-[#333338] space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-4 h-4 text-amber-400" /> Sample Prompt Template Used in Class
                      </span>
                      <span className="text-[10px] text-[#777672]">Zero Coding Required</span>
                    </div>
                    <pre className="text-xs text-[#E0DFDC] bg-[#1C1C20] p-3 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono border border-[#2B2B30]">
                      {FEATURED_EXERCISES[selectedExercise].samplePrompt}
                    </pre>
                  </div>

                  {/* Outcome Highlight */}
                  <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Key Practical Outcome:</strong> {FEATURED_EXERCISES[selectedExercise].keyOutcome}</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href="#register-interest"
                      className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
                    >
                      Sign Up to Master This Drill <ArrowRight className="w-4 h-4" />
                    </a>

                    <span className="text-xs text-[#888890]">
                      Drill {selectedExercise + 1} of {FEATURED_EXERCISES.length}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COURSE BENEFITS & HIGHLIGHTS BENTO GRID WITH IMAGES */}
      <section id="benefits" className="py-12 sm:py-16 border-b border-[#E6E3DB] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Transform Your Accounting Operations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              Core Benefits for Non-Technical Staff
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              Learn how modern AI tools automate repetitive admin and accounting work without requiring technical background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSE_HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E6E3DB] hover:border-[#0284C7]/50 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#262629] text-white flex items-center justify-center text-sm font-bold shadow-xs">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-bold text-[#0284C7] bg-[#0284C7]/10 px-2.5 py-0.5 rounded-full">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111113] group-hover:text-[#0284C7] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0284C7] mb-3">{item.subtitle}</div>
                  <p className="text-xs text-[#555450] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E6E3DB] text-[11px] text-[#777672] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> {item.metricLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL 2-DAY AGENDA — hour-by-hour module breakdown from WORKSHOP_DAYS */}
      <section id="agenda" className="py-12 sm:py-16 bg-white border-b border-[#E6E3DB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Full Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              The Complete 2-Day Agenda
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              Every module, hour by hour — so you know exactly what your team walks away with before you commit a seat.
            </p>
          </div>

          {/* Day selector */}
          <div className="flex justify-center mb-8">
            <div
              role="tablist"
              aria-label="Select workshop day"
              className="bg-[#FAF8F5] p-1.5 rounded-xl border border-[#E6E3DB] inline-flex items-center gap-2 shadow-xs"
            >
              {WORKSHOP_DAYS.map((day) => (
                <button
                  key={day.dayNumber}
                  role="tab"
                  aria-selected={activeDay === day.dayNumber}
                  onClick={() => setActiveDay(day.dayNumber)}
                  className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                    activeDay === day.dayNumber
                      ? 'bg-[#0284C7] text-white shadow-xs'
                      : 'text-[#555450] hover:text-[#111113] hover:bg-[#EAE7DF]'
                  }`}
                >
                  <Calendar className="w-4 h-4" /> Day {day.dayNumber}
                </button>
              ))}
            </div>
          </div>

          {/* Selected day overview */}
          <div className="bg-[#202024] text-white rounded-3xl p-6 sm:p-8 border border-[#38383D] shadow-xl relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284C7]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Day {agendaDay.dayNumber}
              </span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1">{agendaDay.theme}</h3>
              <p className="text-xs sm:text-sm text-sky-200 font-semibold mt-1">{agendaDay.subTitle}</p>
              <p className="text-xs sm:text-sm text-[#D5D4D0] mt-3 leading-relaxed">{agendaDay.description}</p>

              <div className="mt-5 pt-4 border-t border-[#3A3A3E] flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#B5B4B0]">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <strong className="text-white">
                    {agendaDay.modules.filter((m) => !m.isBreak).length}
                  </strong>{' '}
                  teaching modules
                </span>
                <span className="flex items-center gap-1.5">
                  <Play className="w-4 h-4 text-emerald-400" />
                  <strong className="text-white">
                    {agendaDay.modules.reduce((total, m) => total + m.exercises.length, 0)}
                  </strong>{' '}
                  guided exercises
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {agendaDay.modules[0]?.startTime} –{' '}
                  {agendaDay.modules[agendaDay.modules.length - 1]?.endTime}
                </span>
              </div>
            </div>
          </div>

          {/* Module timeline */}
          <ol className="space-y-3">
            {agendaDay.modules.map((module) =>
              module.isBreak ? (
                <li key={module.id} className="flex items-center gap-3 px-1 py-1">
                  <span className="w-16 sm:w-28 flex-shrink-0 text-[11px] font-semibold text-[#8A8983]">
                    {module.startTime}
                  </span>
                  <span className="flex-1 border-t border-dashed border-[#DCD8CF]" />
                  <span className="text-[11px] font-semibold text-[#8A8983] whitespace-nowrap">
                    {module.breakType === 'lunch' ? 'Lunch break' : 'Refreshment break'} ·{' '}
                    {module.startTime}–{module.endTime}
                  </span>
                  <span className="flex-1 border-t border-dashed border-[#DCD8CF] hidden sm:block" />
                </li>
              ) : (
                <li
                  key={module.id}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#E6E3DB] p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-5 hover:border-[#0284C7]/50 hover:shadow-md transition-all"
                >
                  <div className="sm:w-28 flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#0284C7] bg-white border border-sky-200 rounded-lg px-2.5 py-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {module.startTime}–{module.endTime}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-[#111113]">{module.title}</h3>
                      <span className="text-[10px] font-semibold text-[#777672] bg-white border border-[#E6E3DB] px-2 py-0.5 rounded">
                        {module.chapterSource}
                      </span>
                    </div>
                    <p className="text-xs text-[#555450] leading-relaxed">{module.objective}</p>

                    {module.exercises.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {module.exercises.map((exercise) => (
                          <span
                            key={exercise.id}
                            title={exercise.title}
                            className="text-[10px] font-bold text-[#0284C7] bg-white border border-sky-200 px-2 py-0.5 rounded-md"
                          >
                            {exercise.code} · {exercise.durationMinutes} min
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              )
            )}
          </ol>

          <div className="mt-8 p-5 bg-[#FAF8F5] rounded-2xl border border-[#E6E3DB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-[#555450]">
              Timings are indicative and may shift slightly to match the pace of each batch.{' '}
              <strong className="text-[#111113]">Workshop dates are still to be confirmed.</strong>
            </p>
            <a
              href="#register-interest"
              className="px-6 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold rounded-xl shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Register Interest <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* REGISTRATION & INTEREST SECTION (Dual Mode: Direct Form OR Google Form Integration) */}
      <section id="register-interest" className="py-12 sm:py-16 bg-white border-b border-[#E6E3DB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Register Interest · No Payment Required
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              Express Your Interest for YKCC AI Workshop
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-2">
              <span className="bg-yellow-200 text-yellow-950 font-extrabold px-2 py-0.5 rounded-md border border-yellow-300/80 shadow-xs inline-block">
                Dates and time are to be confirmed
              </span>{' '}
              (TBC). Register now to receive early-bird date updates, seat availability, and in-house corporate training quotes.
            </p>
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border-2 border-[#E6E3DB] shadow-lg">
              {formSubmitted && lastSubmittedLead ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111113]">
                    Thank You, {lastSubmittedLead.fullName}!
                  </h3>
                  <p className="text-sm text-[#44433F] max-w-lg mx-auto">
                    Your interest for the <strong>YKCC AI Workshop for Accountants</strong> has been successfully recorded.
                  </p>

                  <div className="bg-white p-5 rounded-2xl border border-[#E6E3DB] max-w-md mx-auto text-left text-xs space-y-2 text-[#333230]">
                    <div className="font-bold text-sm text-[#0284C7] border-b pb-2 mb-2 flex items-center justify-between">
                      <span>Registration Summary</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        ID: {lastSubmittedLead.id}
                      </span>
                    </div>
                    <div><strong>Name:</strong> {lastSubmittedLead.fullName}</div>
                    <div><strong>Email:</strong> {lastSubmittedLead.email}</div>
                    <div><strong>Phone:</strong> {lastSubmittedLead.phone}</div>
                    <div><strong>Company:</strong> {lastSubmittedLead.companyName}</div>
                    <div><strong>Job Role:</strong> {lastSubmittedLead.jobRole}</div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 max-w-md mx-auto space-y-2">
                    <strong className="block">What Happens Next?</strong>
                    <p>Our YKCC training team will email you as soon as the exact workshop dates, venue, and early-bird seat reservations are finalized!</p>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={handleRegisterAnother}
                      className="px-6 py-2.5 bg-[#262629] text-white text-xs font-bold rounded-lg hover:bg-[#38383D] transition-all shadow-sm"
                    >
                      Register Another Person / Team
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitForm} className="space-y-5">
                  {!isSubmissionConfigured && (
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                      <span>
                        <strong className="block mb-0.5">Not connected to the leads sheet yet.</strong>
                        Deploy the Apps Script in{' '}
                        <code className="bg-amber-100 px-1 py-0.5 rounded">google-apps-script/</code>{' '}
                        and paste its URL into{' '}
                        <code className="bg-amber-100 px-1 py-0.5 rounded">src/lib/leadSubmission.ts</code>.
                        Submissions will fail until then.
                      </span>
                    </div>
                  )}

                  {submitError && (
                    <div
                      role="alert"
                      className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-900 flex items-start gap-2.5"
                    >
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
                      <span>
                        <strong className="block mb-0.5">Your registration was not saved.</strong>
                        {submitError}
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reg-fullname" className="block text-xs font-bold text-[#222126] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="reg-fullname"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="e.g. Tan Wei Ming"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="reg-email" className="block text-xs font-bold text-[#222126] mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="reg-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="e.g. name@yourfirm.com.my"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="reg-phone" className="block text-xs font-bold text-[#222126] mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="reg-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        required
                        autoComplete="tel"
                        placeholder="e.g. +60 12-345 6789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="reg-company" className="block text-xs font-bold text-[#222126] mb-1">
                        Company Name
                      </label>
                      <input
                        id="reg-company"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        placeholder="e.g. Tan & Associates PLT"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="reg-role" className="block text-xs font-bold text-[#222126] mb-1">
                        Job Role
                      </label>
                      <select
                        id="reg-role"
                        name="jobRole"
                        value={formData.jobRole}
                        onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                      >
                        <option value="Audit Senior / Manager">Audit Senior / Manager</option>
                        <option value="Tax Practitioner / Agent">Tax Practitioner / Agent</option>
                        <option value="Accountant / Accounts Executive">Accountant / Accounts Executive</option>
                        <option value="Finance Manager / Director">Finance Manager / Director</option>
                        <option value="Bookkeeper / Freelancer">Bookkeeper / Freelancer</option>
                        <option value="Business Owner / Partner">Business Owner / Partner</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6E3DB]">
                    <div className="text-[11px] text-[#777672]">
                      🔒 Your details are kept confidential under PDPA by YKCC / YK Group.
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 bg-[#0284C7] hover:bg-[#0369A1] disabled:bg-[#7FB8D8] disabled:cursor-not-allowed text-white text-xs font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Submit Interest Registration
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
          </div>

          <p className="mt-5 text-center text-[11px] text-[#8A8983]">
            {ORGANIZER_INFO.brandName} staff:{' '}
            <a
              href={SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0284C7] hover:underline"
            >
              open the registrations sheet
            </a>
            .
          </p>
        </div>
      </section>

      {/* Target Audience & Target Roles Section */}
      <section id="audience" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#E6E3DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Who Should Attend
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              Tailored for Non-Technical Accounting Personnel
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-1">
              Designed specifically for accounting firms, in-house finance departments, audit seniors, and tax practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Audit Seniors & Managers",
                desc: "Automate trial balance variance sweeps, unpivot payroll registers, and generate audit sampling working papers in seconds.",
                icon: FileSpreadsheet
              },
              {
                title: "Tax Practitioners & Agents",
                desc: "Execute SME multi-tier tax computations, check paid-up capital limits automatically, and generate structured client tax summaries.",
                icon: Calculator
              },
              {
                title: "Finance Managers & Executives",
                desc: "Convert messy PDF bank statements into Excel, automate weekly Google Drive sweeps, and streamline team reporting workflows.",
                icon: Building2
              },
              {
                title: "Bookkeepers & Accounting Firms",
                desc: "Build custom AI web applications, streamline client advisory communications, and future-proof your firm with zero coding.",
                icon: Laptop
              }
            ].map((role, idx) => {
              const IconComp = role.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-[#E6E3DB] shadow-xs hover:border-[#0284C7] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4 border border-sky-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111113] mb-2">{role.title}</h3>
                  <p className="text-xs text-[#555450] leading-relaxed">{role.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="faq" className="py-12 sm:py-16 bg-white border-b border-[#E6E3DB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-1">
              Everything you need to know about joining the YKCC AI Workshop.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#E6E3DB] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-panel`}
                    className="w-full p-5 text-left font-bold text-sm text-[#111113] flex items-center justify-between gap-4 hover:bg-[#F2EFE8]"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#777672]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#777672]" />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      id={`${faq.id}-panel`}
                      role="region"
                      className="px-5 pb-5 pt-1 text-xs text-[#555450] leading-relaxed border-t border-[#E8E5DC] bg-white"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
