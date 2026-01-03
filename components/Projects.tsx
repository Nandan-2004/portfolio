'use client';

import { ExternalLink, Star, GitBranch, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import projectsData from '@/data/projects.json';

interface GitHubRepoData {
  stars: number;
  lastCommit: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  githubUrl: string | null;
  featured?: boolean;
  achievements?: string[];
  resultUrl?: string;
}

export function Projects() {
  const [repoData, setRepoData] = useState<Record<string, GitHubRepoData>>({});

  useEffect(() => {
    // Fetch GitHub repo metadata for projects with GitHub URLs
    const fetchGitHubData = async () => {
      const data: Record<string, GitHubRepoData> = {};
      
      for (const project of projectsData.projects as Project[]) {
        if (project.githubUrl) {
          try {
            const repoPath = project.githubUrl.replace('https://github.com/', '');
            const response = await fetch(`/api/github/${encodeURIComponent(repoPath)}`);
            
            if (response.ok) {
              const repoInfo = await response.json();
              data[project.id] = repoInfo;
            }
          } catch (error) {
            console.error(`Failed to fetch GitHub data for ${project.id}:`, error);
          }
        }
      }
      
      setRepoData(data);
    };

    fetchGitHubData();
  }, []);

  const getStatusBadge = (status: string) => {
    const normalized = status.toLowerCase();

    switch (normalized) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-emerald-50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
            Completed
          </span>
        );
      case 'ongoing':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-3 py-1 text-xs font-medium text-sky-50">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            Ongoing
          </span>
        );
      case 'upcoming':
        return (
          <span className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-100 rounded-full">
            Upcoming
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {(projectsData.projects as Project[]).map((project) => {
            const status = project.status.toLowerCase();

            return (
              <div
                key={project.id}
                className="bg-gray-800/50 p-6 rounded-2xl hover:bg-gray-800/70 transition-all border border-gray-700 hover:border-gray-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white flex-1">
                    {project.title}
                  </h3>
                  {getStatusBadge(project.status)}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gray-700 text-gray-200 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl || project.resultUrl ? (
                  <div className="border-t border-gray-700 pt-4 space-y-3">
                    {project.githubUrl && repoData[project.id] && (
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{repoData[project.id].stars} stars</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Updated {repoData[project.id].lastCommit}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <GitBranch className="w-4 h-4" />
                          <span>View on GitHub</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {project.resultUrl && (
                        <a
                          href={project.resultUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-500 italic">
                      {status === 'ongoing' ? 'In development' : 'Coming soon'}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
