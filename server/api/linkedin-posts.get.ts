interface LinkedInPost {
  id: string;
  text: string;
  url: string;
  publishedAt: string;
}

interface LinkedInApiPost {
  id?: string;
  created?: { time?: number };
  specificContent?: {
    'com.linkedin.ugc.ShareContent'?: {
      shareCommentary?: { text?: string };
    };
  };
}

const LINKEDIN_API_URL = 'https://api.linkedin.com/v2/ugcPosts';

function parseFallbackPosts(rawFallback: string, profileUrl: string): LinkedInPost[] {
  if (!rawFallback) {
    return [];
  }

  try {
    const parsed = JSON.parse(rawFallback);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((item: Record<string, any>, index: number) => ({
        id: String(item.id || `fallback-${index}`),
        text: String(item.text || '').trim(),
        url: String(item.url || profileUrl),
        publishedAt: String(item.publishedAt || new Date().toISOString())
      }))
      .filter((post) => post.text.length > 0);
  } catch {
    return [];
  }
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const accessToken = String(config.linkedinAccessToken || '');
  const personUrn = String(config.linkedinPersonUrn || '');
  const profileUrl = String(config.linkedinProfileUrl || 'https://www.linkedin.com/in/yeadonaye/');
  const fallbackPosts = parseFallbackPosts(String(config.linkedinFallbackPostsJson || ''), profileUrl);

  if (!accessToken || !personUrn) {
    return {
      source: fallbackPosts.length ? 'fallback' : 'unconfigured',
      message: fallbackPosts.length
        ? 'Affichage via fallback temporaire (configuration API LinkedIn incomplète).'
        : "Configurez LINKEDIN_ACCESS_TOKEN et LINKEDIN_PERSON_URN pour afficher les posts LinkedIn en direct.",
      posts: fallbackPosts
    };
  }

  try {
    const response = await $fetch<{ elements?: LinkedInApiPost[] }>(LINKEDIN_API_URL, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'X-Restli-Protocol-Version': '2.0.0'
      },
      query: {
        q: 'authors',
        authors: `List(${personUrn})`,
        sortBy: 'LAST_MODIFIED',
        count: 10
      }
    });

    const posts: LinkedInPost[] = (response.elements || [])
      .map((post) => {
        const text = post.specificContent?.['com.linkedin.ugc.ShareContent']?.shareCommentary?.text?.trim() || '';
        const postId = post.id || '';
        const postUrl = postId ? `https://www.linkedin.com/feed/update/${postId}/` : profileUrl;
        const publishedAt = post.created?.time ? new Date(post.created.time).toISOString() : new Date().toISOString();

        return {
          id: postId || `linkedin-${publishedAt}`,
          text,
          url: postUrl,
          publishedAt
        };
      })
      .filter((post) => post.text.length > 0);

    return {
      source: 'linkedin-api',
      message: '',
      posts
    };
  } catch (error) {
    if (fallbackPosts.length > 0) {
      return {
        source: 'fallback',
        message: "L'API LinkedIn est indisponible. Affichage du fallback temporaire.",
        posts: fallbackPosts
      };
    }

    throw createError({
      statusCode: 502,
      statusMessage: 'Impossible de récupérer les posts LinkedIn pour le moment.',
      data: error
    });
  }
});
