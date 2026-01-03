import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ repo: string }> }
) {
  try {
    const { repo } = await params;
    const repoPath = decodeURIComponent(repo);
    
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };
    
    // Add GitHub token if available
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${repoPath}`,
      { headers, next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch repository data' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Extract relevant information
    const repoData = {
      stars: data.stargazers_count,
      lastCommit: new Date(data.pushed_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      forks: data.forks_count,
      language: data.language,
    };

    return NextResponse.json(repoData, { status: 200 });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
