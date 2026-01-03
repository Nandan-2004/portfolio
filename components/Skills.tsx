'use client';

const skillCategories = [
  {
    title: 'Core',
    skills: ['Python', 'HTML', 'CSS'],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',    
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Pandas', 'NumPy', 'Git', 'Figma', 'N8N', 'Google Workspace'],
  },
  {
    title: 'Operating Systems',
    skills: ['Linux', 'Windows'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-50 md:text-1xl">
              What I work with day to day.
            </h2>
          </div>
    
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-md shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
