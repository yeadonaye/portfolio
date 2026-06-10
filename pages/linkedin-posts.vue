<template>
  <div>
    <Header />

    <main class="container page-container">
      <section class="page-hero">
        <h1>LinkedIn Posts</h1>
        <p>Mes publications LinkedIn sont récupérées dynamiquement lorsque l’API est configurée.</p>
      </section>

      <section v-if="pending" class="state-card">
        <p class="state-title">Chargement des posts LinkedIn…</p>
        <div class="skeleton-grid">
          <div v-for="index in 5" :key="index" class="skeleton-item"></div>
        </div>
      </section>

      <section v-else-if="error" class="state-card">
        <p class="state-title">Impossible de charger les posts LinkedIn.</p>
        <p class="state-text">Vérifiez la configuration API ou réessayez.</p>
        <button class="action-btn" @click="refresh()">Réessayer</button>
      </section>

      <template v-else>
        <section v-if="message" class="state-card">
          <p class="state-text">{{ message }}</p>
        </section>

        <section v-if="!posts.length" class="state-card">
          <p class="state-title">Aucun post disponible pour le moment.</p>
          <p class="state-text">Dès qu’un post est publié, cette page se mettra à jour automatiquement.</p>
        </section>

        <section v-else class="content-section">
          <h2>Posts récents</h2>
          <div class="cards-grid">
            <article v-for="post in posts" :key="post.id" class="content-card">
              <p class="post-text">{{ truncate(post.text) }}</p>
              <div class="card-meta">
                <span>{{ formatDate(post.publishedAt) }}</span>
              </div>
              <a :href="post.url" target="_blank" rel="noopener noreferrer" class="card-link">Voir le post LinkedIn</a>
            </article>
          </div>
        </section>
      </template>
    </main>

    <Footer />
  </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useAsyncData('linkedin-posts', () =>
  $fetch('/api/linkedin-posts')
);

const posts = computed(() => data.value?.posts || []);
const message = computed(() => data.value?.message || '');

const formatDate = (value) =>
  new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value));

const truncate = (value) => (value.length > 240 ? `${value.slice(0, 240)}…` : value);
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

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.content-card {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 10px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: fadeIn 0.35s ease;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.content-card:hover {
  transform: translateY(-3px);
  border-color: var(--github-border-active);
}

.post-text {
  color: var(--github-text);
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-line;
}

.card-meta {
  color: var(--github-text-secondary);
  font-size: 12px;
}

.card-link {
  margin-top: auto;
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

.action-btn {
  margin-top: 12px;
  background-color: var(--github-btn-bg);
  border: 1px solid var(--github-border);
  color: var(--github-btn-text);
  border-radius: 6px;
  padding: 8px 12px;
}

.skeleton-grid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.skeleton-item {
  height: 100px;
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
