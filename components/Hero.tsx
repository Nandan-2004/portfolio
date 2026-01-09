'use client';

import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-4 pb-24 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.12),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-12 md:flex-row md:items-center">
        {/* Left: intro */}
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs font-medium text-sky-300">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to work · AI/ML Engineer
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Nandan Javagal
           
          </h1>



          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              View projects
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1w-9-DJUcKIaaE9oyquM94J7pjzQTu87x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-500/80 hover:text-sky-200"
            >
              <FileText className="h-4 w-4" />
              <span>Download resume</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-6 text-sm text-slate-300">
            <a
              href="tel:+918277208861"
              className="flex items-center gap-2 hover:text-sky-300"
            >
              <Phone className="h-4 w-4" />
              <span>+91-8277208861</span>
            </a>
            <a
              href="mailto:nandanjavagal444@gmail.com"
              className="flex items-center gap-2 hover:text-sky-300"
            >
              <Mail className="h-4 w-4" />
              <span>nandanjavagal444@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://linkedin.com/in/nandan-javagal-734627252"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-500 hover:text-sky-200"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Nandan-2004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-500 hover:text-sky-200"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right: AI profile card */}
        <div className="w-full max-w-sm md:ml-auto">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/60">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                MY PROFILE
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              {/* Primary stack row with tech pills */}
              <div className="rounded-2xl bg-slate-900/80 px-3 py-2">
                <p className="text-slate-400">Primary stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-sky-200 shadow-[0_0_10px_rgba(56,189,248,0.25)]">
                    Python
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-sky-200/90">
                    n8n
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-sky-200/90">
                    Streamlit
                  </span>
                </div>
              </div>

              {/* Focus areas row with tag pills */}
              <div className="rounded-2xl bg-slate-900/80 px-3 py-2">
                <p className="text-slate-400">Focus areas</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-violet-200/90">
                    NLP
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-violet-200/80">
                    HTML
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-violet-200/80">
                    CSS
                  </span>
                </div>
              </div>

              {/* Projects shipped metric tile */}
              <div className="rounded-2xl bg-slate-900/80 px-3 py-3">
                <div className="flex items-center gap-4">
                  {/* Circular metric badge */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 text-sm font-semibold text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.8)]">
                    <span>8+</span>
                    <span className="pointer-events-none absolute inset-[2px] rounded-full border border-white/20" />
                  </div>

                  {/* Label + subtle underline */}
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Projects shipped
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Production‑ready projects delivered across AI, automation, and web.
                    </p>
                    <div className="mt-2 h-px w-2/3 bg-gradient-to-r from-sky-400/60 via-cyan-300/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
