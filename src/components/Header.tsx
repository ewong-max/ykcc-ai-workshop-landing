import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ORGANIZER_INFO } from '../data/workshopData';

const NAV_LINKS = [
  { href: '#exercises', label: 'Exercises' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#audience', label: 'Who It’s For' },
  { href: '#faq', label: 'FAQ' }
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 min-w-0 group">
            <span className="w-9 h-9 rounded-xl bg-[#0284C7] text-white flex items-center justify-center text-sm font-black tracking-tight flex-shrink-0 shadow-sm">
              YK
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-extrabold text-[#111113] leading-tight truncate group-hover:text-[#0284C7] transition-colors">
                AI Workshop for Accountants
              </span>
              <span className="hidden sm:block text-[11px] font-medium text-[#777672] leading-tight truncate">
                {ORGANIZER_INFO.brandName} · 2-Day Hands-On Training
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Section navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs font-semibold text-[#555450] rounded-lg hover:text-[#111113] hover:bg-[#EFEBE2] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#register-interest"
              className="hidden sm:flex px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold rounded-xl shadow-sm transition-colors items-center gap-1.5 whitespace-nowrap"
            >
              Register Interest <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden p-2 rounded-lg text-[#333230] hover:bg-[#EFEBE2] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Section navigation"
            className="lg:hidden pb-4 border-t border-[#E6E3DB] pt-3 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-[#333230] rounded-lg hover:bg-[#EFEBE2] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register-interest"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-extrabold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
            >
              Register Interest <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
