<template>
  <div>

    <h1>Premiere version de la carte</h1>
    <BusinessCard3D />

    <h1>Deuxieme version de la carte</h1>
    <BusinessCard3DAdvanced />

    <h1>Troisieme version de la carte</h1>
    <BusinessCardV3 />

    <div class="welcome-banner">
      <h2>Bienvenue sur mon portfolio ! 👋</h2>
      <p>
        Je suis étudiant en informatique à l'Université de Toulouse, spécialisé dans l'administration, la gestion et l'exploitation des données. 
        Passionné par le développement web et les nouvelles technologies, j'aime créer des solutions innovantes et élégantes.
      </p>
    </div>

    <div id="about" class="section">
      <h2>À propos de moi</h2>
      <div class="card">
        <p>
          Je m'appelle SENTAYEHU Yeadonaye et je suis actuellement en 2ème année de BUT Informatique à l'Université de Toulouse. 
          Mon parcours académique et mes projets m'ont permis d'acquérir des compétences solides en développement web, en bases de données 
          et en programmation orientée objet.
        </p>
        <p>
          Passionné par l'informatique depuis mon plus jeune âge, j'aime apprendre de nouvelles technologies et les mettre en pratique 
          dans des projets concrets. Je suis particulièrement intéressé par le développement full-stack et l'analyse de données.
        </p>
      </div>
    </div>

    <div class="section">
      <h2>Parcours académique</h2>
      <div class="card">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>BUT Informatique</h3>
              <p class="timeline-date">2024 - Présent</p>
              <p>Université de Toulouse - IUT Paul Sabatier</p>
              <p>Parcours : Administration, Gestion et Exploitation des Données</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>Baccalauréat Générale</h3>
              <p class="timeline-date">2024</p>
              <p>Lycée Guebre Mariam</p>
              <p>Spécialités : Mathématiques, NSI, Physique et Chimie</p>
              <p>Option : Maths Expertes</p>
              <p>Mention Assez Bien</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BusinessCardV3 from './BusinessCardV3.vue';

// Component logic here
</script>

<style scoped>
.welcome-banner {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 24px;
}

.welcome-banner h2 {
  margin-bottom: 16px;
  color: var(--github-text);
}

.welcome-banner p {
  color: var(--github-text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.section {
  margin-bottom: 32px;
}

.section h2 {
  margin-bottom: 16px;
  color: var(--github-text);
  font-size: 20px;
  font-weight: 600;
}

.card {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  padding: 24px;
}

.card p {
  color: var(--github-text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
}

.card p:last-child {
  margin-bottom: 0;
}

.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--github-border);
}

.timeline-item {
  position: relative;
  padding-bottom: 24px;
}

.timeline-dot {
  position: absolute;
  left: -30px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--github-primary);
  border: 3px solid var(--github-card-bg);
  z-index: 1;
}

.timeline-content {
  padding: 16px;
  background-color: var(--github-card-bg);
  border-radius: 6px;
}

.timeline-content h3 {
  margin: 0 0 4px 0;
  color: var(--github-text);
  font-size: 16px;
}

.timeline-date {
  color: var(--github-text-secondary);
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}

.timeline-content p {
  margin: 4px 0;
  color: var(--github-text-secondary);
  font-size: 14px;
  line-height: 1.5;
}
</style>
