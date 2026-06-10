<template>
  <div>
    <Header />

    <main class="container page-container">
      <section class="page-hero">
        <h1>GitHub Contributions</h1>
        <p>Mes activités GitHub récentes sont récupérées dynamiquement via l’API GitHub.</p>
      </section>

      <section v-if="pending" class="state-card">
        <p class="state-title">Chargement des contributions…</p>
        <div class="skeleton-grid">
          <div v-for="index in 6" :key="index" class="skeleton-item"></div>
        </div>
      </section>

      <section v-else-if="error" class="state-card">
        <p class="state-title">Impossible de charger les données GitHub.</p>
        <p class="state-text">Veuillez réessayer.</p>
        <button class="action-btn" @click="refresh()">Réessayer</button>
      </section>

      <template v-else>
        <section class="meta">
          <span class="meta-pill">Utilisateur : {{ data?.username || 'N/A' }}</span>
          <a class="meta-pill meta-link" :href="`https://github.com/${data?.username}`" target="_blank" rel="noopener noreferrer">
            Profil GitHub
          </a>
        </section>

        <section v-if="!repositories.length && !activities.length" class="state-card">
          <p class="state-title">Aucune contribution récente trouvée.</p>
          <p class="state-text">Ajoutez des activités GitHub pour alimenter cette page automatiquement.</p>
        </section>

        <section v-if="repositories.length" class="content-section">
          <h2>Repositories récents</h2>
          <div class="cards-grid">
            <article v-for="repo in repositories" :key="repo.id" class="content-card">
              <div class="card-top">
                <h3>{{ repo.name }}</h3>
                <span class="card-language">{{ repo.language }}</span>
              </div>
              <p class="card-description">{{ repo.description }}</p>
              <div class="card-meta">
                <span>⭐ {{ repo.stargazersCount }}</span>
                <span>🍴 {{ repo.forksCount }}</span>
                <span>{{ formatDate(repo.updatedAt) }}</span>
              </div>
              <a :href="repo.htmlUrl" target="_blank" rel="noopener noreferrer" class="card-link">Voir le repository</a>
            </article>
          </div>
        </section>

        <section v-if="activities.length" class="content-section">
          <h2>Activités récentes</h2>
          <div class="cards-grid">
            <article v-for="activity in activities" :key="activity.id" class="content-card">
              <div class="card-top">
                <h3>{{ activity.title }}</h3>
                <span class="card-type">{{ activity.type }}</span>
              </div>
              <p class="card-description">{{ activity.description }}</p>
              <div class="card-meta">
                <span>{{ activity.repository }}</span>
                <span>{{ formatDate(activity.createdAt) }}</span>
              </div>
              <a :href="activity.url" target="_blank" rel="noopener noreferrer" class="card-link">Voir sur GitHub</a>
            </article>
          </div>
        </section>
      </template>
    </main>

    <Footer />
  </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useAsyncData('github-contributions', () =>
  $fetch('/api/github-contributions')
);

const repositories = computed(() => data.value?.repositories || []);
const activities = computed(() => data.value?.activities || []);

const formatDate = (value) =>
  new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value));
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

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.meta-pill {
  border: 1px solid var(--github-border);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 13px;
  color: var(--github-text-secondary);
}

.meta-link {
  color: var(--github-primary);
}

.content-section {
  margin-bottom: 28px;
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
  gap: 10px;
  animation: fadeIn 0.35s ease;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.content-card:hover {
  transform: translateY(-3px);
  border-color: var(--github-border-active);
}

.card-top {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.card-top h3 {
  font-size: 16px;
}

.card-language,
.card-type {
  border: 1px solid var(--github-border);
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 12px;
  color: var(--github-text-secondary);
  text-transform: capitalize;
}

.card-description {
  color: var(--github-text-secondary);
  font-size: 14px;
  line-height: 1.55;
  min-height: 44px;
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
}

.state-title {
  font-weight: 600;
  margin-bottom: 8px;
}

.state-text {
  color: var(--github-text-secondary);
  margin-bottom: 12px;
}

.action-btn {
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
  height: 90px;
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
