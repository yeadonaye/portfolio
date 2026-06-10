<template>
  <div>
    <Header />

    <main class="container page-container">
      <section class="page-hero">
        <h1>LinkedIn Posts</h1>
        <p>Section intégrée via l’embed LinkedIn pour afficher rapidement le profil et accéder aux derniers posts.</p>
      </section>

      <section v-if="isLoading" class="state-card">
        <p class="state-title">Chargement de l’embed LinkedIn…</p>
        <div class="skeleton-item"></div>
      </section>

      <section v-else-if="hasError" class="state-card">
        <p class="state-title">Impossible de charger l’embed LinkedIn.</p>
        <p class="state-text">Vous pouvez ouvrir directement le profil et voir les posts.</p>
        <a :href="profileUrl" target="_blank" rel="noopener noreferrer" class="action-link">Ouvrir le profil LinkedIn</a>
      </section>

      <section v-else class="content-section">
        <h2>Profil LinkedIn intégré</h2>
        <div class="embed-card">
          <ClientOnly>
            <div
              class="badge-base LI-profile-badge"
              data-locale="fr_FR"
              data-size="large"
              data-theme="light"
              data-type="VERTICAL"
              :data-vanity="profileVanity"
              data-version="v1"
            >
              <a class="badge-base__link LI-simple-link" :href="profileUrl">Voir le profil LinkedIn</a>
            </div>
          </ClientOnly>
        </div>
        <a :href="profileUrl" target="_blank" rel="noopener noreferrer" class="action-link">Voir les derniers posts sur LinkedIn</a>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const profileUrl = config.public.linkedinProfileUrl;
const profileVanity = config.public.linkedinProfileVanity;
const isLoading = ref(true);
const hasError = ref(false);

onMounted(() => {
  const existingScript = document.querySelector('script[data-linkedin-embed="true"]');
  if (existingScript) {
    isLoading.value = false;
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://platform.linkedin.com/badges/js/profile.js';
  script.async = true;
  script.defer = true;
  script.type = 'text/javascript';
  script.setAttribute('data-linkedin-embed', 'true');
  script.onload = () => {
    isLoading.value = false;
  };
  script.onerror = () => {
    hasError.value = true;
    isLoading.value = false;
  };

  document.body.appendChild(script);
});
</script>

<style scoped>
.page-container {
  padding-top: 28px;
}

.page-hero {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 10px;
  padding: 24px;
  margin-bottom: 24px;
}

.page-hero h1 {
  font-size: 30px;
  margin-bottom: 10px;
}

.page-hero p {
  color: var(--github-text-secondary);
}

.content-section h2 {
  margin-bottom: 14px;
}

.embed-card {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 14px;
  display: flex;
  justify-content: center;
}

.state-card {
  border: 1px solid var(--github-border);
  border-radius: 10px;
  padding: 24px;
  background-color: var(--github-card-bg);
  margin-bottom: 18px;
}

.state-title {
  font-weight: 600;
  margin-bottom: 8px;
}

.state-text {
  color: var(--github-text-secondary);
}

.action-link {
  display: inline-block;
  margin-top: 12px;
  background-color: var(--github-btn-bg);
  border: 1px solid var(--github-border);
  color: var(--github-btn-text);
  border-radius: 6px;
  padding: 8px 12px;
  text-decoration: none;
}

.action-link:hover {
  text-decoration: none;
  border-color: var(--github-border-active);
}

.skeleton-item {
  height: 180px;
  margin-top: 12px;
  border-radius: 8px;
  background: linear-gradient(90deg, var(--github-hover-bg), var(--github-card-bg), var(--github-hover-bg));
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 24px;
  }
}
</style>
