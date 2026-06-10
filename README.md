# Portfolio - API configuration

Les nouvelles pages **GitHub Contributions** (`/github-contributions`) et **LinkedIn Posts** (`/linkedin-posts`) consomment des APIs côté serveur Nuxt.

## Variables d'environnement

Ajoutez ces variables dans votre environnement (ex: `.env`) :

```bash
GITHUB_USERNAME=yeadonaye
GITHUB_TOKEN=ghp_xxx_optional

LINKEDIN_ACCESS_TOKEN=linkedin_token
LINKEDIN_PERSON_URN=urn:li:person:xxxxxxxx
LINKEDIN_PROFILE_URL=https://www.linkedin.com/in/yeadonaye/

# Fallback optionnel (tableau JSON)
LINKEDIN_FALLBACK_POSTS_JSON=[{"id":"1","text":"Post exemple","url":"https://www.linkedin.com/feed/update/urn:li:ugcPost:123","publishedAt":"2026-01-01T12:00:00.000Z"}]
```

## Notes

- `GITHUB_TOKEN` est optionnel mais recommandé pour éviter les limites de rate limit.
- Les posts LinkedIn nécessitent généralement une authentification OAuth et un token valide.
- Si LinkedIn n'est pas configuré, la page peut afficher un fallback temporaire via `LINKEDIN_FALLBACK_POSTS_JSON`.
