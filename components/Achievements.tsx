'use client';

import { Award, Trophy } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      id: 'minipaper-presentation',
      title: 'Smart Water Monitoring System – Paper Presentation at S4SD 2025',
      description: 'Presented a research paper titled “Smart Water Monitoring System” at S4SD 2025 Conference, organized by SVKM Institute of Technology Dhule, Maharashtra, India, through online mode.'
    },
    {
      id: "survey_paper",
      title: '“VertexML_SurveyPaper” - Paper Presentation at ETMIS 2025',
      description:  'Presented a research paper titled “VertexML_SurveyPaper” at ETMIS 2025 – International Conference on Emerging Technologies for Multidisciplinary Innovation and Sustainability, Nigeria, through online mode.'
    
    },
    {
      id: 'ecohack-2024',
      title: 'EcoHack 2024',
      description:
        'Presented Smart Water Monitoring System showcasing ML-based forecasting and IoT integration.',
    },
    {
      id: 'ait-expo-2025',
      title: 'Project Expo at AIT Chikmagalur 2025',
      description: 'Showcased Smart Water Monitoring System to industry mentors and faculty.',
    },
    
  ];

  const certifications = [
    {
      id: 'python-hackerrank',
      name: 'Python HackerRank',
      year: '2023',
    },
    {
      id: 'ml-great-learning',
      name: 'Machine Learning',
      issuer: 'Great Learning',
      year: '2024',
    },
  ];

  return (
    <section id="achievements" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-semibold text-slate-50 md:text-4xl">
          Achievements & recognition
        </h2>

        <div className="space-y-8">
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-slate-100 shadow-lg shadow-slate-900/40 dark:border-slate-800 dark:bg-slate-900/70 md:p-8"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold md:text-xl">{achievement.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-sky-400" />
              <h3 className="text-xl font-semibold text-slate-100">Certifications</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-slate-100 shadow-md shadow-slate-900/40 dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div>
                    <h4 className="text-base font-semibold">{cert.name}</h4>
                    {cert.issuer && (
                      <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                    )}
                  </div>
                  <div className="mt-4 inline-flex w-fit items-center rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-200">
                    {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
