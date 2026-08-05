import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { ORGANIZER_INFO } from './data/workshopData';

const FOOTER_LINKS = [
  { href: '#exercises', label: 'Exercises' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#audience', label: 'Who It’s For' },
  { href: '#faq', label: 'FAQ' },
  { href: '#register-interest', label: 'Register Interest' }
];

// Rendered only once real details are filled into ORGANIZER_INFO — the export shipped with
// Canva sample contact data, so blank entries are skipped rather than shown as placeholders.
const CONTACT_ENTRIES = [
  { icon: Mail, value: ORGANIZER_INFO.email, href: `mailto:${ORGANIZER_INFO.email}` },
  { icon: Phone, value: ORGANIZER_INFO.phone, href: `tel:${ORGANIZER_INFO.phone}` },
  { icon: Globe, value: ORGANIZER_INFO.website, href: `https://${ORGANIZER_INFO.website}` },
  { icon: MapPin, value: ORGANIZER_INFO.address, href: null }
].filter((entry) => entry.value);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-[#0284C7] focus:text-white focus:rounded-lg focus:text-sm focus:font-bold"
      >
        Skip to main content
      </a>

      <Header />

      <main>
        <LandingPage />
      </main>

      <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#0284C7] text-white flex items-center justify-center text-xs font-black">
                  YK
                </span>
                <span className="font-bold text-slate-100 text-sm">{ORGANIZER_INFO.brandName}</span>
              </div>
              <p className="leading-relaxed max-w-md text-slate-400">
                {ORGANIZER_INFO.tagline}
              </p>
              <p className="text-slate-500 text-[11px]">
                Registration details are kept confidential in line with Malaysia’s PDPA.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h2 className="text-slate-200 font-bold mb-3 text-[11px] uppercase tracking-widest">
                Explore
              </h2>
              <ul className="space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-sky-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshop facts */}
            <div>
              <h2 className="text-slate-200 font-bold mb-3 text-[11px] uppercase tracking-widest">
                The Workshop
              </h2>
              <ul className="space-y-2">
                <li>2-day hands-on training</li>
                <li>No coding background needed</li>
                <li className="text-amber-400 font-semibold">Dates &amp; time to be confirmed</li>
              </ul>

              {CONTACT_ENTRIES.length > 0 && (
                <ul className="space-y-2 mt-4 pt-4 border-t border-slate-800">
                  {CONTACT_ENTRIES.map(({ icon: Icon, value, href }) => (
                    <li key={value} className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      {href ? (
                        <a href={href} className="hover:text-sky-400 transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <span>{value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <span>
              © {new Date().getFullYear()} {ORGANIZER_INFO.brandName}. All rights reserved.
            </span>
            <span>Practical AI training for accounting &amp; finance teams.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
