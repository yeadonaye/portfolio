interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  htmlUrl: string;
  language: string;
  stargazersCount: number;
  forksCount: number;
  updatedAt: string;
}

interface GitHubActivity {
  id: string;
  type: 'commit' | 'pull_request' | 'issue' | 'release' | 'repository';
  title: string;
  description: string;
  repository: string;
  url: string;
  createdAt: string;
}

interface GitHubApiRepo {
  id: number;
  name: string;
  full_name: string;
  description?: string | null;
  html_url: string;
  language?: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface GitHubApiEvent {
  id: string;
  type: string;
  created_at: string;
  repo?: { name?: string };
  payload?: Record<string, any>;
}

const GITHUB_API_BASE = 'https://api.github.com';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const username = String(config.githubUsername || 'yeadonaye');

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'nuxt-portfolio'
  };

  if (config.githubToken) {
    headers.Authorization = 'Bearer ' + String(config.githubToken);
  }

  try {
    const [reposResponse, eventsResponse] = await Promise.all([
      $fetch<GitHubApiRepo[]>(`${GITHUB_API_BASE}/users/${username}/repos`, {
        headers,
        query: { sort: 'updated', per_page: 8 }
      }),
      $fetch<GitHubApiEvent[]>(`${GITHUB_API_BASE}/users/${username}/events/public`, {
        headers,
        query: { per_page: 20 }
      })
    ]);

    const repositories: GitHubRepo[] = reposResponse.map((repo) => ({
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description || 'Aucune description disponible.',
      htmlUrl: repo.html_url,
      language: repo.language || 'Non spécifié',
      stargazersCount: repo.stargazers_count,
      forksCount: repo.forks_count,
      updatedAt: repo.updated_at
    }));

    const activities: GitHubActivity[] = eventsResponse
      .flatMap((event) => {
        const repository = event.repo?.name || 'Repository inconnu';
        const payload = event.payload || {};

        if (event.type === 'PushEvent') {
          const commits = Array.isArray(payload.commits) ? payload.commits : [];
          return commits.map((commit: { sha?: string; message?: string }, index: number) => {
            const shortSha = (commit.sha || '').slice(0, 7);
            const commitUrl = shortSha
              ? `https://github.com/${repository}/commit/${commit.sha}`
              : `https://github.com/${repository}`;

            return {
              id: `${event.id}-${shortSha || `commit-${index}`}`,
              type: 'commit' as const,
              title: commit.message || 'Commit sans message',
              description: shortSha ? `Commit ${shortSha}` : 'Commit récent',
              repository,
              url: commitUrl,
              createdAt: event.created_at
            };
          });
        }

        if (event.type === 'PullRequestEvent' && payload.pull_request) {
          return [{
            id: event.id,
            type: 'pull_request' as const,
            title: payload.pull_request.title || 'Pull request',
            description: `Action: ${payload.action || 'mise à jour'}`,
            repository,
            url: payload.pull_request.html_url || `https://github.com/${repository}/pulls`,
            createdAt: event.created_at
          }];
        }

        if (event.type === 'IssuesEvent' && payload.issue) {
          return [{
            id: event.id,
            type: 'issue' as const,
            title: payload.issue.title || 'Issue',
            description: `Action: ${payload.action || 'mise à jour'}`,
            repository,
            url: payload.issue.html_url || `https://github.com/${repository}/issues`,
            createdAt: event.created_at
          }];
        }

        if (event.type === 'ReleaseEvent') {
          return [{
            id: event.id,
            type: 'release' as const,
            title: payload.release?.name || payload.release?.tag_name || 'Nouvelle release',
            description: `Publication sur ${repository}`,
            repository,
            url: payload.release?.html_url || `https://github.com/${repository}/releases`,
            createdAt: event.created_at
          }];
        }

        if (event.type === 'CreateEvent') {
          return [{
            id: event.id,
            type: 'repository' as const,
            title: `Création ${payload.ref_type || 'resource'}`,
            description: payload.ref ? `Nom: ${payload.ref}` : `Activité sur ${repository}`,
            repository,
            url: `https://github.com/${repository}`,
            createdAt: event.created_at
          }];
        }

        return [];
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 14);

    return {
      source: 'github-api',
      username,
      repositories,
      activities
    };
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: "Impossible de récupérer les contributions GitHub pour le moment.",
      data: error
    });
  }
});
