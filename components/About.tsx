'use client';

import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'Malnad College of Engineering',
    degree:
      'Bachelor of Engineering in Computer Science and Engineering (AI & ML)',
    details: 'CGPA: 7.3 (till 6th sem) · Hassan, India',
    period: 'Expected: May 2026',
  },
  {
    institution: 'Masters PU College',
    degree: 'Pre-University Course (PCMC)',
    details: '78.56% · Hassan, India',
    period: 'Completed: May 2022',
  },
  {
    institution: 'CKS English Medium High School',
    degree: 'SSLC (10th Grade)',
    details: '71% · Hassan, India',
    period: 'Completed: May 2020',
  },
];

export function About() {
  return (
    <section id="about" className="bg-slate-950 px-4 pb-20 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row">
        {/* About copy */}
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            About
          </p>
          <h2 className="text-balance text-3xl font-semibold text-slate-50 md:text-4xl">
            AI & ML student crafting real‑world intelligent solutions.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            I'm a Computer Science and Engineering student specializing in AI & ML at
            Malnad College of Engineering, Hassan. I enjoy solving open‑ended
            problems using machine learning, deep learning, NLP, and computer
            vision—especially when it means building end‑to‑end products that are
            actually used.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Comfortable with the full lifecycle: data, modeling, evaluation, and deployment.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Experience with modern tooling like n8n, Streamlit, and LLM APIs.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Strong communicator who can explain models and trade‑offs clearly.</span>
            </li>
          </ul>
        </div>

        {/* Education timeline */}
        <div className="flex-1 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/60 md:p-7">
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-sky-400" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Education
            </h3>
          </div>
          <ol className="relative space-y-5 border-l border-slate-700 pl-5">
            {education.map((item) => (
              <li key={item.institution} className="space-y-1">
                <span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border border-sky-400 bg-slate-950" />
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  {item.period}
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  {item.institution}
                </p>
                <p className="text-xs text-slate-300">{item.degree}</p>
                <p className="text-xs text-slate-500">{item.details}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
