'use client';

import Link from 'next/link';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#top"
          className="flex items-center gap-3 text-sm font-medium tracking-tight text-slate-100"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-base font-bold text-white shadow-lg shadow-sky-500/40">
            NJ
          </span>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-slate-50">
              Nandan Javagal
            </span>
            <span className="text-xs font-normal text-slate-400">
              AI/ML Engineer · Portfolio
            </span>
          </div>
        </a>

        <nav className="flex items-center gap-4 text-xs font-medium text-slate-300 sm:gap-6 sm:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-3 py-1 text-slate-300/90 transition hover:bg-slate-800 hover:text-slate-50 md:inline-flex"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
