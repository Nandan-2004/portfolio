'use client';

import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-sky-400" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Experience
              </p>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Applying AI in real teams.
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-lg shadow-slate-950/60">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-slate-50">
                ZoomInData
                <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-emerald-400 align-middle" />
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                AI/ML Intern
              </p>
            </div>
            <p className="text-xs text-slate-400">Jul 2025 – Oct 2025 · Remote</p>
          </div>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-sky-400">
              Built and deployed end‑to‑end ML applications using Python,
              Streamlit, and modern model APIs.
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-sky-400">
              Designed workflows that automate data collection, model
              experimentation, and monitoring.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
