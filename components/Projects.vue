<template>
  <div>
    <h2>Mes Projets</h2>
    
    <div class="projects-grid">
      <!-- Projet 1 -->
      <div class="project-card">
        <div class="project-header">
          <h3>Application de Gestion de Projets</h3>
          <div class="project-links">
            <a href="#" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="project-link" title="Voir la démo">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Une application web complète de gestion de projets avec authentification, tableaux Kanban et suivi des tâches.
        </p>
        <div class="project-tech">
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">MongoDB</span>
        </div>
      </div>

      <!-- Projet 2 -->
      <div class="project-card">
        <div class="project-header">
          <h3>Analyse de Données Météorologiques</h3>
          <div class="project-links">
            <a href="#" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Analyse et visualisation de données météorologiques historiques avec Python, Pandas et Matplotlib.
        </p>
        <div class="project-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Pandas</span>
          <span class="tech-tag">Matplotlib</span>
        </div>
      </div>

      <!-- Projet 3 -->
      <div class="project-card">
        <div class="project-header">
          <h3>Site E-commerce</h3>
          <div class="project-links">
            <a href="#" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Plateforme e-commerce avec système de panier, paiement et gestion des commandes.
        </p>
        <div class="project-tech">
          <span class="tech-tag">React</span>
          <span class="tech-tag">Express</span>
          <span class="tech-tag">PostgreSQL</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
h2 {
  margin-bottom: 24px;
  color: var(--github-text);
  font-size: 24px;
  font-weight: 600;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 16px;
}

.project-card {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--github-border-active);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.project-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--github-primary);
  flex: 1;
}

.project-links {
  display: flex;
  gap: 8px;
}

.project-link {
  color: var(--github-text-secondary);
  transition: color 0.2s ease;
  font-size: 14px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.project-link:hover {
  color: var(--github-text);
  background-color: var(--github-hover-bg);
}

.project-description {
  color: var(--github-text-secondary);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--github-border);
}

.tech-tag {
  background-color: var(--github-tag-bg);
  color: var(--github-text);
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  border: 1px solid var(--github-border);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
