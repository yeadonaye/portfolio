export default defineNuxtConfig({
  compatibilityDate: '2025-12-21',
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vercel/speed-insights'],
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'SENTAYEHU Yeadonaye · Software Engineer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de SENTAYEHU Yeadonaye, étudiant en informatique spécialisé en développement web, bases de données et ingénierie logicielle.' },
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [{ rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }]
    }
  },
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
