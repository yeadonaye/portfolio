# Portfolio - Configuration

La page **GitHub Contributions** (`/github-contributions`) consomme l’API GitHub côté serveur Nuxt.
La page **LinkedIn Posts** (`/linkedin-posts`) utilise un embed LinkedIn (sans API LinkedIn côté serveur).

## Variables d'environnement

Ajoutez ces variables dans votre environnement (ex: `.env`) :

```bash
GITHUB_USERNAME=yeadonaye
GITHUB_TOKEN=ghp_xxx_optional

LINKEDIN_PROFILE_URL=https://www.linkedin.com/in/yeadonaye/
LINKEDIN_PROFILE_VANITY=yeadonaye
```

## Notes

- `GITHUB_TOKEN` est optionnel mais recommandé pour éviter les limites de rate limit.
- L’embed LinkedIn s’appuie sur le script `https://platform.linkedin.com/badges/js/profile.js`.
- `LINKEDIN_PROFILE_VANITY` correspond au segment d’URL de votre profil (ex: `linkedin.com/in/<vanity>/`).
