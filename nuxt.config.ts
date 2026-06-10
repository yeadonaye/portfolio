// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-21',

  // Indispensable pour que Nuxt fonctionne en mode serveur sur Alwaysdata
  ssr: true,

  devtools: { enabled: true },

  modules: ['@vercel/speed-insights'],

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN || '',
    githubUsername: process.env.GITHUB_USERNAME || 'yeadonaye',
    public: {
      linkedinProfileUrl: process.env.LINKEDIN_PROFILE_URL || 'https://www.linkedin.com/in/yeadonaye/',
      linkedinProfileVanity: process.env.LINKEDIN_PROFILE_VANITY || 'yeadonaye'
    }
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  app: {
    // On force le chemin des assets pour éviter les erreurs 500
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'My Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        }
      ]
    }
  },

  // Configuration Nitro pour optimiser le service des fichiers statiques
  nitro: {
    serveStatic: true,
    compressPublicAssets: true
  },

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@emailjs/browser'
    ]
  }
})