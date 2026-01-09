'use client';

import { Mail, Send } from 'lucide-react';

export function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get('name') ?? '').toString();
    const email = (formData.get('email') ?? '').toString();
    const message = (formData.get('message') ?? '').toString();

    const subject = encodeURIComponent(
      `Portfolio contact from ${name || 'website visitor'}`,
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:nandanjavagal444@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3">
          <Mail className="h-7 w-7 text-white" />
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Contact
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-8 shadow-lg shadow-slate-900/40 dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/60"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/60"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="resize-none rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/60"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-sky-500/40 transition hover:bg-sky-400"
            >
              <Send className="h-4 w-4" />
              <span>Send email</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
